import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { StudentService } from './service/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private items: any;
  constructor(private student: StudentService, private afs: AngularFirestore){

  }

}
