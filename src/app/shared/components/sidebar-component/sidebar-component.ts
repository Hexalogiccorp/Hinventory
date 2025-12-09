import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-component',
  imports: [RouterModule, MatTooltipModule, NgClass],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css',
})
export class SidebarComponent {
  @Input() isOpen!: boolean;
  @Output() isOpenChange = new EventEmitter<boolean>();

  toggle() {
    this.isOpenChange.emit(!this.isOpen);
  }
}
