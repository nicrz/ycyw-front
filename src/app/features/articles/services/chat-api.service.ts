import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from '../interfaces/chat.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatApiService {

  private pathService = '/api/chat';

  constructor(private httpClient: HttpClient) {
  }

  public all(): Observable<Chat[]> {
    return this.httpClient.get<Chat[]>(`${this.pathService}/list`);
  }

  public detail(id: number): Observable<Chat> {
    return this.httpClient.get<Chat>(`${this.pathService}/detail/${id}`);
  }

  public create(article: Chat): Observable<Chat> {
    return this.httpClient.post<Chat>(`${this.pathService}/add`, article);
  }

}