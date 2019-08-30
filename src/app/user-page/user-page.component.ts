import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  
  constructor( private route : ActivatedRoute, private router : Router) { }
    data:any

  ngOnInit() {
     this.route.params.subscribe(params=>
      {
        let jdata=params['data']
        this.data = JSON.parse(jdata);

        console.log(this.data ,"-----json data")
        console.log(this.data.id)
        console.log(this.data.email1)
      })
  }

}
