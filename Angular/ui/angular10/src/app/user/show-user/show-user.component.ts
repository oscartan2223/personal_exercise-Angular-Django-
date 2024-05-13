import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent {

  constructor(private service:SharedService){}

  UserList:any=[];

  ModalTitle!:string;
  ActivateAddEditUserComp:boolean=false;
  user:any;

  UserIdFilter:string="";
  UserNameFilter:string="";
  UserListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshUserList();
  }

  addClick(){
    this.user={
      UserId:0,
      UserName:""
    }
    this.ModalTitle="Add User";
    this.ActivateAddEditUserComp=true;
  }

  editClick(item: any){
    this.user=item;
    this.ModalTitle="Edit User";
    this.ActivateAddEditUserComp=true;
  }

  deleteClick(item: any){
    console.log(item)
    if(confirm('Are you sure??')){
        this.service.deleteUser(item.UserId).subscribe(data => {
        alert(data.toString());
        this.refreshUserList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditUserComp=false;
    this.refreshUserList();
  }

  refreshUserList(){
    this.service.getUserList().subscribe(data=>{
      this.UserList=data;
      this.UserListWithoutFilter=data;
    });
  }

  FilterFn(){
    var UserIdFilter = this.UserIdFilter;
    var UserNameFilter = this.UserNameFilter;

    this.UserList = this.UserListWithoutFilter.filter(function(el:any){
      return el.UserId.toString().toLowerCase().includes(
        UserIdFilter.toString().trim().toLowerCase()
      )&&
      el.UserName.toString().toLowerCase().includes(
        UserNameFilter.toString().trim().toLowerCase()
      )
    });
  }
}
