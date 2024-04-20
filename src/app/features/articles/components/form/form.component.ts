import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { SessionInformation } from '../../../../interfaces/sessionInformation.interface';
import { SessionService } from '../../../../services/session.service';
import { Chat } from '../../interfaces/chat.interface';
import { ChatApiService } from '../../services/chat-api.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class ChatFormComponent implements OnInit {

  public chatForm: FormGroup | undefined;
  private id: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private chatApiService: ChatApiService,
    private sessionService: SessionService,
    private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public submit(): void {
    const chat = this.chatForm?.value as Chat;

    this.chatApiService
        .create(chat)
        .subscribe((_: Chat) => this.exitPage('Chat created !'));
  }

private initForm(): void {
  this.chatForm = this.fb.group({
    subject: ['', [Validators.required]]
  });
}

  private exitPage(message: string): void {
    this.router.navigate(['home']); //à modif pour rediriger vers le chat crée
  }

}