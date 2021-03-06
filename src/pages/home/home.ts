import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewTaskPage } from '../new-task/new-task';
import { DeleteConfirmPage } from '../delete-confirm/delete-confirm';
import { Storage } from '@ionic/storage';
import { SignUpPage } from '../sign-up/sign-up';
import { EditTaskPage } from '../edit-task/edit-task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks;

  constructor(public navCtrl: NavController, public storage: Storage) {

  }

  newTask(){
    this.navCtrl.push(NewTaskPage);
  }

  ionViewWillEnter(){
    console.log('In Home Page');
    this.tasks = [];
    this.storage.get('tasks').then(
      (val) => {
        if(val == null){
          this.storage.set('tasks', []);
        }
        else{
          this.tasks = val;
        }
      }
    );
    
  }

  deleteItem(item: any){
    let index = this.tasks.indexOf(item);
    this.tasks.splice(index, 1);
    this.storage.set('tasks', this.tasks);
  }

  deleteConfirm(){
    this.navCtrl.push(DeleteConfirmPage);
  }

  editTask(item: any){
    this.navCtrl.push(EditTaskPage, {tasks: this.tasks, item: item});
  }

  logOut(){
    this.navCtrl.setRoot(SignUpPage);
  }

}
