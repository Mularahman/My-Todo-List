"use client";

import { useState, useRef, useEffect } from "react";
import { Todo } from "@/types";
import { Pencil, Trash2, Check, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Countdown } from "@/components/countdown";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string, dueDate: Date | null) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editDate, setEditDate] = useState<Date | null>(todo.dueDate);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
    setEditDate(todo.dueDate);
  };

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText, editDate);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
    setEditDate(todo.dueDate);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className={cn(
        "group flex items-center p-3 bg-card mb-2 rounded-md border border-border shadow-sm",
        "transition-all duration-300",
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

        <div className="flex-1 space-y-1">
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

          {todo.dueDate && !isEditing && (
            <div className="flex items-center space-x-2">
              <Calendar className="h-3 w-3 text-muted-foreground" />
              <Countdown dueDate={todo.dueDate} />
            </div>
          )}
        </div>
      </div>

      <div className={cn(
        "flex space-x-1 transition-opacity duration-200",
        !isEditing && "opacity-0 group-hover:opacity-100"
      )}>
        {isEditing ? (
          <>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-foreground"
                >
                  <Calendar className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <CalendarComponent
                  mode="single"
                  selected={editDate || undefined}
                  onSelect={(day) => setEditDate(day ?? null)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
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
    </motion.div>
  );
}