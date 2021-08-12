import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Birth } from "../models/birth.model";
import { Marriage } from "../models/marriage";
import { ServerResponse } from "../models/server-response.model";

const api = `${environment.apiUrl}/birth`; 
const getBirth= api+'/getBirth/';
const createBirth=api+'/addBirth/';
const editBirth =api +'/edit/';
const deleteBirth=api+'/delete/';
const getAll=api+'/getAll';
const aDoption=api+'/adption/';
const searchBookEndpoint = api + '/search/';
@Injectable({
    providedIn:'root'
})
export class BirthService{
    constructor( private http: HttpClient){}

    gAllBirth():Observable<ServerResponse<Birth>> {
            return this.http.get<ServerResponse<Birth>>(getAll);
          }
    gBirth(id:string):Observable<ServerResponse<Birth>>{
        return this.http.get<ServerResponse<Birth>>(getBirth+id);

    }
    cBirth(query:string,payload: Birth):Observable<Birth[]>{
        // get(`${this.apiUrl}/users/${username}`); 
        return this.http.post<Birth[]>(createBirth + query, payload)
    }
    uBirth(id:string,payload:Birth):Observable<Birth[]>{
        return this.http.put<Birth[]>(editBirth+id,payload);

    }
    dBirth(id:string):Observable<Birth>{
        return this.http.delete<Birth>(deleteBirth+id);
    }
    search(query: string): Observable<ServerResponse<Marriage[]>> {
        return this.http.get<ServerResponse<Marriage[]>>(searchBookEndpoint + query);
      }
      Adoption(civilId:string,payload: Birth):Observable<ServerResponse<Birth[]>>{
          return this.http.post<ServerResponse<Birth[]>>(aDoption+civilId,payload);

      }

        
}