'use client';
import { useGoogleFormModal } from './GoogleFormModalContext';
import { useEffect } from 'react';

export default function GoogleFormModal() {
  const { isOpen, setIsOpen } = useGoogleFormModal();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="relative bg-white h-full w-full rounded shadow-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-white z-10 bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-80"
          title="Close"
        >
          &times;
        </button>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfheJGHYAnzA2tD0ldauX6oFTn3bQ97VWkA0vrMoLl4gEjRFw/viewform?embedded=true"
          className="w-full h-full border-0"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          جارٍ التحميل…
        </iframe>
      </div>
    </div>
  );
}
