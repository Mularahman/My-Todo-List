'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { differenceInDays, differenceInHours, differenceInMinutes, isPast } from 'date-fns';
import { TimeStatus } from '@/types';

interface CountdownProps {
  dueDate: Date;
}

export function Countdown({ dueDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState('');
  const [status, setStatus] = useState<TimeStatus>('normal');

  useEffect(() => {
    const updateTime = () => {
      if (isPast(dueDate)) {
        setTimeLeft('Overdue');
        setStatus('overdue');
        return;
      }

      const days = differenceInDays(dueDate, new Date());
      const hours = differenceInHours(dueDate, new Date()) % 24;
      const minutes = differenceInMinutes(dueDate, new Date()) % 60;

      let newStatus: TimeStatus = 'normal';
      if (days === 0 && hours < 2) newStatus = 'danger';
      else if (days === 0 && hours < 6) newStatus = 'warning';

      setStatus(newStatus);

      if (days > 0) {
        setTimeLeft(`${days}d ${hours}h left`);
      } else if (hours > 0) {
        setTimeLeft(`${hours}h ${minutes}m left`);
      } else {
        setTimeLeft(`${minutes}m left`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [dueDate]);

  const statusColors = {
    normal: 'text-muted-foreground',
    warning: 'text-yellow-500 dark:text-yellow-400',
    danger: 'text-red-500 dark:text-red-400',
    overdue: 'text-destructive font-medium',
  };

  return (
    <motion.span
      className={`text-sm ${statusColors[status]}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {timeLeft}
    </motion.span>
  );
}