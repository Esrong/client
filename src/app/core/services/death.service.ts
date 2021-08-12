import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";
import { Death } from "../models/death";
import { ServerResponse } from "../models/server-response.model";

const api = `${environment.apiUrl}/death`; 

const getDeath= api+'/getDeath/';
const createDeath=api+'/add/';
const editDeath =api +'/edit/';
const deleteDeath=api+'/delete/';
const getAll=api+'/getAll';
// const searchBookEndpoint = api + '/search/';
@Injectable({
    providedIn:'root'
})
export class DeathService{
    constructor( private http: HttpClient){}

    gAllDeath():Observable<ServerResponse<Death>> {
            return this.http.get<ServerResponse<Death>>(getAll);
          }
    gDeath(id:string):Observable<ServerResponse<Death>>{
        return this.http.get<ServerResponse<Death>>(getDeath+id);

    }
    cDeath(query:string,payload: Death):Observable<Death[]>{
        return this.http.post<Death[]>(createDeath + query, payload)
    }
    uDeath(id:string,payload:Death):Observable<Death[]>{
        return this.http.put<Death[]>(editDeath+id,payload);

    }
    dDeath(id:string):Observable<Death>{
        return this.http.delete<Death>(deleteDeath+id);
    }
        
}