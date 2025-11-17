import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface DropDownData {
  id:number,
  name:string
}

@Component({
  selector: 'app-drop-down-component',
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './drop-down-component.html',
  styleUrl: './drop-down-component.css'
})

export class DropDownComponent implements OnInit{
  @Input() labelTitle:string ='Default title';
  @Input() dataArray:DropDownData[] = [];

  @Output() selectionChange = new EventEmitter<number>();

  dataControl = new FormControl<number | null>(null, Validators.required);

 ngOnInit(): void {
   this.dataControl.valueChanges.subscribe((value)=>{
    this.selectionChange.emit(value!)
   })
 }

}
