import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import PostCard from './PostCard';

const PostList: React.FC = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);

  const sortedPosts = [...posts].sort((a, b) => b.updatedAt - a.updatedAt);

  if (sortedPosts.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        <p className="text-xl">No posts yet. Be the first to share something!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {sortedPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList; 