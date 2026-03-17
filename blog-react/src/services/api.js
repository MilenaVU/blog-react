const BASE_URL = "https://dummyjson.com";

export const getPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`);
  return res.json();
};

export const getPostById = async (id) => {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  return res.json();
};

export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`);
  return res.json();
};

export const getPostsByUser = async (userId) => {
  const res = await fetch(`${BASE_URL}/posts/user/${userId}`);
  return res.json();
};
