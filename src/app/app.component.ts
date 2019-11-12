import { Component } from '@angular/core';

import { Countries } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public countries = Countries;
  public countriesHighlighted: string[] = [];
  public textHighlighted: string;

  public highlightMap(code: string): void {
    this.countriesHighlighted = [code];
  }

  public highlightText(code: string): void {
    this.countriesHighlighted = [code];
    this.textHighlighted = code;
  }
}
