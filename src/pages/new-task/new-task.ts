import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Camera , CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the NewTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-task',
  templateUrl: 'new-task.html',
})
export class NewTaskPage {

  public title: any;
  public content: any;
  public picture: any;

  constructor(public navCtrl: NavController, public navParams: NavParams , public storage: Storage, public camera: Camera) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTaskPage');
  }

  saveTask(){

    this.storage.get('tasks').then(
      (val) => {
        val.push({
          title: this.title,
          content: this.content,
          picture: this.picture,
        });
        this.storage.set('tasks', val);
      }
    );
      this.navCtrl.pop();
  }

  savePhoto(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then((imageData) => {
      this.picture = 'data: image/jpeg;base64,' + imageData;
      console.log(this.picture);
    }, (err) => {
      console.log(err);
    });

  }

}
