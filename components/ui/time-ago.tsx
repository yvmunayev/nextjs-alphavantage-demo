'use client'

import ReactTimeAgo from 'react-timeago';

function parseDate(date: string) {
    const match = date.match(/(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})/);
    if (!match) return null;
  
    const [, year, month, day, hours, minutes, seconds] = match;
    return new Date(`${year}-${month}-${day}T${hours}:${minutes}:${seconds}`);
}

export const TimeAgo: React.FC<{ date: string }> = ({ date }) => {
    const parsedDate = parseDate(date) || '';
    return <ReactTimeAgo className="text-sm" date={parsedDate} />;
}