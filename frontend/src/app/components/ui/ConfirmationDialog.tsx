'use client';

import { useState } from 'react';
import Modal from './Modal';

interface ConfirmationDialogProps {
  title: string;
  message: string;
  onConfirm: () => void;
  children: React.ReactNode;
}

export default function ConfirmationDialog({
  title,
  message,
  onConfirm,
  children
}: ConfirmationDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p>{message}</p>
          <div className="flex justify-end gap-2">
            <button onClick={() => setIsOpen(false)} className="btn btn-ghost">
              Cancel
            </button>
            <button
              onClick={() => {
                onConfirm();
                setIsOpen(false);
              }}
              className="btn btn-error"
            >
              Confirm
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}