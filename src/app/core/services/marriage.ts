import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Marriage } from "../models/marriage";
import { ServerResponse } from "../models/server-response.model";

const api = `${environment.apiUrl}/marriage`; 

const getMarriage= api+'/get/';
const createMarriage=api+'/add/';
const editMarriage =api +'/edit/';
const deleteMarriage=api+'/delete/';
const getAll=api+'/getAll'
@Injectable({
    providedIn:'root'
})
export class MarriageService{
    constructor( private http: HttpClient){}

    gAllMarriage():Observable<ServerResponse<Marriage>> {
            return this.http.get<ServerResponse<Marriage>>(getAll);
          }
    gMarriage(id:string):Observable<ServerResponse<Marriage>>{
        return this.http.get<ServerResponse<Marriage>>(getMarriage+id);

    }
    cMarriage(civil:string,civil2:string,payload: Marriage):Observable<Marriage[]>{
        return this.http.post<Marriage[]>(createMarriage+civil+`/`+civil2,payload)
    }
    uMarriage(marriageId:string,payload:Marriage):Observable<Marriage[]>{
        return this.http.put<Marriage[]>(editMarriage+marriageId,payload);

    }
    dMarriage(id:string):Observable<Marriage>{
        return this.http.delete<Marriage>(deleteMarriage+id);
    }

        
}