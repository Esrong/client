import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DeathService } from 'src/app/core/services/death.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-death',
  templateUrl: './death.component.html',
  styleUrls: ['./death.component.scss']
})
export class DeathComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  createDeathForm: FormGroup;
  getId: any;
  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private deathService: DeathService) { 
      this.createDeathForm=this.formBuilder.group({
        // id:[''],
        reason:[''],
        place:[''],
        evidance:[''],
        region:[''],
        // countDeath:[''],
        deathDate:[''],
        details:[''],
        // registrationDate:['']

      })

    }

  ngOnInit(): void { 
    this.getId = this.activatedRoute.snapshot.paramMap.get('deathId');
    this.deathService
      .gDeath(this.getId)
      .subscribe((res) => {
        this.createDeathForm.patchValue({ ...res.data });
      });
   }
  onSubmit():any{
    this.deathService.uDeath(this.getId,this.createDeathForm.value).subscribe(()=>{
      Swal.fire({
        title: 'Registration Updated Success full!',
        text: 'You can see under registred table!',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#5438dc',
  
      });
      console.log('Death is registred successfully')
      this.ngZone.run(()=>this.router.navigateByUrl('/registred/death-registred'))
    }, (err)=>{
      console.log(err);
    })
  }

}
