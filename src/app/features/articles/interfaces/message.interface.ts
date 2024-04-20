import { User } from '../../../interfaces/user.interface';
import { Chat } from './chat.interface';

export interface Message {
    id: number;
    content: string;
    sender: User;
    senderName: string;
    chat: Chat;
  }