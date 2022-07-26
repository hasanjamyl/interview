import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private service:SharedService) { }

  Panels:any = [];

  ModalTitle:string = "";
  ActivateAddEditComp:boolean = false;
  pnl:any;

  PanelIdFilter: String = "";
  PanelNameFilter: String = "";
  PanelListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshPanelList();
  }

  addClick(){
    this.pnl = {
      PanelId:0,
      PanelName: ""
    }
    this.ModalTitle = "Add Panel";
    this.ActivateAddEditComp = true;
  }

  deleteClick(item: any){
    if(confirm("Are you sure?")){
      this.service.deletePanel(item.PanelId).subscribe(data=>{
        alert(data.toString());
        this.refreshPanelList();
      });
    }
  }

  editClick(item: any){
    this.pnl = item;
    this.ModalTitle = "Edit Panel";
    this.ActivateAddEditComp = true;
  }

  closeClick(){
     this.ActivateAddEditComp = false;
     this.refreshPanelList();
  }

  refreshPanelList(){
    this.service.getPanelList().subscribe(data=>{
      this.Panels=data;
      this.PanelListWithoutFilter=data;
    });
  }

  filter(){
    var PanelIdFilter = this.PanelIdFilter;
    var PanelNameFilter = this.PanelNameFilter;
    this.Panels = this.PanelListWithoutFilter.filter(function (el: any){
      return el.PanelId.toString().toLowerCase().includes(
        PanelIdFilter.toString().trim().toLowerCase()
      ) &&
      el.PanelName.toString().toLowerCase().includes(
        PanelNameFilter.toString().trim().toLowerCase()
      )
    });
  }

  sortResult(prop:any,asc:any){
    this.Panels = this.PanelListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
        return (a[prop]>b[prop])? 1 : ((a[prop]<b[prop]) ? -1: 0);
      }else{
        return (b[prop]>a[prop])? 1 : ((b[prop]<a[prop]) ? -1: 0);
      }

    })
  }

}
