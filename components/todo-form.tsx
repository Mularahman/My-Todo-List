'use client';

import { useState, useRef, useEffect } from 'react';
import { PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

export function TodoForm({ onAddTodo }: TodoFormProps) {
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text);
      setText('');
      inputRef.current?.focus();
    }
  };

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex w-full space-x-2 mb-6 animate-in fade-in duration-300"
    >
      <Input
        ref={inputRef}
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 transition-all duration-200 border-muted focus-visible:ring-primary/20"
        autoComplete="off"
      />
      <Button 
        type="submit" 
        className="transition-all duration-200 hover:scale-105"
        disabled={!text.trim()}
      >
        <PlusIcon className="h-5 w-5 mr-1" />
        Add
      </Button>
    </form>
  );
}