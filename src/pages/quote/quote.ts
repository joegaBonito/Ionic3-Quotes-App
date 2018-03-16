import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';


@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage implements OnInit {
  quote:Quote;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl:ViewController) {
  }

  ngOnInit() {
    this.quote = this.navParams.data;
  }

  onClose(remove = false) {
      this.viewCtrl.dismiss(remove);
  }

}
