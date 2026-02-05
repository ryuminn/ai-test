import React from 'react';
import { PawPrint } from 'lucide-react';

const SectionDivider: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-4 py-16 opacity-60">
      <PawPrint size={14} className="text-stone-600 fill-current" />
      <PawPrint size={14} className="text-stone-600 fill-current" />
      <PawPrint size={14} className="text-stone-600 fill-current" />
    </div>
  );
};

export default SectionDivider;
