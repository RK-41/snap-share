import React from 'react';
import { Dialog } from '@headlessui/react';

interface DeleteConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteConfirmationDialog: React.FC<DeleteConfirmationDialogProps> = ({ open, onClose, onDelete }) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="mx-4 w-full max-w-sm rounded-xl bg-white p-6">
          <Dialog.Title className="text-lg text-black font-bold">Confirm Deletion</Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-500">
            Are you sure you want to delete this post? This action cannot be undone.
          </Dialog.Description>
          <div className="mt-4 flex justify-end">
            <button
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-900 cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={onDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 cursor-pointer"
            >
              Delete
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default DeleteConfirmationDialog; 