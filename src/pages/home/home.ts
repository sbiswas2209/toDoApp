import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewTaskPage } from '../new-task/new-task';
import { DeleteConfirmPage } from '../delete-confirm/delete-confirm';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks = [];

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

}
