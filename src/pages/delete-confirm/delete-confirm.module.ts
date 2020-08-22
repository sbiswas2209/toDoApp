import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteConfirmPage } from './delete-confirm';

@NgModule({
  declarations: [
    DeleteConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteConfirmPage),
  ],
})
export class DeleteConfirmPageModule {}
