import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { map } from 'rxjs/operators';

@Injectable()
export class StudentService {

  constructor(private afs: AngularFirestore) { }

  addStudents(studentsData) {
    this.afs.collection('students').add(studentsData).then(() => {
      console.log('Done');
    })
  }

  updateStudents() {
    // const data = this.afs.collection('students').valueChanges()
    // return data;

    const data = this.afs.collection('students')
    return data.snapshotChanges().pipe(map(actions => {
      return actions.map((a: any) => {
        const data = a.payload.doc.data()
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }))
  }

  // deleteStudents(data) {
  //   this.afs.doc('students/' + data).delete().then (() =>{
  //     console.log('Deleted')
  //   })
  // }
  deleteStudents(id) {
    return this.afs.collection("students").doc(id).delete();
  }
}
//   deleteStudents(studentsData) {
//     return this.afs.collection("students").doc(studentsData.payload.doc.id).delete();
//  }

  // deleteStudents(studentsData) {
  //   this.itemDoc = this.afs.doc('students/$(students.id)');
  //   this.itemDoc.delete();
  // }

