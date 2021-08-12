import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { finalize, first, map } from 'rxjs/operators';
import { Civil } from 'src/app/core/models/civil.model';
import { Death } from 'src/app/core/models/death';
import { ServerResponse } from 'src/app/core/models/server-response.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { CivilService } from 'src/app/core/services/civil.service';
import { DeathService } from 'src/app/core/services/death.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-death-registration',
  templateUrl: './death-registration.component.html',
  styleUrls: ['./death-registration.component.scss']
})
export class DeathRegistrationComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  deaths:Death[]=[];

  createDeathForm: FormGroup;
  searchForm: FormGroup;
  loading:boolean;
  enable:boolean;
  //details:any;
  civils:any  =[];
  error = '';
  successmsg = false;
  onsubmit: boolean;
  success = '';
  civil:ServerResponse<Civil[]>;
  selectedHero?: Civil;

  


  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private civilService:CivilService,

    private alertService: AlertService,
     
    private deathDesrvice: DeathService) { 
      this.searchForm = this.formBuilder.group({
       details:['',[Validators.required]]
      })

      this.createDeathForm=this.formBuilder.group({
        // id:[''],
        reason:[''],
        place:[''],
        evidance:[''],
        region:[''],
        // countDeath:[''],
        deathDate:[''],
      //  details:[''],
        registrationDate:['']
      })

    }

  ngOnInit(): void { }

  get type() {  return this.searchForm.controls; }

  onSelect(hero: Civil): void {
    this.selectedHero = hero;
  }

  onSubmit(){
    const query:string =this.searchForm.value.details;
    this.success='';
    this.onsubmit=true;
    if(this.searchForm.invalid){
      return;
    }
    else{
     // this.successmsg = true;
      this.loading=true;
      this.civilService.gCivil(query) 
      
     //  .pipe(finalize(()=)
      .subscribe(
       data => {
         this.successmsg = true;
         this.civil =data;
         if (this.successmsg) {
           // this.router.navigate([`/birth/`+`${query}`]);
          //  this.successmsg = true;
           this.civil =data;
           this.loading=false;

         }
       },
       error => {
         this.error = error ? error : '';
         this.loading=true;
       }); 

    }  

   }


  onPush(){
    this.loading=true;
    const details: string = this.searchForm.value.details;

      
      this.deathDesrvice.cDeath(details,this.createDeathForm.value)
      .pipe(first())
      .pipe(finalize(()=>this.loading=false))
      .subscribe({
        
        next:()=> Swal.fire({
          title: 'Registration Success full!',
          text: 'You can see under registred table!',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#5438dc',
          
    
        }),

        error: error => {
          this.error = error ? error : '';
          this.loading=true;
        }
        
      })
    
      //   if(this.successmsg){
      //     this.loading=false
      //     this.ngZone.run(()=>this.router.navigateByUrl('/registred/death-registred'))
      // }
  
      
  }
}