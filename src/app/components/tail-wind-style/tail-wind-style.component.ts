import { Component, OnInit } from '@angular/core';
import { IntegrateService } from 'src/app/services/integrate.service';

@Component({
  selector: 'app-tail-wind-style',
  templateUrl: './tail-wind-style.component.html',
  styleUrls: ['./tail-wind-style.component.css']
})
export class TailWindStyleComponent implements OnInit {
  userList:any[]=[]
  
  constructor(private services:IntegrateService){  }
  ngOnInit(): void {
    this.get()
  }

  get(){
    this.services.getApi().subscribe(item=>{
      this.userList=item
      console.log(item);
    })
  }


}
