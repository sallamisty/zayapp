import { createContext, useContext, useState } from 'react';

type ContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const GoogleFormModalContext = createContext<ContextType | undefined>(undefined);

export function GoogleFormModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GoogleFormModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </GoogleFormModalContext.Provider>
  );
}

export function useGoogleFormModal() {
  const context = useContext(GoogleFormModalContext);
  if (context === undefined) {
    throw new Error('useGoogleFormModal must be used within a GoogleFormModalProvider');
  }
  return context;
}