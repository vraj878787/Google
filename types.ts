export type Category = 'Starters' | 'Mains' | 'Desserts' | 'Drinks';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: Category;
  image: string;
  popular?: boolean;
}

export interface ReservationData {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
}

export enum ViewState {
  HOME = 'HOME',
  MENU = 'MENU',
  RESERVATIONS = 'RESERVATIONS',
  CONTACT = 'CONTACT'
}
