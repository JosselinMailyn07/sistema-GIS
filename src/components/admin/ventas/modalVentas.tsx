import React, { ReactNode } from 'react';

interface ModalProps {
    onClose: () => void;
    children?: ReactNode;
}

export const Modal = ({ onClose, children }: ModalProps) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-2/3 h-full transition-transform rounded shadow bg-white p-8">
                {children}
                <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-200 rounded">Cerrar</button>
            </div>
        </div>
    );
};