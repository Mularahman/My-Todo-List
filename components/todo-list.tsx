'use client';

import { useEffect, useState } from 'react';
import { Todo, TodoFilter } from '@/types';
import { useTodos } from '@/hooks/useTodos';
import { TodoItem } from '@/components/todo-item';
import { TodoForm } from '@/components/todo-form';
import { TodoFilters } from '@/components/todo-filters';
import { ListX } from 'lucide-react';

export function TodoList() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
  } = useTodos();

  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const todoCount = {
    all: todos.length,
    active: todos.filter(todo => !todo.completed).length,
    completed: todos.filter(todo => todo.completed).length,
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <TodoForm onAddTodo={addTodo} />
      
      {todos.length > 0 ? (
        <>
          <TodoFilters 
            currentFilter={filter} 
            onFilterChange={setFilter} 
            todoCount={todoCount} 
          />
          
          <div className="space-y-2">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-12 animate-in fade-in duration-300">
          <div className="flex justify-center mb-4 text-muted-foreground">
            <ListX className="w-12 h-12" />
          </div>
          <h3 className="text-lg font-medium mb-1">No tasks yet</h3>
          <p className="text-muted-foreground">Add a new task to get started.</p>
        </div>
      )}
    </div>
  );
}