export class CreateAddressDto {
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
