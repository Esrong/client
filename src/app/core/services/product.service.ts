import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';


import { Civil } from '../models/civil.model';
import { ServerResponse } from './server-response.model';

const SERVER_URL = environment.apiUrl + '/civil/Civil/';

@Injectable({ providedIn: 'root' })
export class ProductService {


  private civils: Civil[] = [];
  private civilsUpdated = new Subject<{civils: Civil[], count: number, error: string}>();

  constructor(private http: HttpClient, private router: Router) {}  
 
  getSome(perPage: number, currentPage: number, filter?: string) {
    let queryParams = `?ps=${perPage}&pg=${currentPage}`;

    if (filter) {
      queryParams += `&search=${filter}`;
    }

    this.http.get<{message: string, civils: any, total: number}>(SERVER_URL + queryParams)
    .pipe(map((rawData) => {
      const civils = [];
      const raw = rawData.civils;
      for (let i = 0; i < raw.length; i++) {
        civils.push(new Civil(
          raw[i]._id,
          raw[i].name,
          raw[i].fname,
          raw[i].gname,
          raw[i].name,
          raw[i].fname,
          raw[i].gname,
          raw[i].name,
          raw[i].fname,
          raw[i].gname,
          raw[i].name,
          raw[i].fname,
          raw[i].gname,
          raw[i].name,
          raw[i].fname,
          raw[i].gname,
        ));
      }
      return { civils: civils};
    }))
    .subscribe((mappedData) => {
      if (mappedData !== undefined) {
        this.civils = mappedData.civils;
        this.civilsUpdated.next();

        // this.civilsUpdated.next({
        //   civils: [...this.civils],
        //   count: mappedData.count
        // });
      }
    }, error => { 
      this.civilsUpdated.next({civils: [], count: 0, error: error.message });       
    });
  }

  getUpdatedListener() {
    return this.civilsUpdated.asObservable();
  }

}