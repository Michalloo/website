import { Component, OnInit } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatDividerModule} from '@angular/material/divider';
import { STUDENTS } from '../students_details' 

@Component({
  selector: 'app-introduction-to-python',
  templateUrl: './introduction-to-python.component.html',
  styleUrls: ['./introduction-to-python.component.css']
})
export class IntroductionToPythonComponent implements OnInit {

  startDate: string ="21 Jun 2019" ;
  endDate: string = "21 Jul 2019";
  courseDetails: string;
  comments_number:number=50;
  submitted_value:number=41;
  pending_value:number=12;
  active_value:number=21;
  assesment_details:string;
  assesment_name:string;
  students = STUDENTS;




  constructor() { }

  ngOnInit(): void {
  }

}
