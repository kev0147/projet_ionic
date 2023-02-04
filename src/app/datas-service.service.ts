import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DatasServiceService {

  constructor(private storage: Storage) {
    this.storage.create();
    this.storage.set(SEMESTER_KEY, semesters);
    this.storage.set(COURSES_KEY, courses);
    this.storage.set(MARK_KEY, []);
  }

  ////CRUD Courses///////
  getCourses():Promise<any>{
    return this.storage.get(COURSES_KEY);
  }

  getCourseById(courseId:number):Promise<any>{
    return this.storage.get(COURSES_KEY)
      .then((courses:Course[])=>{
        for(let course of courses){
          if(course.id==courseId){
            this.storage.set('course',course);
            return this.storage.get('course');
          }
        }
        return null;
      });
  }

  getCoursesOfSemester(semester:Semester):Promise<any>{
    this.storage.get(COURSES_KEY)
      .then((courses:Course[])=>{
        let semesterCourses:Course[]=[];
        for(let course of courses ){
          if(course.semester.id==semester.id){
            semesterCourses.push(course);
          }
        }
        this.storage.set('CoursesOfSemester', semesterCourses);
      });
    return this.storage.get('CoursesOfSemester');
  }

  getCoursesOfSemesterById(semesterId:number):Promise<any>{
    this.storage.get(COURSES_KEY)
      .then((courses:Course[])=>{
        let semesterCourses:Course[]=[];
        for(let course of courses ){
          if(course.semester.id==semesterId){
            semesterCourses.push(course);
          }
        }
        this.storage.set('CoursesOfSemester', semesterCourses);
      });
    return this.storage.get('CoursesOfSemester');
  }

  ////////CRUD Semester
  getSemesters():Promise<any>{
    console.log(this.storage.get(SEMESTER_KEY));
    return this.storage.get(SEMESTER_KEY);
  }

  getSemesterById(semesterId:number):Promise<any>{
    this.storage.get(SEMESTER_KEY)
      .then((semesters:Semester[])=>{
        for(let semester of semesters ){
          if(semester.id==semesterId){
            this.storage.set('semester', semester);
          }
        }
      });
    return this.storage.get("semester");
  }

  setMark(course:Course, mark:Mark):Promise<any>{
    this.storage.get(COURSES_KEY)
      .then((courses)=>{
        let coursesToSave:Course[]=[];
        for(let c of courses){
          if(course.id!=c.id){
            coursesToSave.push(c);
          }
        }
        course.mark=mark;
        coursesToSave.push(course);
        this.storage.set(COURSES_KEY, coursesToSave);
      });
    return this.storage.get(COURSES_KEY);
  }

  deleteMark(course:Course):Promise<any>{
    this.storage.get(COURSES_KEY)
      .then((courses)=>{
        let coursesToSave:Course[]=[];
        for(let c of courses){
          if(c.id!=course.id){coursesToSave.push(c);}
        }
        course.mark.score=0;
        coursesToSave.push(course);
        this.storage.set(COURSES_KEY, coursesToSave);
      });
    return this.storage.get(COURSES_KEY);
  }
}




///////////////////////////////////////////donnees////////////////////////////////////////
const MARK_KEY='marks';
const SEMESTER_KEY='semesters';
const COURSES_KEY='courses';

export interface Mark{
  id:number;
  score:number;
}

export interface Semester{
  id:number;
  name:string;
}

export interface Course{
  id:number;
  name:string;
  semester:Semester;
  coef:number;
  mark:Mark;
}

const semesters:Semester[]=[{id:0, name:'IC1-s1'}, {id:1, name:'IC1-s2'}, {id:2, name:'IC2-s1'}, {id:3, name:'IC2-s2'}, {id:4, name:'IC3-s1'}, {id:5, name:'IC3-s2'}];
const courses:Course[]=[
  {name:'math pour ingenieur', semester: semesters[0], id:1, coef:2, mark:{id:1,score:0 }},
  {name:'java',semester: semesters[0], id:2 , coef:2, mark:{id:2,score:0 }},
  {name:'electromagnetisme', semester: semesters[0], id:3, coef:2, mark:{id:3,score:0 }},
  {name:'lcs',semester: semesters[0], id:4, coef:2, mark:{id:4,score:0 }},
  {name:'AOP',semester: semesters[1], id:5, coef:2, mark:{id:5,score:0 }},
  {name:'projet',semester: semesters[1], id:6, coef:2, mark:{id:6,score:0 }},
  {name:'traitement signal', semester: semesters[2], id:7, coef:2, mark:{id:7,score:0 }},
  {name:'transmission herztienne', semester: semesters[3], id:8, coef:2, mark:{id:8,score:0 }},
  {name:'applications mobiles', semester: semesters[4], id:9, coef:2, mark:{id:9,score:0 }},
  {name:'stage ingenieur',semester: semesters[5], id:10, coef:2, mark:{id:10,score:0 }},
  {name:'electrotech',semester: semesters[1], id:11, coef:2, mark:{id:11,score:0 }},
  {name:'transfert thermique',semester: semesters[1], id:12, coef:2, mark:{id:12,score:0 }},
  {name:'reseaux',semester: semesters[2], id:13, coef:2, mark:{id:13,score:0 }},
  {name:'service reseaux',semester: semesters[2], id:14, coef:2, mark:{id:14,score:0 }},
  {name:'automatique',semester: semesters[2], id:15, coef:2, mark:{id:15,score:0 }},
  {name:'genie logiciel',semester: semesters[3], id:16, coef:2, mark:{id:16,score:0 }},
  {name:'fibre optique',semester: semesters[3], id:17, coef:2, mark:{id:17,score:0 }},
  {name:'reseaux mobiles',semester: semesters[4], id:18, coef:2, mark:{id:18,score:0 }},
  {name:'test de penetration',semester: semesters[4], id:19, coef:2, mark:{id:19,score:0 }},
  {name:'projet ingenieur',semester: semesters[5], id:20, coef:2, mark:{id:20,score:0 }},
  {name:'stage ingenieur',semester: semesters[5], id:21, coef:2, mark:{id:21,score:0 }}
];
