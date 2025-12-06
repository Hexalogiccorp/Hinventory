import { Component } from '@angular/core';
import { TabsComponent } from '@shared';
import { AddAssetFormComponent, AddCategoryFormComponent } from '../../components';

@Component({
  selector: 'app-asset-page',
  imports: [TabsComponent, AddAssetFormComponent, AddCategoryFormComponent],
  templateUrl: './asset-page.html',
  styleUrl: './asset-page.css',
})
export class AssetPage {
  arrayComponents = [
    { icon: 'arrow_circle_up', name: 'Activos', component: AddAssetFormComponent },
    { icon: 'category', name: 'Categorías', component: AddCategoryFormComponent },
  ];
}
