import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Country } from 'src/app/model/country.model';
import { DataService } from 'src/app/service/data.service';
import { NewComponent } from '../new/new.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  countries :Array<Country>;
  constructor(private data :DataService,
    private dialogRef:MatDialogRef<EditComponent>,
    private http: HttpClient){
    this.countries = data.countries;
  }
  close(){
    this.dialogRef.close();
  }
}
