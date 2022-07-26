import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://127.0.0.1:8000";
  readonly PhotoUrl = "http://127.0.0.1:8000/media/";

  constructor(private http:HttpClient) { }

  // List all panel types
  getPanelList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/panel/');
  }

  // New panel
  addPanel(val:any){
    return this.http.post(this.APIUrl + '/panel/', val);
  }

  // Change panel data
  updatePanel(val:any){
    return this.http.put(this.APIUrl + '/panel/', val);
  }

  // Delete panel record
  deletePanel(val:any){
    return this.http.delete(this.APIUrl + '/panel/' + val);
  }

  // List all members
  getMemberList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/member/');
  }

  // New member
  addMember(val:any){
    return this.http.post(this.APIUrl + '/member/', val);
  }

  // Change member data
  updateMember(val:any){
    return this.http.put(this.APIUrl + '/member/', val);
  }

  // Delete member record
  deleteMember(val:any){
    return this.http.delete(this.APIUrl + '/member/' + val);
  }

  uploadPhoto(val:any){
    return this.http.post(this.APIUrl + '/SaveFile', val);
  }

  getPanelNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/panel/');
  }

}
