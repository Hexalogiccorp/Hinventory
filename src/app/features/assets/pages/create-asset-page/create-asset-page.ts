import { Component } from '@angular/core';
import { TabsComponent } from '@shared/components/tabs-component/tabs-component';
import { AddAssetFormComponent } from '../../components/add-asset-form-component/add-asset-form-component';
import { AddCategoryFormComponent } from '../../components/add-category-form-component/add-category-form-component';

@Component({
  selector: 'app-create-asset-page',
  imports: [TabsComponent,AddAssetFormComponent,AddCategoryFormComponent],
  templateUrl: './create-asset-page.html',
  styleUrl: './create-asset-page.css'
})
export class CreateAssetPage {

  arrayComponents=[
    {icon:"arrow_circle_up",name:"Activos",component:AddAssetFormComponent},
    {icon:"category",name:"Categorías",component:AddCategoryFormComponent}
  ]

}
