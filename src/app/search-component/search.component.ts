import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnChanges {
  @Input() countries: any;
  @Input() highlightedText: string;
  @Output() highlightedCountry: EventEmitter<any> = new EventEmitter();

  public ngOnChanges(): void {
    console.log(this.highlightedText);
  }

  public mouseEnter(code: string): void {
    this.highlightedCountry.emit(code);
  }

  public getClass(code: string): string {
    if (code === this.highlightedText) {
      return 'country-list__highlighted';
    }
  }
}