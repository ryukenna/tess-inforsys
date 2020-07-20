import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument }from '@angular/fire/firestore'

@Injectable()
export class StudentService {
  studentsDoc: AngularFirestoreDocument<any>;

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

  deleteStudents(studentsDoc) {
    this.afs.doc('students/' + studentsDoc).delete();
  }
}
  // deleteStudents(data) {
  //   return this.afs.collection("students").doc(data.payload.doc.id).delete();
  //   }
//   deleteStudents(studentsData) {
//     return this.afs.collection("students").doc(studentsData.payload.doc.id).delete();
//  }

  // deleteStudents(studentsData) {
  //   this.itemDoc = this.afs.doc('students/$(students.id)');
  //   this.itemDoc.delete();
  // }

