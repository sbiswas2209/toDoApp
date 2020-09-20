import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  constructor(public navCtrl: NavController, public navParams: NavParams , public storage: Storage) {
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
        });
        this.storage.set('tasks', val);
      }
    );
      this.navCtrl.pop();
  }

}
