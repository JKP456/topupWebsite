import { users } from './db';

export function login(email: string) {
  return users.find(u => u.email === email);
}
