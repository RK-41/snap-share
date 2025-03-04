import React from 'react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

interface HomeProps {
  postFormRef: React.RefObject<HTMLDivElement | null>;
}

const Home: React.FC<HomeProps> = ({ postFormRef }) => {
  return (
    <div className="w-full p-6 flex flex-col gap-4 bg-gray-950">
      <h1 className="text-5xl text-center font-bold mb-4 text-white">Home Feed</h1>
      <div ref={postFormRef} className="scroll-mt-20">
        <PostForm />
      </div>
      <PostList />
    </div>
  );
};

export default Home; 