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
  public tasks: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,  public toastCtrl: ToastController) {

    

  }



  ionViewDidLoad(){

    this.tasks = this.navParams.get('tasks');
    this.item = this.navParams.get('item');
    console.log(this.tasks);
    console.log(this.item);
    this.title = this.item.title;
    this.content = this.item.content;
    
  }

  editTask(){
    var index = this.tasks.indexOf(this.item);
    this.tasks.splice(index, 1, {
      title: this.title,
      content: this.content
    });
    this.storage.set('tasks', this.tasks);
    this.toast('Edited Task');
    this.navCtrl.pop();
  }

  toast(message){
    let toast = this.toastCtrl.create({
      'message' : `${message}`,
      'duration' : 2000,
      'position' : 'bottom'
    });

    toast.present();

  }

}
