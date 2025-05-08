'use client';

import { useState, useEffect } from 'react';
import { Todo, TodoFilter } from '@/types';
import { v4 as uuidv4 } from 'uuid';
import { startOfDay, endOfDay, isWithinInterval } from 'date-fns';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<TodoFilter>('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      try {
        const parsedTodos = JSON.parse(storedTodos);
        // Convert stored date strings back to Date objects
        const todosWithDates = parsedTodos.map((todo: any) => ({
          ...todo,
          dueDate: todo.dueDate ? new Date(todo.dueDate) : null,
        }));
        setTodos(todosWithDates);
      } catch (error) {
        console.error('Failed to parse todos from localStorage:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  const addTodo = (text: string, dueDate: Date | null) => {
    if (!text.trim()) return;
    
    const newTodo: Todo = {
      id: uuidv4(),
      text: text.trim(),
      completed: false,
      createdAt: Date.now(),
      dueDate,
    };
    
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, text: string, dueDate: Date | null) => {
    if (!text.trim()) return;
    
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: text.trim(), dueDate } : todo
      )
    );
  };

  const getTodayStats = () => {
    const now = new Date();
    const todayTodos = todos.filter(todo => {
      const todoDate = todo.dueDate;
      if (!todoDate) return false;
      
      return isWithinInterval(todoDate, {
        start: startOfDay(now),
        end: endOfDay(now)
      });
    });

    return {
      total: todayTodos.length,
      completed: todayTodos.filter(todo => todo.completed).length
    };
  };

  return {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    getTodayStats,
  };
}