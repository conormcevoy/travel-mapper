import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss']
})
export class LegendComponent {
  @Input() countries: any;
  @Input() highlightedText: string;
  @Output() highlightedCountry: EventEmitter<any> = new EventEmitter();

  public mouseEnter(code: string): void {
    this.highlightedCountry.emit(code);
  }

  public getClass(code: string): string {
    if (code === this.highlightedText) {
      return 'country-list__highlighted';
    }
  }
}