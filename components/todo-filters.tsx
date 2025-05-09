"use client";

import { TodoFilter } from "@/types";
import { cn } from "@/lib/utils";

interface TodoFiltersProps {
  currentFilter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
  todoCount: {
    all: number;
    active: number;
    completed: number;
  };
}

export function TodoFilters({ currentFilter, onFilterChange, todoCount }: TodoFiltersProps) {
  const filters: { value: TodoFilter; label: string }[] = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ];

  return (
    <div className="flex justify-between items-center py-3 px-1 border-b border-border mb-4">
      <div className="flex space-x-1">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={cn(
              "px-3 py-1 text-sm rounded-md transition-all duration-200",
              "hover:bg-secondary",
              currentFilter === filter.value
                ? "bg-secondary text-foreground font-medium"
                : "text-muted-foreground"
            )}
          >
            {filter.label}
            <span className="ml-1 text-xs rounded-full px-1.5 bg-muted">
              {todoCount[filter.value]}
            </span>
          </button>
        ))}
      </div>

      <div className="text-sm text-muted-foreground">
        {todoCount.active === 0 && todoCount.all > 0
          ? "All tasks completed 🎉"
          : todoCount.active === 1
            ? "1 task remaining"
            : `${todoCount.active} tasks remaining`}
      </div>
    </div>
  );
}