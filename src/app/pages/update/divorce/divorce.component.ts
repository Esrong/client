import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DivorceService } from 'src/app/core/services/divorce.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-divorce',
  templateUrl: './divorce.component.html',
  styleUrls: ['./divorce.component.scss']
})
export class DivorceComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  createDivorceForm: FormGroup;
  getId: any;
  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private divorceService: DivorceService) { 
      this.createDivorceForm=this.formBuilder.group({
        // id:[''],
        reason:[''],
        place:[''],
        religion:[''],
        region:[''],
        divorceInfo:[''],
        divorceDate:[''],
        malePartner:[''],
        femalePartner:[''],
        countDivorce:[''],
        registrationDate:[''],
        // registrationDate:['']

      })

    }

  ngOnInit(): void { 
    this.getId = this.activatedRoute.snapshot.paramMap.get('divorceId');
    this.divorceService
      .gDivorce(this.getId)
      .subscribe((res) => {
        this.createDivorceForm.patchValue({ ...res.data });
      });
   }
  onSubmit():any{
    this.divorceService.uDivorce(this.getId,this.createDivorceForm.value)
    .subscribe(()=>{
      Swal.fire({
        title: 'Registration Updated Success full!',
        text: 'You can see under registred table!',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#5438dc',
  
      });
      // console.log('Death is registred successfully')
      this.ngZone.run(()=>this.router.navigateByUrl('/registred/divorce-registred'))
    }, (err)=>{
      console.log(err);
    })
  }

}
