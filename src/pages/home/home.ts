import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
    this.storage.forEach((value , key) => {
      this.tasks.push(value);
      console.log(this.tasks);
    });
    
  }

  refresh(){
    this.tasks = [];
    this.storage.forEach((value , key) => {
      this.tasks.push(value);
    });
  }

  deleteItem(item: any){
    let index = this.tasks.indexOf(item);
    this.storage.remove(`${this.tasks[index]}`);
    this.tasks.splice(index, 1);
  }

  deleteConfirm(){
    this.navCtrl.push(DeleteConfirmPage);
  }

  editTask(item: any){
    this.tasks.splice(0, this.tasks.length-1);
    console.log(item);
    var title = item.title;
    console.log(title);
    var content = item.content;
    this.navCtrl.push(EditTaskPage, {title , content});
    this.storage.forEach((value , key) => {
      this.tasks.push(value);
      console.log(this.tasks);
    });
  }

  logOut(){
    this.navCtrl.setRoot(SignUpPage);
  }

}
