import { ReactNode } from 'react';

interface tabButton {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

function TabButton({ active, onClick, children }: tabButton) {
  return (
    <button
      className={`w-full rounded-t-xl border border-x border-t border-[#999] bg-white py-4 text-center leading-5
        ${active ? 'border-b-0' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default TabButton;
