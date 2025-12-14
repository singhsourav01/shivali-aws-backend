export interface Garment {
  garment_id: string;
  garment_name: string;
  garment_default_price: number;
  is_active?: number;
  created_at?: Date;
  updated_at?: Date;
}
