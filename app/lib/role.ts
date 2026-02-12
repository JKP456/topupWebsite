import { users } from './db';

export type Role = 'guest' | 'user' | 'admin';

export function hasRole(email: string, role: Role): boolean {
  const user = users.find(u => u.email === email);
  return user?.role === role;
}

export function isAdmin(email: string): boolean {
  return hasRole(email, 'admin');
}

export function getUser(email: string) {
  return users.find(u => u.email === email);
}
