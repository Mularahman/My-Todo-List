import { ThemeToggle } from '@/components/theme-toggle';
import TodoList from '@/components/todo-list';
import { CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center py-8 px-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <CheckCircle className="mr-2 h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Todo App</h1>
          </div>
          <ThemeToggle />
        </div>

        <div className="bg-card border border-border rounded-lg shadow-sm p-6 transition-all duration-200">
          <TodoList />
        </div>

        <footer className="mt-8 text-center text-sm text-muted-foreground">
          <p>Your tasks are saved locally in this browser</p>
        </footer>
      </div>
    </main>
  );
}