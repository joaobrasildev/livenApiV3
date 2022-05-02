export class ValidatorMessages {
  constructor() {}

  static requiredMessage(property: string): string {
    return `The property ${property} is required!`;
  }
  static maxLengthMessage(property: string, maxCaracter: string): string {
    return `The property ${property} can contain a maximum of ${maxCaracter} caracters`;
  }
  static deletedMessage(property: string): string {
    return `${property} deleted with sucess`;
  }
  static notFoundMessage(property: string): string {
    return `${property} not found`;
  }
  static unauthorizedMessage(propertys: string): string {
    return `${propertys} is not authorized.`;
  }
  static mustBeMessage(property: string, mustbeProperty: string): string {
    return `The property ${property} must be ${mustbeProperty}.`;
  }
}
