import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../interfaces/message.interface';

@Injectable({
  providedIn: 'root'
})
export class MessageApiService {

  private pathService = '/api/message';

  constructor(private httpClient: HttpClient) {
  }

  public allByChat(id: number): Observable<Message[]> {
    return this.httpClient.get<Message[]>(`${this.pathService}/list/${id}`);
  }

  public create(message: Message): Observable<Message> {
    return this.httpClient.post<Message>(`${this.pathService}/add`, message);
  }

}