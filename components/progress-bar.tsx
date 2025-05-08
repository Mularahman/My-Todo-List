'use client';

import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

interface ProgressBarProps {
  completed: number;
  total: number;
}

export function ProgressBar({ completed, total }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  const safeValue = isFinite(percentage) && percentage >= 0 ? percentage : 0;

  return (
    <div className="w-full space-y-2 mb-6">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Daily Progress</span>
        <span>{safeValue}% Complete</span>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Progress value={safeValue} className="h-2" />
      </motion.div>
    </div>
  );
}
