import { SettingsService } from './../../services/settings.service';
import { QuotesService } from './../../services/quotes.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage{
  quotes:Quote[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public quotesService:QuotesService,
    public modalCtrl:ModalController, 
    private menu:MenuController,
    private settingsService:SettingsService) {
      this.menu.enable(true);
  }

  ionViewWillEnter() {
    console.log("initViewWillEnter called");
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote:Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove:boolean)=> {
      if(remove == true) {
        this.onRemoveFromFavorites(quote);
      }
      console.log(remove);
    });
    // modal.willLeave.subscribe((remove:boolean) => {
    //   console.log(remove);
    // });

  }

  onRemoveFromFavorites(quote:Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
        //this.quotes = this.quotesService.getFavoriteQuotes();
        const position = this.quotes.findIndex((quoteEl:Quote)=>{
          return quoteEl.id == quote.id;
        });
        this.quotes.splice(position,1);
  }

  getBackground() {
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'favoriteQuoteBackround';
  }

}
