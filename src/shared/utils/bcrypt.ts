import * as bcrypt from 'bcryptjs';

export const createHash = async (text: string): Promise<string> => {
  return bcrypt.hashSync(text, 10);
}

export const compareHash = async (payload: string, hashed: string): Promise<boolean> => {
  return bcrypt.compare(payload, hashed);
}
