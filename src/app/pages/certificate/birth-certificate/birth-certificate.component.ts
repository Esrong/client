import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { mustMatchValidator } from 'src/app/core/helpers';
import { AccountService } from 'src/app/core/services/account.service';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-birth-certificate',
  templateUrl: './birth-certificate.component.html',
  styleUrls: ['./birth-certificate.component.scss']
})
export class BirthCertificateComponent  {
  @ViewChild("canvas") canvas;
  @Input() public width = 2048;
  @Input() public height = 1448;
  private cx: CanvasRenderingContext2D;

  constructor(  

    private alertService: AlertService,
    private router: Router,
    private accountService: AccountService,
   ) { }

   public ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d')!;
    let image = new Image();


    canvasEl.width = this.width;
    canvasEl.height = this.height;

    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';
    image.onload = ()=> {
        this.cx.drawImage(image, 0, 0, this.width, this.height);
    }
    // image.src = "../../../../wwwroot/dist/assets/blackBoards/NCAA_mhalfcourt_500x410.png";
    image.src = '/authentication-bg.jpg'
    image.src = '/EngBirthfinal.png'

}

}