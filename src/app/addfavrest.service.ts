import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddfavrestService {

  url:string="http://localhost:8765/api/v2/"
  constructor(http:HttpClient) { }

  
}
