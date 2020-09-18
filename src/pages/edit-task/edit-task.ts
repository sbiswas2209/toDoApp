import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the EditTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-task',
  templateUrl: 'edit-task.html',
})
export class EditTaskPage {

  public title: any;
  public content: any;
  public item: any;
  public originalTitle: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,  public toastCtrl: ToastController) {

    

  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad EditTaskPage');
    this.title = this.navParams.get('title');
    this.content = this.navParams.get('content');
    this.originalTitle = this.title;
    console.log(`Original : ${this.originalTitle}`);
    console.log(this.title);
    console.log(this.content);
  }

  editTask(){
    this.storage.remove(`${this.originalTitle}`).then((val) => {
      this.storage.set(`${this.title}`, {
        title: this.title,
        content: this.content,
      });
    });
    
    this.toast('Edited Task!');
    this.navCtrl.pop();
  }

  toast(message){
    let toast = this.toastCtrl.create({
      'message' : `${message}`,
      'duration' : 3000,
      'position' : 'bottom'
    });

    toast.present();

  }

}
