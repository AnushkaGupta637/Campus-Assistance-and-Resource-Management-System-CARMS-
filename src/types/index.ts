export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'faculty';
  avatar?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType;
  studentOnly?: boolean;
  facultyOnly?: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
}