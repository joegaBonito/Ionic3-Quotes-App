import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
    private altBackground=false;

    setBackgroundColor(isAlt:boolean) {
        this.altBackground = isAlt;
    }

    isAltBackground() {
        return this.altBackground;
    }
}