import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntegrateService {

  constructor(private http:HttpClient) { }

getApi(){
return this.http.get('https://reqres.in/api/users?page=2').pipe(
    switchMap((response: any) => of(response.data))
  )}
}
