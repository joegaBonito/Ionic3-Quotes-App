import { QuotesService } from './../../services/quotes.service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: string, quotes: Quote[], icon: string };
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public quotesService:QuotesService) {
  }

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  //   console.log('ionViewDidLoad QuotesPage');
  // }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote:Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selectedQuote);
            console.log("ok");
          }
        },
        {
          text: 'No, I changed my mind',
          handler: () => {
            console.log("Cancelled!");
          }
        }]
    });
    alert.present();
  }

  onRemoveFromFavorite(selectedQuote:Quote) {
    this.quotesService.removeQuoteFromFavorites(selectedQuote);
  }

  isFavorite(quote:Quote){
    return this.quotesService.isQuoteFavorite(quote);
  }
}
