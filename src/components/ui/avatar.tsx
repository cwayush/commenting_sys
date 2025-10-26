import React from 'react';

const Avatar = ({
  name = '',
  size = 'md',
  className = '',
  showInitials = true,
}) => {
  const initials = name
    ? name
        .split(' ')
        .slice(0, 2)
        .map((n) => n[0])
        .join('')
        .toUpperCase()
    : '?';

  let sizeClasses = '';
  if (size === 'sm') sizeClasses = 'w-6 h-6 text-[0.75rem]';
  else if (size === 'lg') sizeClasses = 'w-16 h-16 text-xl';
  else sizeClasses = 'w-12 h-12 text-lg';

  return (
    <div
      className={`
        flex items-center justify-center rounded-full font-semibold
        bg-avatar-bg text-avatar-text  cursor-pointer
        hover:ring-2 hover:ring-primary hover:ring-offset-2
        transition-all duration-200
        ${sizeClasses} ${className}
      `}
    >
      {showInitials && initials}
    </div>
  );
};

export default Avatar;
