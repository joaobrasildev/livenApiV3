export class UpdateAddressDto {
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
}
