import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs/internal/Subscriber';
import { TopheaderService } from 'src/app/Services/topheader.service';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.css']
})
export class TopheaderComponent implements OnInit {
  // recieve data Verialble\\
  getAllRecord:any;
  ///\\\\\\\\\\\\\\
  constructor(private topheaderService:TopheaderService) { }

  ngOnInit() {
    this.getAllHeaderDatailsData();
  }
  getAllHeaderDatailsData(){
     this.topheaderService.getheaderdetailsData().subscribe(
      (res:any)=> {
        debugger
       this.getAllRecord=res;
       console.log(this.getAllRecord);
     },
     (err:any)=> {
      console.log(err);
    })   
  }

}
