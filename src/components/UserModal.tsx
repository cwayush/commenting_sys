'use client';
import React from 'react';
import { Avatar } from './Avatar';
import { Comment } from './types'; // ✅ use Lucide icons
import Image from 'next/image';

type UserModalProps = {
  user: Comment | null;
  onClose: () => void;
};

export const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative z-70 p-6 w-full max-w-md  bg-white rounded-xl shadow-2xl animate-in fade-in duration-200">
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <div className="text-lg font-semibold leading-none tracking-tight flex items-center gap-3">
            <Avatar name={user.name} size="md" />
            <span>User Details</span>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <div className="space-y-4"></div>
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <Image src="/user.svg" alt="Comment icon" width={17} height={17} />
            <div>
              <p className="text-sm text-muted-color">Full Name</p>
              <p className="font-semibold text-color">{user.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <Image src="email.svg" alt="Comment icon" width={17} height={17} />
            <div>
              <p className="text-sm text-muted-color">Email Address</p>
              <p className="font-semibold text-color">{user.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <Image
              src="/company.svg"
              alt="Comment icon"
              width={17}
              height={17}
            />
            <div>
              <p className="text-sm text-muted-color">Company</p>
              <p className="font-semibold text-color">{user.companyName}</p>
            </div>
          </div>

          <div className="flex items-center justify-center pt-2">
            <div className="inline-flex items-center rounded-full bg-muted/50 text-xs font-semibold  px-4 py-2">
              User ID: #{user.id}
            </div>
          </div>
        </div>
        <button
          className="absolute right-4 top-4 rounded-full hover:bg-muted/50 "
          onClick={onClose}
          aria-label="Close modal"
        >
          <Image
            src="/closeIcon.svg"
            alt="Comment icon"
            width={18}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};
