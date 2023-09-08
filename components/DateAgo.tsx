"use client"
import { useEffect, useState } from 'react';

interface DateAgoProps {
  date: string;
}

const DateAgo: React.FC<DateAgoProps> = ({ date }) => {
  const [daysAgo, setDaysAgo] = useState<number | null>(null);

  useEffect(() => {
    const currentDate = new Date();
    const targetDate = new Date(date);
    const timeDifference = currentDate.getTime() - targetDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    setDaysAgo(daysDifference);
  }, [date]);

  return <div>{daysAgo !== null && daysAgo !== 0 ? `${daysAgo} days ago` : 'Today'}</div>;
};

export default DateAgo;
