import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

type ToastType = 'success' | 'error';

interface ToastProps {
  type: ToastType;
  message: string;
  duration?: number;
  onClose: () => void;
}

export const Toast = ({ type, message, duration = 3000, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor = type === 'success' ? 'bg-green-500/90' : 'bg-red-500/90';
  const icon = type === 'success' ? '✓' : '✕';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
        exit={{ opacity: 0, y: 50, x: '-50%' }}
        transition={{ type: 'spring', damping: 20 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div
          className={`${bgColor} backdrop-blur-sm text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3`}
        >
          <span className="font-bold text-lg">{icon}</span>
          <span className="font-medium">{message}</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

interface ToastContextType {
  showToast: (type: ToastType, message: string, duration?: number) => void;
}

export const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

import React from 'react';

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<{
    type: ToastType;
    message: string;
    duration?: number;
  } | null>(null);

  const showToast = (type: ToastType, message: string, duration?: number) => {
    setToast({ type, message, duration });
  };

  const handleClose = () => {
    setToast(null);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <AnimatePresence>
        {toast && (
          <Toast
            type={toast.type}
            message={toast.message}
            duration={toast.duration}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};