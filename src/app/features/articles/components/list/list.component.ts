import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { SessionInformation } from '../../../../interfaces/sessionInformation.interface';
import { SessionService } from '../../../../services/session.service';
import { Chat } from '../../interfaces/chat.interface';
import { ChatApiService } from '../../services/chat-api.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ChatListComponent implements OnInit { 

  public chats: Chat[] = [];
  public user: User | undefined;

  constructor(
    private sessionService: SessionService,
    private chatApiService: ChatApiService
  ) { }

  ngOnInit() {
    this.loadChats(); // Charge les chats lors du chargement initial de la page

    // Récupére l'utilisateur connecté depuis le service Session
    this.sessionService.$isLogged().subscribe((isLogged) => {
      this.user = this.sessionService.sessionInformation;
      if (isLogged) {
        this.loadChats(); // Recharge les articles si l'utilisateur s'est connecté
      }
    });
  }

  private loadChats(): void {
    this.chatApiService.all().subscribe((data: any) => {
      console.log(data); 
      this.chats = data.chats; 
    });
  }


}