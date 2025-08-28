export interface User {
  id: number;
  username: string;
  role: 'admin' | 'user';
  token: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}
