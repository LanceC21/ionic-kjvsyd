import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  gender: string;
  noInput: string;
  feet: number;
  inch: number;
  inchOver: number;
  robinson: number;
  miller: number;
  hamwi: number;
  devine: number;

  getIdealWeight() {
    if(this.gender="m"){
      if(this.feet < 5 && this.inch < 12){
        this.robinson = 52 + (1.9 * this.inch);
        this.miller = 56.2 + (1.41 * this.inch);
        this.hamwi = 48 + (2.7 * this.inch);
        this.devine = 50 + (2.3 * this.inch);
      } else if(this.feet >= 5 && this.inch < 12){
        this.inchOver = ((this.feet - 5) * 12) + this.inch; // converts feet to inches, adds extra inches
        this.robinson = 52 + (1.9 * this.inchOver);
        this.miller = 56.2 + (1.41 * this.inchOver);
        this.hamwi = 48 + (2.7 * this.inchOver);
        this.devine = 50 + (2.3 * this.inchOver);
      } else {
        this.noInput = "No input detected.";
      }
    } else if (this.gender="f") {
        if(this.feet < 5 && this.inch < 12){
        this.robinson = 49 + (1.7 * this.inch);
        this.miller = 53.1 + (1.36 * this.inch);
        this.hamwi = 45.5 + (2.1 * this.inch);
        this.devine = 45.5 + (2.3 * this.inch);
      } else if(this.feet >= 5 && this.inch < 12){
        this.inchOver = ((this.feet - 5) * 12) + this.inch; // converts feet to inches, adds extra inches
        this.robinson = 49 + (1.7 * this.inchOver);
        this.miller = 53.1 + (1.36 * this.inchOver);
        this.hamwi = 45.5 + (2.1 * this.inchOver);
        this.devine = 45.5 + (2.3 * this.inchOver);
      } else {
        this.noInput = "No input detected.";
      }
    }
  }
  constructor(public navCtrl: NavController) {

  }

}
