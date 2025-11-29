import { NgComponentOutlet } from '@angular/common';
import { Component, Input, OnInit, Type } from '@angular/core';

interface TabType {
  icon: string;
  name: string;
  component: Type<any>;
}

@Component({
  selector: 'app-tabs-component',
  imports: [NgComponentOutlet],
  templateUrl: './tabs-component.html',
  styleUrl: './tabs-component.css',
})


export class TabsComponent implements OnInit {
  @Input() tabsArray!: TabType[];
  tabActive: number = 0;

  ngOnInit(): void {
    this.tabActive = 0;
  }

  getTab(index: number) {
    this.tabActive = index;
  }
}
