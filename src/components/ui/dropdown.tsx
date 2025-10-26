import React, { useEffect, useRef, useState } from 'react';

import { User } from '../types';
import Avatar from './Avatar';

type DropdownProps = {
  id: string;
  users: User[];
  selected: User | null;
  onChange: (user: User) => void;
  placeholder?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  id,
  users,
  selected,
  onChange,
  placeholder = 'Choose a user to comment as...',
}) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  const handleSelect = (user: User) => {
    onChange(user);
    setOpen(false);
  };

  return (
    <div className="relative " ref={wrapperRef} key={id}>
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left border border-gray-200 rounded-md p-2 flex items-center gap-3 bg-gray-50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {selected ? (
          <>
            <span className="pointer-events: none;">
              <div className="flex items-center gap-2">
                {' '}
                <Avatar name={selected.name} size="sm" />
                <div>
                  <span className="font-medium text-sm">{selected.name}</span>
                  <span className="text-muted-color ml-1 text-sm">
                    ({selected.company?.name})
                  </span>
                </div>
              </div>
            </span>

            <div className="ml-auto pointer-events: none;">
              <svg
                className={`w-4 h-4 transform ${
                  open ? 'rotate-180' : ''
                } text-muted-color`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </>
        ) : (
          <div className="text-sm text-muted-color ml-1">{placeholder}</div>
        )}
      </button>

      {open && (
        <div className="absolute z-30 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
          <ul
            role="listbox"
            aria-label="Users"
            className="divide-y divide-gray-100 "
          >
            {users.map((u) => {
              const isActive = String(u.id) === String(selected?.id);
              return (
                <li
                  key={u.id}
                  onClick={() => {
                    handleSelect(u);
                  }}
                  role="option"
                  aria-selected={isActive}
                  className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-neutral-100 ${
                    isActive ? 'bg-slate-900 text-white hover:bg-slate-900' : ''
                  }`}
                >
                  {isActive && (
                    <svg
                      className="w-5 h-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  <div className="flex items-center gap-1">
                    <Avatar name={u.name} size="sm" />

                    <span
                      className={`font-medium text-sm  ${
                        isActive ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {u.name}
                    </span>
                    <div className="text-sm text-muted-color">
                      ({u.company?.name})
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
