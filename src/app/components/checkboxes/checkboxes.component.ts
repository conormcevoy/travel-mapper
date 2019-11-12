import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss']
})
export class CheckboxesComponent implements OnChanges {
  @Input() public countries;

  public ngOnChanges(): void {
    console.log(this.countries);
  }
}
