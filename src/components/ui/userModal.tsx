'use client';
import React from 'react';
import { Comment } from '../types';
import Image from 'next/image';
import Avatar from './avatar';

type UserModalProps = {
  user: Comment | null;
  onClose: () => void;
};

const SubDetails = ({ label = '', value = '', iconUrl = '', iconAlt = '' }) => {
  return (
    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
      <Image src={iconUrl} alt={iconAlt} width={17} height={17} />
      <div>
        <p className="text-sm text-muted-color">{label}</p>
        <p className="font-semibold text-color">{value}</p>
      </div>
    </div>
  );
};

const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
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

          <SubDetails
            label="Name"
            value={user.name}
            iconUrl="/user.svg"
            iconAlt="User icon"
          />

          <SubDetails
            label="Email"
            value={user.email}
            iconUrl="/email.svg"
            iconAlt="Email icon"
          />

          <SubDetails
            label="Company"
            value={user.companyName || 'N/A'}
            iconUrl="/company.svg"
            iconAlt="Company icon"
          />

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

export default UserModal;
