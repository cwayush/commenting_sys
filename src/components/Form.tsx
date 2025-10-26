import React, { useState } from 'react';
import { Comment, User } from './types';

import { CommentMsg } from './CommentMsg';
import Button from './Button';

import MessageIcon from './icons/MessageIcon';
import SendIcon from './icons/SendIcon';
import Dropdown from './Dropdown';

type FormProps = {
  users: User[];
  onAddComment: (comment: Comment) => void;
};

export const Form: React.FC<FormProps> = ({ users, onAddComment }) => {
  const [message, setMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleUserSelection = (selectedUser: User) => {
    setSelectedUser(selectedUser);
  };

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
    setSelectedUser(null);
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
            <label htmlFor="user" className="block text-sm font-medium mb-2">
              Select User
            </label>

            <Dropdown
              id="user"
              users={users}
              selected={selectedUser}
              onChange={handleUserSelection}
            />
            {selectedUser && <CommentMsg selectedUser={selectedUser} />}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-color mb-2"
            >
              Your Comment
            </label>
            <textarea
              placeholder=" Write your comment here..."
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-200 rounded-md bg-gray-50 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Button
            icon={<SendIcon />}
            type="submit"
            disabled={isDisabled}
            active={true}
            ariaLabel="Post Comment"
          >
            Post Comment
          </Button>
        </form>
      </div>
    </div>
  );
};
