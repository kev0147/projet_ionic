import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasServiceService, Semester } from '../datas-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  semesters:Semester[]=[];
  constructor(private datasService:DatasServiceService) { }

  ngOnInit() {
    this.datasService.getSemesters()
      .then((s)=>{
        console.log(this.semesters);
        this.semesters=s;
        console.log(this.semesters);
      });
  }

}
