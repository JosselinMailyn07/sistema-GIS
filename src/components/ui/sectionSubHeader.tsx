// components/ui/SectionSubHeader.tsx
import { ReactNode } from 'react';

export const SectionSubHeader = ({ 
  title, 
  buttons 
}: {
  title: string;
  buttons: ReactNode;
}) => {
  return (
    <div className="bg-white border-b border-gray-200 p-4 mb-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <div className="flex items-center gap-2">
          {buttons}
        </div>
      </div>
    </div>
  );
};