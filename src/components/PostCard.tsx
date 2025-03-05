import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, editPost } from '../features/posts/postsSlice';
import { Post } from '../features/posts/types';
import EditPostModal from './EditPostModal';
import DeleteConfirmationDialog from './DeleteConfirmationDialog';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  const handleDelete = () => {
    dispatch(deletePost(post.id));
    setIsDeleteDialogOpen(false);
  };

  const handleSave = (updatedPost: Post) => {
    dispatch(editPost(updatedPost));
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-xl overflow-hidden transition-transform transform hover:scale-103">
      {post.imageUrl && (
        <div className="w-full p-2">
          <img
            src={post.imageUrl}
            alt="Post"
            className="w-full max-h-96 object-contain rounded-t-lg"
          />
        </div>
      )}
      <div className="p-4">
        <p className="text-gray-800 text-lg mb-2">{post.text}</p>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>
            {post.updatedAt !== post.createdAt
              ? `Updated ${formatDate(post.updatedAt)}`
              : `Posted ${formatDate(post.createdAt)}`}
          </span>
          <div className="flex flex-wrap justify-end space-x-2 [&>*:first-child]:ml-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-blue-600 hover:text-blue-500 cursor-pointer transition-colors text-center"
            >
              Edit
            </button>
            <button
              onClick={() => setIsDeleteDialogOpen(true)}
              className="text-red-600 hover:text-red-500 cursor-pointer transition-colors text-center"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <EditPostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        post={post}
        onSave={handleSave}
      />

      <DeleteConfirmationDialog
        open={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default PostCard; 