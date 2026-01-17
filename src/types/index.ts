// Global type definitions
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: User;
  students: User[];
}

export interface AIModel {
  id: string;
  name: string;
  description: string;
  type: 'text' | 'image' | 'code' | 'audio';
  status: 'active' | 'inactive';
}
