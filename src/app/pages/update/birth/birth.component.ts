import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BirthService } from 'src/app/core/services/birth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-birth',
  templateUrl: './birth.component.html',
  styleUrls: ['./birth.component.scss']
})
export class BirthComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  createBirthForm: FormGroup;
  getId: any;
  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private birthService: BirthService) { 
      this.createBirthForm=this.formBuilder.group({
        // id:[''],
        name:[''],
        fname:[''],
        gname:[''],
        gender:[''],
        birthDate:[''],
        age:[''],
        birthPlace:[''],
        birthType:[''],
        birthAid:[''],
        ethnicOrigin:[''],
        citizenship:[''],
        region:[''],
        wereda:[''],
        zone:[''],
        kebele:[''],
        marriage:[''],
        divorce:[''],
        fatherInfo:[''],
        motherInfo:[''],
        otherThanParent:['']
      })

    }

  ngOnInit(): void { 
    this.getId = this.activatedRoute.snapshot.paramMap.get('civilId');
    this.birthService
      .gBirth(this.getId)
      .subscribe((res) => {
        this.createBirthForm.patchValue({ ...res.data });
      });
   }
  onSubmit():any{
    this.birthService.uBirth(this.getId,this.createBirthForm.value).subscribe(()=>{
      Swal.fire({
        title: 'Registration Updated Success full!',
        text: 'You can see under registred table!',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#5438dc',
  
      });
      console.log('Birth is registred successfully')
      this.ngZone.run(()=>this.router.navigateByUrl('/registred/birth-registred'))
    }, (err)=>{
      console.log(err);
    })
  }

}
