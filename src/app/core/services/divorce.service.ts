import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Divorce } from "../models/divorce.model";
import { ServerResponse } from "../models/server-response.model";

const api = `${environment.apiUrl}/divorce`; 

const getDivorce= api+'/get/';
const createDivorce=api+'/add/';
const editDivorce =api +'/edit/';
const deleteDivorce=api+'/delete/';
const getAll=api+'/getAll';

@Injectable({
    providedIn:'root'
})
export class DivorceService{
    constructor( private http: HttpClient){}

    gAllDivorce():Observable<ServerResponse<Divorce>> {
            return this.http.get<ServerResponse<Divorce>>(getAll);
          }
    gDivorce(id:string):Observable<ServerResponse<Divorce>>{
        return this.http.get<ServerResponse<Divorce>>(getDivorce+id);

    }
    cDivorce(marriageId:string,payload: Divorce):Observable<Divorce[]>{
        return this.http.post<Divorce[]>(createDivorce + marriageId, payload)
    }
    uDivorce(divorceId:string,payload:Divorce):Observable<Divorce[]>{
        return this.http.put<Divorce[]>(editDivorce+divorceId,payload);

    }
    dDivorce(id:string):Observable<Divorce>{
        return this.http.delete<Divorce>(deleteDivorce+id);
    }

        
}