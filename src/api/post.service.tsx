// API imports
import api from './api';
import { AxiosResponse } from 'axios';
// Utils imports
import { PostInterface } from '../types';

// Get post according to its id
const getPost = (id: number): Promise<PostInterface> => {
  return api.get(`/posts/${id}`).then(async (response: AxiosResponse<PostInterface>) => {
    return response.data;
  });
};

// Get all posts
const getAllPosts = (): Promise<PostInterface[]> => {
  return api.get(`/posts`).then(async (response: AxiosResponse<PostInterface[]>) => {
    return response.data;
  });
};

export default {
  getAllPosts,
  getPost
};
