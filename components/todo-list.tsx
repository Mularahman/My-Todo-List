'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Todo, TodoFilter } from '@/types';
import { useTodos } from '@/hooks/useTodos';
import { TodoItem } from '@/components/todo-item';
import { TodoForm } from '@/components/todo-form';
import { TodoFilters } from '@/components/todo-filters';
// import { ProgressBar } from '@/components/progress-bar';
import { ListX } from 'lucide-react';
import dynamic from 'next/dynamic';
const ProgressBar = dynamic(() => import('@/components/progress-bar'), {
  ssr: false,
});

export function TodoList() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    getTodayStats,
  } = useTodos();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const todoCount = {
    all: todos.length,
    active: todos.filter(todo => !todo.completed).length,
    completed: todos.filter(todo => todo.completed).length,
  };

  const { completed, total } = getTodayStats();

  return (
    <div className="w-full max-w-md mx-auto">
      <TodoForm onAddTodo={addTodo} />
      
      <ProgressBar completed={completed} total={total} />

      <TodoFilters 
        currentFilter={filter} 
        onFilterChange={setFilter} 
        todoCount={todoCount} 
      />

      {todos.length > 0 ? (
        <div className="space-y-2">
          <AnimatePresence initial={false}>
            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))}
          </AnimatePresence>
          {filteredTodos.length === 0 && (
            <div className="text-center py-8 animate-in fade-in duration-300">
              <p className="text-muted-foreground">
                No {filter === 'completed' ? 'completed' : 'active'} tasks found
              </p>
            </div>
          )}
        </div>
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