import { Component,OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-con',
  templateUrl: './add-edit-con.component.html',
  styleUrls: ['./add-edit-con.component.css']
})
export class AddEditConComponent {
  @Input()con : any;//declare con

  constructor(private service:SharedService){ }//define constructor SharedService

  ContactId!:string;//declare component and initial values
  ContactName!:string;
  PhoneNumber!:string;
  User!:string;
  Email!:string;
  PhotoFileName!:string;
  PhotoFilePath!:string;

  UsersList:any=[];//declare as empty list

  ngOnInit(): void{//used to perform initialization task as load user data
    this.loadUserList();
  }

  loadUserList(){//call getAllUserNames() in SharedService to retreive list of user name
    this.service.getAllUserNames().subscribe((data:any)=>{
      this.UsersList=data;

      this.ContactId=this.con.ContactId;
      this.ContactName=this.con.ContactName;
      this.PhoneNumber=this.con.PhoneNumber;
      this.User=this.con.User;
      this.Email=this.con.Email;
      this.PhotoFileName=this.con.PhotoFileName;
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    });
  }

  addContact(){//to add a new contact
    var val = {ContactId:this.ContactId,
                ContactName:this.ContactName,
                PhoneNumber:this.PhoneNumber,
                User:this.User,
                Email:this.Email,
                PhotoFileName:this.PhotoFileName};

    this.service.addContact(val).subscribe(res=>{
      alert(res.toString());
    });         
  }

  updateContact(){//to update a contact
    var val = {ContactId:this.ContactId,
                ContactName:this.ContactName,
                PhoneNumber:this.PhoneNumber,
                User:this.User,
                Email:this.Email,
                PhotoFileName:this.PhotoFileName};

    this.service.updateContact(val).subscribe(res=>{
      alert(res.toString());
    });         
  }

  uploadPhoto(event:any){//for user to selects a photo file for uploads
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName
    })
  }
}
