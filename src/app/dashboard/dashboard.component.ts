import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Limittxt : Number;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  processLimit() : void {
    if(this.Limittxt){
      this.router.navigate([`/generate/${this.Limittxt}`]);
    }
  }

}
