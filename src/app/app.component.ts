import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { StudentService } from './service/student.service';
import { DataSource } from '@angular/cdk/collections'
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private student: StudentService, private afs: AngularFirestore){}
  displayedColumns = ['Address', 'Name', 'Age'];
  
  dataSource: MatTableDataSource<any>;

  studentDetails = {
    Address: '',
    Name: '',
    Age: ''
  }

  addStudents() {
    this.student.addStudents(this.studentDetails);
  }

  getStudents() {
    return this.student 
  }

  ngOnInit(){
    
  }

  // export class StudentDataSource extends DataSource<any> {
  //   constructor (private student: StudentService) {
  //     super()
  //   }

    async getStudent() {
      let x = await new Promise(res => {
        this.student.getStudents().subscribe(z => {
          res(z)
        });
      })
      this.dataSource
    }
  }
  // }
  //   connect() {
  //     return this.student.getStudents();
  //   }

  //   disconnect() {

  //   }
  // }
