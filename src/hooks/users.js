// src/api/users.js

import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:8080/users';

export const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};


// Custom hook for fetching user emails
export const useFetchUserEmails = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserEmails = async () => {
      try {
        const users = await fetchUsers();
        const emails = users.map(user => user.email);
        setEmails(emails);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getUserEmails();
  }, []);

  return { emails, loading, error };
};

// Custom hook for fetching users
export const useFetchUsers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetchUsers();
        setData(users);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return { data, loading, error };
};

// CUstom Hook for fetching user data
