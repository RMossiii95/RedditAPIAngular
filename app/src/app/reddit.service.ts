import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Convert, Welcome } from './reddit';



@Injectable({
  providedIn: 'root'
})
export class RedditService {
  urlBase: string = "https://www.reddit.com/r/aww/.json";
  
  constructor(private http: HttpClient) { }

  GetReddit(): Observable<any> {
    
    let result: Observable<any> = this.http.get(this.urlBase);
    return result;
  }

}

