export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
  dueDate: Date | null;
};

export type TodoFilter = 'all' | 'active' | 'completed';

export type TimeStatus = 'normal' | 'warning' | 'danger' | 'overdue';