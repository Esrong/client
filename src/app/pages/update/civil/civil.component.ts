import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first, finalize } from 'rxjs/operators';
import { AlertService } from 'src/app/core/services/alert.service';
import { CivilService } from 'src/app/core/services/civil.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-civil',
  templateUrl: './civil.component.html',
  styleUrls: ['./civil.component.scss']
})
export class CivilComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  onsubmit: boolean;
  error = '';
  success = '';
  loading : boolean;
  successmsg = false;
  getId: any;

  

  createCivilForm: FormGroup;
  constructor(
    private alertService: AlertService,
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private civilService: CivilService) { }
    

  ngOnInit() { 

    this.getId = this.activatedRoute.snapshot.paramMap.get('civilId');
    this.civilService
      .gCivil(this.getId)
      .subscribe((res) => {
        this.createCivilForm.patchValue({ ...res.data });
      });


    this.createCivilForm=this.formBuilder.group({
      name:['',[Validators.required]],
      fname:['',[Validators.required]],
      gname:[''],
      gender:[''],
      birthDate:['',[Validators.required]],
      age:['',[Validators.required]],
      birthPlace:['',[Validators.required]],
      citizenship:['',[Validators.required]],
      ethnicOrigin:['',[Validators.required]],
      religion:['',[Validators.required]],
      region:['',[Validators.required]],
      zone:['',[Validators.required]],
      wereda:['',[Validators.required]],
      kebele:['',[Validators.required]],
      marriage:[''],
      divorce:[''],

    })
    this.onsubmit = false;

   }
  get type() {
    return this.createCivilForm.controls;
  }


  onSubmit():any{
    this.success='';
    this.onsubmit=true;
    if(this.createCivilForm.invalid){
      return;
    }
    else{
      this.loading=true;
      this.civilService.eCivil(this.getId,this.createCivilForm.value)
      .subscribe(()=>{
        Swal.fire({
          title: 'Registration Updated Success full!',
          text: 'You can see under registred table!',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#5438dc',
    
        });
        this.ngZone.run(()=>this.router.navigateByUrl('/registred/civil-registred'))
      },(err)=>{
        console.log(err);
      })

    }   
    if(this.successmsg=true){
      // this.ngZone.run(()=>this.router.navigateByUrl('/registred/civil-registred'))
    }
  }


}
