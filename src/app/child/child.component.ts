import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataSource } from '@angular/cdk/collections'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {


  constructor(private student: StudentService, private afs: AngularFirestore) { }

  displayedColumns = ['Address', 'Name', 'Age'];
  dataSource = new StudentDataSource (this.student);
}

  export class StudentDataSource extends DataSource<any> {
    constructor (private student: StudentService) {
      super()
    }

    connect() {
      return this.student.getStudents();
    }

    disconnect() {

    }
  }