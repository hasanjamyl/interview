import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() mbr:any;
  MemberId:string = "";
  MemberName:string = "";
  Panel:string = "";
  DateOfJoining:string = "";
  PhotoFileName:string = "";
  PhotoFilePath:string = "";

  Panels:any = [];

  ngOnInit(): void {

    this.loadPanels();

  }

  loadPanels(){
    this.service.getPanelNames().subscribe((data:any)=>{
      this.Panels=data;
      
      this.MemberId = this.mbr.MemberId;
      this.MemberName = this.mbr.MemberName;
      this.Panel = this.mbr.Panel;
      this.DateOfJoining = this.mbr.DateOfJoining;
      this.PhotoFileName = this.mbr.PhotoFileName;
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    });
  }

  addMember(){
    var val ={MemberId: this.MemberId, 
              MemberName: this.MemberName,
              Panel: this.Panel,
              DateOfJoining: this.DateOfJoining,
              PhotoFileName: this.PhotoFileName
            };
    this.service.addMember(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateMember(){
    var val ={MemberId: this.MemberId, 
      MemberName: this.MemberName,
      Panel: this.Panel,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName
    };
    this.service.updateMember(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  uploadPhoto(event: any){
    var file=event.target.files[0];
    const formData:FormData = new FormData();
    formData.append('uploadedFile',file,file.name);
    this.service.uploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    })
  }

}

