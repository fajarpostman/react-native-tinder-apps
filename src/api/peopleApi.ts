/**
 * @author Fajar Postman
 */

import { api } from './apiClient';

export const fetchPeople = async (page: number = 1) => {
  const res = await api.get(`/people?page=${page}`);
  return {
    data: res.data.data,
    currentPage: res.data.current_page,
    lastPage: res.data.last_page,
    nextPageUrl: res.data.next_page_url
  };
};

export const likePerson = async (id: number) => {
  const res = await api.post(`/people/${id}/like`);
  return res.data;
};

export const dislikePerson = async (id: number) => {
  const res = await api.post(`/people/${id}/dislike`);
  return res.data;
};

export const fetchLikedList = async () => {
  const res = await api.get('/people/liked');
  return res.data;
};
