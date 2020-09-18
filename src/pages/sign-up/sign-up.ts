import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators , FormBuilder , FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  loginStatus:any = false;

  authStatus:any = false;

  credentialsSignUp: FormGroup;

  credentialsLogin: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public storage:Storage, public toastCtrl: ToastController) {

    this.credentialsSignUp = this.formBuilder.group({
      userName: ['',
      Validators.compose([
        Validators.pattern(/^[a-zA-Z]*$/)
      ])
    ],
      email: ['',
      Validators.compose([
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        Validators.required,
      ]),
    ],
      password: ['',
        Validators.compose([
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/),
          Validators.required,
        ])
    ],

    phone: ['', 
    Validators.compose([
      Validators.pattern(/^[0-9]{10,}$/),
      Validators.required
    ])
  ]
    });

    this.credentialsLogin = this.formBuilder.group({
      password: [''],
      userName: ['']
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');

    this.storage.get('logInStatus').then(
      (val) => {
        if(val == null){
          this.storage.set('logInStatus', false);
          this.loginStatus = false;
        }
        else{
          this.loginStatus = val;
        }
      } 
    );

  }


  signUp(){
    console.log(this.credentialsSignUp.value);
    this.storage.set('loginStatus', true);
    this.storage.set('userName', this.credentialsSignUp.controls['userName'].value);
    this.storage.set('email', this.credentialsSignUp.controls['email'].value);
    this.storage.set('phone', this.credentialsSignUp.controls['phone'].value);
    this.storage.set('password', this.credentialsSignUp.controls['password'].value);

    

    this.navCtrl.setRoot(HomePage);

    this.toast(`Welcome ${this.credentialsSignUp.controls['userName'].value}`);

  }

  userName:any = false;
  password:any = false;
  logIn(){ 
    this.storage.get('userName').then((name) => {
      this.storage.get('password').then((pass) => {
        if(this.credentialsLogin.controls['userName'].value == name || this.credentialsLogin.controls['password'].value == pass){
          this.toast(`Welcome ${this.credentialsLogin.controls['userName'].value}`);
          this.navCtrl.setRoot(HomePage);
        }
        else{
          this.toast('Log In Failed');
        }
      });
    });
  }

  toast(message){
    let toast = this.toastCtrl.create({
      'message' : `${message}`,
      'duration' : 3000,
      'position' : 'bottom'
    });

    toast.present();

  }

  toggleView(){
    this.loginStatus = !this.loginStatus;
  }

}
