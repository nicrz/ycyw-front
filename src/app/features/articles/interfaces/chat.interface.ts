import { User } from '../../../interfaces/user.interface';

export interface Chat {
    id: number;
    subject: string;
    creator: User;
	  created_at: Date;
  }