import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-component',
  imports: [MatButtonModule, MatCardModule, MatIconModule,NgClass],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css'
})
export class CardComponent {

  @Input() title: string = '';
  @Input() quantity: number = 0;
  @Input() styles: string = '';
  @Input() icon: string = '';  

}
