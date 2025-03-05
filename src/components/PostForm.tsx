import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../features/posts/postsSlice';
import { Post } from '../features/posts/types';

interface PostFormProps {
  editMode?: boolean;
  post?: Post;
  onSave?: (post: Post) => void;
}

const PostForm: React.FC<PostFormProps> = ({ editMode = false, post, onSave }) => {
  const [text, setText] = useState(post?.text || '');
  const [imagePreview, setImagePreview] = useState<string | undefined>(post?.imageUrl);
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(text.length, text.length);
    }
  }, [text]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Create a preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowError(false);

    const newPost: Post = {
      id: post?.id || crypto.randomUUID(),
      text,
      imageUrl: imagePreview,
      createdAt: post?.createdAt || Date.now(),
      updatedAt: Date.now(),
    };

    if (newPost.text === '' && !newPost.imageUrl) {
      setShowError(true);
      return;
    }

    if (editMode && onSave) {
      onSave(newPost);
    } else {
      dispatch(addPost(newPost));
      setText('');
      setImagePreview(undefined);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 w-full max-w-xl mx-auto" id="post-form">
      {showError && (
        <div className="mb-4">
          <p className="text-red-600">Please add either text or an image to your post.</p>
        </div>
      )}

      <div className="mb-4">
        <textarea
          ref={textareaRef}
          className="w-full p-3 border border-gray-600 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {imagePreview && (
        <div className="mb-4 relative">
          <img
            src={imagePreview}
            alt="Preview"
            className="w-full object-cover rounded-lg"
          />
          <button
            type="button"
            className="absolute size-8 top-2 right-2 bg-red-500 text-white p-1 rounded-full cursor-pointer"
            onClick={() => {
              setImagePreview(undefined);
            }}
          >
            ✕
          </button>
        </div>
      )}

      <div className="flex [@media(max-width:360px)]:flex-col gap-2 justify-between items-center">
        <label className="[@media(max-width:360px)]:w-34 [@media(max-width:360px)]:py-1 rounded-full text-center cursor-pointer bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 transition-colors">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          {imagePreview ? 'Change Image' : 'Add Image'}
        </label>

        <button
          type="submit"
          className="[@media(max-width:360px)]:w-34 [@media(max-width:360px)]:py-1 rounded-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 transition-colors cursor-pointer"
        >
          {editMode ? 'Save' : 'Post'}
        </button>
      </div>
    </form>
  );
};

export default PostForm; 