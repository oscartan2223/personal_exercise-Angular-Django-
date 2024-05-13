import { Component,OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent {
  @Input()user : any;

  constructor(private service:SharedService){ }

  UserId!:string;
  UserName!:string;

  ngOnInit(): void{
    this.UserId = this.user.UserId;
    this.UserName = this.user.UserName;
  }

  addUser(){
    var val = {UserId:this.UserId,
                UserName:this.UserName}
    this.service.addUser(val).subscribe(res=>{
      alert(res.toString());
    });         
  }

  updateUser(){
    var val = {UserId:this.UserId,
                UserName:this.UserName}
    this.service.updateUser(val).subscribe(res=>{
    alert(res.toString());
    }); 
  }
}
