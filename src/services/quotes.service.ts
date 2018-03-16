import { Quote } from "../data/quote.interface";
import { Injectable } from "@angular/core";


@Injectable()
export class QuotesService {
    private favoriteQuotes:Quote[] = [];

    addQuoteToFavorites(quote:Quote) {
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    removeQuoteFromFavorites(quote:Quote) {
        const position = this.favoriteQuotes.findIndex((quoteEl:Quote)=> quoteEl.id == quote.id);
        this.favoriteQuotes.splice(position,1);
    }

    getFavoriteQuotes() {
        console.log(this.favoriteQuotes.slice())
        return this.favoriteQuotes.slice();
    }

    isQuoteFavorite(quote:Quote) {
        return this.favoriteQuotes.find((quoteEl:Quote)=>{
            return quoteEl.id == quote.id;
        })
    }
}