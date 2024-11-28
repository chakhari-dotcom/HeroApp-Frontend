import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
   
    heros : any=[];
    constructor(private data: DataService){}
    
    ngOnInit(): void{

      this.data.all().subscribe({
        next:(res)=>{
          this.heros=res;
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }



    deleteHero(id:any){
      this.data.delete(id).subscribe({
        next:(res)=>{
         this.ngOnInit();
        },
        error:(err)=>{
          console.log(err);
        }
      })

    }
}
