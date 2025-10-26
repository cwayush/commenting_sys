'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { UserSelect, User } from './Select';
import { CommentMsg } from './CommentMsg';
import { IconButton } from './IconButton';
import MessageIcon from './MessageIcon';
import SendIcon from './SendIcon';

type Comment = {
  id: number | string;
  name: string;
  email: string;
  companyName?: string;
  body: string;
};

type FormProps = {
  users: User[];
  onAddComment: (c: Comment) => void;
};

export const Form: React.FC<FormProps> = ({ users, onAddComment }) => {
  const [userId, setUserId] = useState<string | number | null>(
    users.length ? users[0].id : null
  );
  const [message, setMessage] = useState('');

  const selectedUser = users.find((u) => String(u.id) === String(userId));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser || !message.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      name: selectedUser.name,
      email: selectedUser.email,
      companyName: selectedUser.company?.name,
      body: message.trim(),
    };

    onAddComment(newComment);
    setMessage('');
  };
  const isDisabled = !message.trim() || !selectedUser;

  return (
    <div className="space-y-8">
      <div className="rounded-lg border text-card-color shadow-sm p-6 bg-comment-bg border-comment-border">
        <div className="flex items-center gap-2 mb-4">
    
          <MessageIcon className="text-primary" />
          <h3 className="text-lg font-semibold text-color">Add a Comment</h3>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="user" className="block text-sm font-medium mb-1">
              Select User
            </label>

            <UserSelect
              users={users}
              value={userId}
              onChange={(id) => setUserId(id)}
            />
            <CommentMsg selectedUser={selectedUser} />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-color mb-2"
            >
              Your Comment
            </label>
            <textarea
              id="message"
              placeholder="Write your comment here..."
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-200 rounded-md bg-gray-50 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <IconButton
            icon={<SendIcon />}
            type="submit"
            disabled={isDisabled}
            active={true}
            ariaLabel="Post Comment"
          >
            Post Comment
          </IconButton>
        </form>
      </div>
    </div>
  );
};
