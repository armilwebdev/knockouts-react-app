// src/pages/About.jsx

import React from 'react';
import { useFetchUsers } from   '../hooks/users';
import { useFetchUserEmails } from '../hooks/users';
import { Link } from 'react-router-dom';

function About() {
  const { data: users, loading: usersLoading, error: usersError } = useFetchUsers();
  const { emails, loading: emailsLoading, error: emailsError } = useFetchUserEmails();
  if (usersLoading || emailsLoading) return <p>Loading...</p>;
  if (usersError || emailsError) return <p>Error: {usersError?.message || emailsError?.message}</p>;
  return (
    <div className="mt-24">


    <h1>Users</h1>
    To create a table with only bottom borders for each row in Tailwind CSS, you can use the border-b utility class for the table rows. Here's how you can set it up:
Table with Bottom Borders Only:

html

<table className="table-auto w-full">
  <thead>
    <tr>
      <th className="px-4 py-2">#</th>
      <th className="px-4 py-2">Name</th>
      <th className="px-4 py-2">Email</th>
      <th className="px-4 py-2">PW</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user => (
      <tr key={user.id} className="border-b">
        <td className="px-4 py-2">{user.id}</td>
        <td className="px-4 py-2">
          <Link to={`/user/${user.id}`} className="text-blue-500 hover:underline">
            {user.name}
          </Link>
        </td>
        <td className="px-4 py-2">{user.email}</td>
        <td className="px-4 py-2">{user.password}</td>
      </tr>
    ))}
  </tbody>
</table>
  </div>
  );
}

export default About;
