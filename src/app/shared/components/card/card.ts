import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

  @Input() title: string = '';
  @Input() quantity: number = 0;
  @Input() styles: string = '';
  @Input() icon: string = '';  

}
