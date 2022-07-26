import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() pnl:any;
  PanelId:string = "";
  PanelName:string = "";

  ngOnInit(): void {
    this.PanelId = this.pnl.PanelId;
    this.PanelName = this.pnl.PanelName;
  }

  addPanel(){
    var val ={PanelId: this.PanelId, PanelName: this.PanelName};
    this.service.addPanel(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updatePanel(){
    var val ={PanelId: this.PanelId, PanelName: this.PanelName};
    this.service.updatePanel(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
