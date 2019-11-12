import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements AfterViewInit, OnChanges {
  @Input() public highlightedCountries: any;
  @Output() public hoveredCountry: EventEmitter<string> = new EventEmitter();
  public highlightColor = '#228B22';
  public defaultColor = '#dcdcdc';
  public element;
  public styledCountries: string[] = [];
  public svgCountries;

  constructor() {
    this.highlightedCountries = [];
  }

  public ngOnChanges(): void {
    this.resetColors();
    this.assignColors(this.highlightedCountries);
  }

  public ngAfterViewInit(): void {
    this.assignColors(this.highlightedCountries);
    this.svgCountries = document.querySelectorAll('#countries > *');
    console.log(this.svgCountries);
    this.svgCountries.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        // addOnFromState(el);
        console.log(' enter ', el.id);
        this.hoveredCountry.emit(el.id);
      });
      el.addEventListener('mouseleave', () => {
        // removeAllOn();
        console.log(' leave ', el.id);
        this.hoveredCountry.emit('');
      });

      el.addEventListener('touchstart', () => {
        // removeAllOn();
        // addOnFromState(el);
      });
    });
  }

  public assignColors(countries: any): void {
    countries.map(country => {
      this.element = document.getElementById(country);
      this.element.style.fill = this.highlightColor;
      this.styledCountries.push(country);
      return;
    });
  }

  public resetColors(): void {
    this.styledCountries.map(country => {
      this.element = document.getElementById(country);
      this.element.style.fill = this.defaultColor;
      return;
    });
    this.styledCountries = [];
  }
}
