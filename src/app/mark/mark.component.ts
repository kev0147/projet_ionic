import { ActivatedRoute, Router } from '@angular/router';
import { DatasServiceService, Course, Mark } from './../datas-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.scss'],
})
export class MarkComponent implements OnInit {

  course:Course|undefined;



  constructor(private fb:FormBuilder, private datasServiceService:DatasServiceService, private router:ActivatedRoute, private r: Router) { }

  markForm=this.fb.group({
    score:[[],[Validators.required, Validators.pattern('^[0-20]$')]],
  })

  ngOnInit() {
    this.datasServiceService.getCourseById(parseInt(this.router.snapshot.paramMap.get('id')!))
      .then((course)=>{
        this.course = course;
      })
  }

  edit(){
    const scoreEntre:any=this.markForm.get('score')?.value;
    const note:Mark={
      id:this.course?.mark.id!,
      score:scoreEntre
    };
    console.log(note);
    this.datasServiceService.setMark(this.course!, note);
    this.r.navigate(['/semester/'+this.course?.semester.id]);
  }

  back(){
    this.r.navigate(['/semester/'+this.course?.semester.id]);
  }
}
