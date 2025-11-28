import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary-card-component',
  imports: [],
  templateUrl: './summary-card-component.html',
  styleUrl: './summary-card-component.css'
})
export class SummaryCardComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() quantity: number = 0;
  @Input() backgroundColor: string = '';
}
