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
  dataSource: any;

  studentDetails = {
    Name: '',
    Address: '',
    Age: ''
  }
  
  constructor(private student: StudentService, private afs: AngularFirestore){}
  // displayedColumns = ['Address', 'Name', 'Age'];
  
  ngOnInit() {
    this.updateStudents()
  }

  addStudents() {
    this.student.addStudents(this.studentDetails);
  }

  // deleteStudents(ID) {
  //   this.student.deleteStudents(ID);
  // }

  async updateStudents() {
    let x = await new Promise(res => {
      this.student.updateStudents().subscribe(z => {
        res(z)
      });
    })
    this.dataSource = x
  }
}
  // export class StudentDataSource extends DataSource<any> {
  //   constructor (private student: StudentService) {
  //     super()
  //   }

  // }
  //   connect() {
  //     return this.student.getStudents();
  //   }

  //   disconnect() {

  //   }
  // }
