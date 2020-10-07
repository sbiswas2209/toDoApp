import { Camera, CameraOptions } from '@ionic-native/camera';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTaskPage } from './new-task';

@NgModule({
  declarations: [
    NewTaskPage,
    Camera,
  ],
  imports: [
    IonicPageModule.forChild(NewTaskPage),
  ],
  providers:[
    Camera,
  ],
})
export class NewTaskPageModule {}
