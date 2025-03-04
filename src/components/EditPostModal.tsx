import React from 'react';
import { Dialog } from '@headlessui/react';
import PostForm from './PostForm';
import { Post } from '../features/posts/types';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface EditPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: Post;
  onSave: (post: Post) => void;
}

const EditPostModal: React.FC<EditPostModalProps> = ({ isOpen, onClose, post, onSave }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10 w-xl max-w-xl mx-auto">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="w-full fixed inset-0 flex items-center justify-center p-4 max-h-screen overflow-y-auto">
        <Dialog.Panel className="mx-auto w-xl rounded-xl overflow-hidden bg-white relative max-h-[95vh] overflow-y-auto">
          <Dialog.Title className="text-lg text-black font-bold flex justify-between items-center p-4">
            <p>Edit Post</p>
            <button title="Close" onClick={onClose} className="w-max font-bold rounded cursor-pointer">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </Dialog.Title>
          <PostForm editMode post={post} onSave={onSave} />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default EditPostModal; 