import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000/ContactApp";
readonly PhotoUrl = "http://127.0.0.1:8000/media/";

  constructor(private http:HttpClient) { }

  getUserList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/user/');
  }

  addUser(val:any){
    return this.http.post(this.APIUrl + '/user/', val);
  }

  updateUser(val:any){
    return this.http.put(this.APIUrl + '/user/', val);
  }

  deleteUser(val:any){
    return this.http.delete(this.APIUrl + '/user/' + val);
  }


  getConList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/contact/');
  }

  addContact(val:any){
    return this.http.post(this.APIUrl + '/contact/', val);
  }

  updateContact(val:any){
    return this.http.put(this.APIUrl + '/contact/', val);
  }

  deleteContact(val:any){
    return this.http.delete(this.APIUrl + '/contact/'+ val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/SaveFile',val)
  }

  getAllUserNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/user/');
  }
}
