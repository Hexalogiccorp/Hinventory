import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-component',
  imports: [MatSidenavModule, MatButtonModule, RouterModule],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css'
})

export class SidebarComponent {
   showFiller = false;
   isOpen = false;

   
   

}
