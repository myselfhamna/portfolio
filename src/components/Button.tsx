import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  target?: string;
  rel?: string;
  disabled?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  onClick,
  href,
  className = '',
  type = 'button',
  target,
  rel,
  disabled = false,
}: ButtonProps) => {
  const baseClasses = 'font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-orange to-navy hover:from-orange-dark hover:to-navy-light text-white hover:shadow-lg hover:shadow-orange/40',
    secondary: 'border-2 border-orange text-orange hover:bg-orange hover:text-black',
    outline: 'border-2 border-gray-300 text-gray-300 hover:border-white hover:text-white',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : '';

  const buttonContent = (
    <motion.button
      type={type}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseClasses} ${variantClasses[variant]} ${className} inline-flex items-center justify-center`}
      >
        {children}
      </motion.a>
    );
  }

  return buttonContent;
};