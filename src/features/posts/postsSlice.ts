import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from './types';

interface PostsState {
	posts: Post[];
}

const initialState: PostsState = {
	posts: JSON.parse(localStorage.getItem('posts') || '[]'),
};

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		addPost: (state, action: PayloadAction<Post>) => {
			state.posts.push(action.payload);
			localStorage.setItem('posts', JSON.stringify(state.posts));
		},
		editPost: (state, action: PayloadAction<Post>) => {
			const index = state.posts.findIndex(
				(post) => post.id === action.payload.id
			);
			if (index !== -1) {
				state.posts[index] = action.payload;
				localStorage.setItem('posts', JSON.stringify(state.posts));
			}
		},
		deletePost: (state, action: PayloadAction<string>) => {
			state.posts = state.posts.filter((post) => post.id !== action.payload);
			localStorage.setItem('posts', JSON.stringify(state.posts));
		},
	},
});

export const { addPost, editPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
