import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '@shared';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SidebarComponent,MatSidenavModule, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Hiventory');
  isOpen=false;

  changeOpen(sideChange:boolean){
    this.isOpen = sideChange;
  }
}