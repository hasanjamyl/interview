import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private service:SharedService) { }

  Members:any = [];

  ModalTitle:string = "";
  ActivateSettingComp:boolean = false;
  mbr:any;

  ngOnInit(): void {
    this.refreshMemberList();
  }

  addClick(){
    this.mbr = {
      MemberId:0,
      MemberName: "",
      Panel: "",
      DateOfJoining: "",
      PhotoFileName: "unknown.png"
    }
    this.ModalTitle = "Add Member";
    this.ActivateSettingComp = true;
  }

  deleteClick(item: any){
    if(confirm("Are you sure?")){
      this.service.deleteMember(item.MemberId).subscribe(data=>{
        alert(data.toString());
        this.refreshMemberList();
      });
    }
  }

  editClick(item: any){
    this.mbr = item;
    this.ModalTitle = "Edit Member";
    this.ActivateSettingComp = true;
  }

  closeClick(){
     this.ActivateSettingComp = false;
     this.refreshMemberList();
  }

  refreshMemberList(){
    this.service.getMemberList().subscribe(data=>{
      this.Members=data;
    });
  }

}
