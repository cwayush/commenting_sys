'use client';

import React from 'react';
import { Comment } from './types';
import Avatar from './Avatar';

type CardProps = {
  user: Comment;
  onOpenUser?: (user: Comment) => void;
};

export const Card: React.FC<CardProps> = ({ user, onOpenUser }) => {
  const handleOpen = () => {
    if (onOpenUser) onOpenUser(user);
  };

  return (
    <div className="rounded-lg border text-card-color shadow-sm p-6 bg-comment-bg border-comment-border hover:bg-comment-hover transition-all duration-200 hover:shadow-lg">
      <div className="flex gap-4">
        <div className="shrink-0">
          <button
            onClick={handleOpen}
            className="rounded-full p-0 focus:outline-none"
            aria-label={`Open ${user.name} details`}
          >
            <div className="w-12 h-12">
              <Avatar name={user.name} size="md" />
            </div>
          </button>
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div>
              <button
                onClick={handleOpen}
                className="font-semibold text-color text-lg cursor-pointer hover:text-primary transition-colors duration-200 text-left"
                aria-label={`Open ${user.name} details`}
              >
                {user.name}
              </button>
              <p className="text-sm text-muted-color">{user.email}</p>
            </div>

            <div className="text-sm text-muted-color font-medium">
              {user.companyName}
            </div>
          </div>

          <div className="pt-2">
            <p className="text-color leading-relaxed">{user.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
