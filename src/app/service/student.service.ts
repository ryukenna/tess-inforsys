import { Injectable } from '@angular/core';
import { AngularFirestore }from '@angular/fire/firestore'

@Injectable()
export class StudentService {

  constructor(private afs: AngularFirestore) {}

  addStudents(studentsData) {
    this.afs.collection('students').add(studentsData).then (() =>{
      console.log('Done');
    })
  }

  getStudents() {
    const data = this.afs.collection('students').valueChanges()
    return data;
  }
}
