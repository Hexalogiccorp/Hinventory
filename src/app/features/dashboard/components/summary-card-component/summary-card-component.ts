import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() route: string = '';

  constructor(private router: Router) {}

  protected navigate() {
  if (this.route) {
    this.router.navigate([this.route]);
  }
}
}