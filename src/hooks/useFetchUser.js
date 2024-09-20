import { useEffect, useState } from 'react';


const useFetchUser = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchUser = async () => {
          try {
              const response = await fetch(`http://localhost:8080/users/${userId}`);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const contentType = response.headers.get('content-type');
              if (!contentType || !contentType.includes('application/json')) {
                  throw new Error('Received non-JSON response');
              }
              const data = await response.json();
              setUser(data);
          } catch (err) {
              setError(err.message);
          } finally {
              setLoading(false);
          }
      };

      fetchUser();
  }, [userId]);

  return { user, loading, error };
};

export default useFetchUser