import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
    
  id: any;
  hero:any;

  // chnimporti activatedRoute bech najem nethakem f lien teei
  constructor( private act:ActivatedRoute, private data: DataService, private router:Router){}

  ngOnInit():void{
    // star hedha bech jebt l id 
    this.id=this.act.snapshot.paramMap.get('id');
    // star hedha jebt les information ili tebaa kol id m data
    this.data.byId(this.id).subscribe({
      next:(res)=>{
        this.hero=res;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

      save(){
        this.data.update(this.id,this.hero).subscribe({
          next:(res)=>{
            this.router.navigate(['/list'])
          },
          error:(err)=>{
            console.log(err);
          }
        })
      }





}
