import React from 'react';

interface PillProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, selected = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm rounded-full border ${
        selected ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
      } hover:bg-blue-100`}
    >
      {label}
    </button>
  );
};

export default Pill;
