import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';
}
export interface Student{

  name: string;
  taskUploaded:boolean;
  photo:string;
  dateOfUpload:string;

}