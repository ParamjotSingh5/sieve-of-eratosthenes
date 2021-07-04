import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NumberState } from '../NumberState';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  limit : number;
  limitMap: NumberState[] = [];
  multiplierList = [2,3,5,7];
  _filteredPrime = false;

  constructor(private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.limit = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.generateMapForLimit();    
  }
  
  generateMapForLimit() : void{
    for(var i=2; i<= this.limit; i++){
      var numberstate = new NumberState(i, false);
      this.limitMap.push(numberstate);      
    }    
  }

  startfilteringPrime = () =>{    
    this._filteredPrime = true;
    var fixedLimit : number = this.limit;

    this.multiplierList.forEach((value) => {
      var max:number;
      max = fixedLimit / value;

      for(var i=1; i<= max; i++)
      {
        var foo = i * value;

        if(foo != value)
        {
          this.limitMap.find(x => x.id === foo).checkedOut = true;                             
        }
      }
    });
  }

  
}
