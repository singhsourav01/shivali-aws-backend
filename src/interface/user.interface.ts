
export interface User {
  user_id?: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  user_password_hash: string;
  created_at?: Date;
  updated_at?: Date;
}
