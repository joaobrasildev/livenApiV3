import { IAddress } from '../../shared/interfaces/address';

export default class CreateAddressBuilder {
    address: IAddress;

    constructor() {
        this.address = {} as IAddress;
    }

    public withId(id: string): CreateAddressBuilder {
      this.address.id = id;
      return this;
    }
    public withPostalCode(postalCode: string): CreateAddressBuilder {
        this.address.postalCode = postalCode;
        return this;
    }

    public withStreet(street: string): CreateAddressBuilder {
      this.address.street = street;
      return this;
    }

    public withNumber(number: number): CreateAddressBuilder {
        this.address.number = number;
        return this;
    }
    
    public withComplement(complement: string): CreateAddressBuilder {
      this.address.complement = complement;
      return this;
    }
    public withNeighborhood(neighborhood: string): CreateAddressBuilder {
      this.address.neighborhood = neighborhood;
      return this;
    }
    public withState(state: string): CreateAddressBuilder {
      this.address.state = state;
      return this;
    }

    public withCity(city: string): CreateAddressBuilder {
      this.address.city = city;
      return this;
    }
    
    public withCountry(country: string): CreateAddressBuilder {
      this.address.country = country;
      return this;
    }

    public withUserId(userId: string): CreateAddressBuilder {
      this.address.userId = userId;
      return this;
    }

    public withCreatedAt(createdAt: Date): CreateAddressBuilder {
      this.address.createdAt = createdAt;
      return this;
    }   
    
    public withUpdatedAt(updatedAt: Date): CreateAddressBuilder {
      this.address.updatedAt = updatedAt;
      return this;
    } 

    public build(): IAddress {
        return this.address;
    }
}
