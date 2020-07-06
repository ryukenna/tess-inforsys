import { Injectable } from '@angular/core';
import { AngularFirestore }from '@angular/fire/firestore'

@Injectable()
export class StudentService {

  constructor(private afs: AngularFirestore) {}

  addStudent(studentData) {
    this.afs.collection('students').add(studentData).then (() =>{
      console.log('Done');
    })
  }

  getStudents() {
    return this.afs.collection('students', ref => ref.orderBy('Age')).valueChanges();
  }
}
