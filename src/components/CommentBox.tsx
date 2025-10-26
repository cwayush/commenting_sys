'use client';

import React, { useMemo, useState } from 'react';



import { Comment } from './types';
import Button from './ui/Button';
import { Card } from './Card';
import UserModal from './ui/UserModal';
import ClockIcon from './icons/ClockIcon';
import CalendarIcon from './icons/CalendarIcon';

type SortOrder = 'newest' | 'oldest';

export const CommentBox = ({ data }: { data: Comment[] }) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const [selectedUser, setSelectedUser] = useState<Comment | null>(null);
  const length = data.length;

  const sortedComments = useMemo(() => {
    const copy = [...data];
 
    copy.sort((a, b) => {
      const aKey = a.id; 
      const bKey = b.id;

      const aVal =
        typeof aKey === 'string' && !/^\d+$/.test(aKey)
          ? Date.parse(aKey)
          : Number(aKey);
      const bVal =
        typeof bKey === 'string' && !/^\d+$/.test(bKey)
          ? Date.parse(bKey)
          : Number(bKey);

      if (sortOrder === 'newest') return bVal - aVal;
      return aVal - bVal;
    });

    return copy;
  }, [data, sortOrder]);

  return (
    <>
      <div className="space-y-6 mt-6 ">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-color">Comments ({length})</h2>
          <div className="flex gap-2">
            <Button
              icon={<ClockIcon />}
              active={sortOrder === 'newest'}
              onClick={() => setSortOrder('newest')}
              ariaLabel="Sort by newest"
            >
              Newest
            </Button>

            <Button
              icon={<CalendarIcon />}
              active={sortOrder === 'oldest'}
              onClick={() => setSortOrder('oldest')}
              ariaLabel="Sort by oldest"
            >
              Oldest
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {sortedComments.map((c: Comment) => (
            <Card key={c.id} user={c} onOpenUser={(u) => setSelectedUser(u)} />
          ))}
        </div>
      </div>

      <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
    </>
  );
};
