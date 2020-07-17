import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../service/student.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataSource } from '@angular/cdk/collections'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() studentDetails: '';
  displayedColumns = ['Address', 'Name', 'Age']

  // studentDetails = {
  //   Address:'',
  //   Name:'',
  //   Age:''
  // }
  
  constructor(private student: StudentService, private afs: AngularFirestore) { }
  
  ngOnInit(){
    
  }
}