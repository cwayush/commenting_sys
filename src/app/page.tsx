'use client';

import { useState } from 'react';

import { CommentBox } from '@/components/CommentBox';
import { Form } from '@/components/Form';
import { Header } from '@/components/Header';
import CommentInfo from '../mocks/comments.json';
import UserInfo from '../mocks/user.json';
import { Comment } from '@/components/types';

export default function Home() {
  const initialComments = CommentInfo.map((c) => {
    const userFromUsers = UserInfo.find((u) => u.id === c.id);
    return {
      id: c.id,
      name: userFromUsers?.name,
      email: userFromUsers?.email,
      companyName: userFromUsers?.company.name,
      body: c.body,
    };
  });

  const [comments, setComments] = useState(initialComments);

  const handleAddComment = (newComment) => {
    setComments((prev) => [newComment, ...prev]);
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header />
        <Form users={UserInfo} onAddComment={handleAddComment} />
        <CommentBox data={comments} />
      </div>
    </div>
  );
}
