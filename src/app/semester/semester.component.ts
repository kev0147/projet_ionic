import { Course, DatasServiceService } from './../datas-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss'],
})
export class SemesterComponent implements OnInit {

  courses:Course[]=[];
  constructor(private datasService:DatasServiceService, private route:ActivatedRoute, private r:Router) { }

  ngOnInit() {
    this.datasService.getCoursesOfSemesterById(parseInt(this.route.snapshot.paramMap.get('id')!))
      .then((courses)=>{
        this.courses=courses;
      });
  }

  back(){
    this.r.navigate(['/home']);
  }

  delete(course: Course){
    this.datasService.deleteMark(course);
  }

  moyenne():number{
    let sum:number=0;
    for(let course of this.courses){
      sum+=course.mark.score;
    }
    return sum / this.courses.length;
  }
}
