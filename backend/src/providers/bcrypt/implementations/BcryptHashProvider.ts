import { compare, hash } from 'bcrypt';
import { IBcryptHashProvider } from '../IBcryptHashProvider';

class BcryptHashProvider implements IBcryptHashProvider {
  generateHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}

export { BcryptHashProvider };
