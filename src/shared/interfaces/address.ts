export class IAddress {
  id?: string;
  postalCode: string;
  street: string;
  number: number;
  complement?: string;
  neighborhood: string;
  state: string;
  city: string;
  country: string;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;  
}

export class IAddressResponse {
  id: string;
  postalCode: string;
  street: string;
  number: number;
  complement?: string;
  neighborhood: string;
  state: string;
  city: string;
  country: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;  
}