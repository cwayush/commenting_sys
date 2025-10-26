import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  active = false,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  ariaLabel,
}) => {
  const base =
    'px-4 py-2 flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200';
  const activeCls = 'bg-primary text-white hover:bg-primary/90';
  const idleCls = 'bg-gray-200 text-gray-700 hover:bg-gray-300';
  const disabledCls =
    'bg-primary text-white cursor-not-allowed opacity-60 saturate-80 backdrop-blur-sm';

  const useFilled = !disabled && active;
  const finalCls = disabled ? disabledCls : useFilled ? activeCls : idleCls;

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      aria-pressed={active}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      disabled={disabled}
      className={`${base} ${finalCls} ${className}`}
    >
      {icon && (
        <span
          className={`flex items-center ${
            disabled ? 'opacity-70' : 'opacity-90'
          }`}
        >
          {icon}
        </span>
      )}
      <span className="text-[0.9rem]">{children}</span>
    </button>
  );
};

export default Button;
