import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-con',
  templateUrl: './show-con.component.html',
  styleUrls: ['./show-con.component.css']
})
export class ShowConComponent {

  constructor(private service:SharedService){}

  ContactList:any=[];

  ModalTitle!:string;//store title
  ActivateAddEditConComp:boolean=false;//used to activate or deactivate add/edit
  con:any;
  ngOnInit(): void {//get contact list
    this.refreshConList();
  }

  addClick(){//set modaltile and activate add
    this.con={
      ContactId:0,
      ContactName:"",
      PhoneNumber:"",
      User:"",
      Email:"",
      PhotoFileName:"anonymous.png"
    }
    this.ModalTitle="Add Contact";
    this.ActivateAddEditConComp=true;
  }

  editClick(item: any){//set modaltitle and activate edit
    this.con=item;
    this.ModalTitle="Edit Contact";
    this.ActivateAddEditConComp=true;
  }

  deleteClick(item: any){//to delete data using SharedService from backend
    console.log(item)
    if(confirm('Are you sure??')){
        this.service.deleteContact(item.ContactId).subscribe(data => {
        alert(data.toString());
        this.refreshConList();
      })
    }
  }
  closeClick(){//deactivate add/edit
    this.ActivateAddEditConComp=false;
    this.refreshConList();
  }
  refreshConList(){//get method to retrieve data
    this.service.getConList().subscribe(data=>{
      this.ContactList=data;
    });
  }
}
