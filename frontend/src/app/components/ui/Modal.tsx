'use client';

import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 btn btn-sm btn-circle btn-ghost"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}