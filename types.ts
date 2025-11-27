export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  sessions: number;
  level: string;
  category: '3DCG' | 'Programming';
}

export interface NavItem {
  label: string;
  path: string;
}
