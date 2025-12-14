export interface Customer {
  customer_id?: number;
  customer_name: string;
  customer_phone: string;
  customer_email?: string | null;
  customer_address?: string | null;
  created_at?: Date;
  updated_at?: Date;
}
