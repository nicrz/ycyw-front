import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { SessionInformation } from '../../../../interfaces/sessionInformation.interface';
import { SessionService } from '../../../../services/session.service';
import { Chat } from '../../interfaces/chat.interface';
import { Message } from '../../interfaces/message.interface';
import { ChatApiService } from '../../services/chat-api.service';
import { MessageApiService } from '../../services/message-api.service';

@Component({
  selector: 'chat-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class ChatDetailComponent implements OnInit {
  public chat: Chat | undefined;
  public messages: Message[] = [];
  public messageForm: FormGroup | undefined;

  public chatId: number;
  public userId: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private sessionService: SessionService,
    private chatApiService: ChatApiService,
    private messageApiService: MessageApiService,
    private router: Router) {
    this.chatId = 16;
    this.userId = this.sessionService.sessionInformation!.id;
  }

  public ngOnInit(): void {
    this.fetchChat();
    this.loadMessages();
    this.initMessageForm();
  }

  public back() {
    window.history.back();
  }

  private fetchChat(): void {
    this.chatApiService
      .detail(this.chatId)
      .subscribe((chat: Chat) => {
        this.chat = chat;
      });
  }

  private loadMessages(): void {
    this.messageApiService.allByChat(this.chatId).subscribe((data: any) => {
      console.log(data);
      this.messages = data.messages;
    });
  }

  private initMessageForm(): void {
    this.messageForm = this.fb.group({
      content: ['', [Validators.required, Validators.maxLength(2000)]],
      chat: [this.chatId]
    });
  }

public submit(): void {
  const message = this.messageForm?.value as Message;

  this.messageApiService.create(message).subscribe(
    (createdMessage: Message) => {
      // Met à jour la liste des messages avec le nouveau message
      this.messages.push(createdMessage);
      this.messageForm?.reset();

      // Rafraîchit manuellement la liste des messages
      this.loadMessages();
      this.initMessageForm();
    },
    (error) => {
      console.error('Error creating message:', error);
    }
  );
}

}