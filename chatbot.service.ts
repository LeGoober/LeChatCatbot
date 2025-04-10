import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiURL = "http://localhost:8080/ai/generate"
    constructor(private http: HttpClient) { }
    generateResponse(message: string): Observable<any>{
      return this.http.get<any>('${this.apiURL}?message=${message}');
    }
}
