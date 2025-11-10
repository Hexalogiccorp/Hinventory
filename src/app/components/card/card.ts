import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

  @Input() title: string = '';
  @Input() quantity: number = 0;
  @Input() color: string = '';
  @Input() icon: string = '';  

}
