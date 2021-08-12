import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";



import { environment } from "src/environments/environment";
import { Civil } from "../models/civil.model";
import { Image } from "../models/image";
import { ServerResponse } from "./server-response.model";
const api = `${environment.apiUrl}/civil`; 
const api2 = `${environment.apiUrl}/image`; 

const gCivil= api+'/details/';
const cCivil =  api+'/add';
const eCivil= api+'/edit/';
const dCivil= api+'/delete/';
const getAll= api+'/getAll';
const getChart=api+'/allCivil';
const AddAll=api+ '/total'
const civilStatistics=api+'/civilStatistics';
const getImage=api2+'/images'


@Injectable({
    providedIn:'root'
})
export class CivilService{
    constructor(  private http: HttpClient){}
    getAll():Observable<ServerResponse<Civil[]>>{
        return this.http.get<ServerResponse<Civil[]>>(getAll);
    }
    gCivil(civilId:string):Observable<ServerResponse<Civil[]>>{
        return this.http.get<ServerResponse<Civil[]>>(gCivil+civilId);
    }
    createCivil(payload:Civil):Observable<ServerResponse<Civil[]>>{
        return this.http.post<ServerResponse<Civil[]>>(cCivil,payload)
    }
    eCivil(civilId:string,payload:Civil):Observable<ServerResponse<Civil[]>>{
        return this.http.put<ServerResponse<Civil[]>>(eCivil+civilId,payload)
    }
    dCivil(civilId: string):Observable<ServerResponse<Civil[]>>{
        return this.http.delete<ServerResponse<Civil[]>>(dCivil+civilId)
    }
      addAll():Observable<ServerResponse<Civil[]>>{
          return this.http.get<ServerResponse<Civil[]>>(AddAll);
      }
    statistics():Observable<ServerResponse<Civil[]>>{
        return this.http.get<ServerResponse<Civil[]>>(civilStatistics);
    }
    getImage():Observable<ServerResponse<Image>>{
        return this.http.get<ServerResponse<Image>>(getImage);
    }

}