import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';
import Sidebar from './Sidebar';

function MobileMenu({ isOpen, onClose }) {
  // Close the menu when clicking outside or pressing escape
  useEffect(() => {
    if (!isOpen) return;
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-neutral-900 bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 max-w-xs">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="p-2 bg-white rounded-full text-neutral-500 hover:bg-neutral-100"
          >
            <FiX size={20} />
          </button>
        </div>
        
        <Sidebar isOpen={true} />
      </div>
    </div>,
    document.body
  );
}

export default MobileMenu;