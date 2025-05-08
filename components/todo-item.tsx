'use client';

import { useState, useRef, useEffect } from 'react';
import { Todo } from '@/types';
import { Pencil, Trash2, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when entering edit mode
  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div 
      className={cn(
        "group flex items-center p-3 bg-card mb-2 rounded-md border border-border shadow-sm",
        "transition-all duration-300 animate-in fade-in slide-in-from-top-2",
        "hover:shadow-md hover:border-muted-foreground/20"
      )}
    >
      <div className="flex-1 flex items-center">
        <Checkbox 
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          className="mr-3 transition-transform duration-200 hover:scale-110"
          disabled={isEditing}
        />
        
        {isEditing ? (
          <Input
            ref={inputRef}
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 h-8 text-base"
            autoComplete="off"
          />
        ) : (
          <span 
            className={cn(
              "text-foreground transition-all duration-200",
              todo.completed && "line-through text-muted-foreground"
            )}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className={cn(
        "flex space-x-1 transition-opacity duration-200",
        !isEditing && "opacity-0 group-hover:opacity-100"
      )}>
        {isEditing ? (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleSave}
              className="h-8 w-8 text-green-500 hover:text-green-600 hover:bg-green-100"
            >
              <Check className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleCancel}
              className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </>
        ) : (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleEdit}
              className="h-8 w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-100"
              disabled={todo.completed}
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => onDelete(todo.id)}
              className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-100"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
}