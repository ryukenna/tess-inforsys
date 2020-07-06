import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  studentDetails = {
    studentAddress: '',
    studentName: '',
    studentAge: ''
  }

  constructor(private student: StudentService, private afs: AngularFirestore) { }

  addStudent() {
    this.student.addStudent(this.studentDetails);
  }
}
