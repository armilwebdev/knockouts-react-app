// UserInfo.jsx
import { useParams } from 'react-router-dom';
import useFetchUser from '../hooks/useFetchUser'; // Adjust the path as necessary

const UserInfo = () => {
    const { id } = useParams(); // Assuming the route is set up to pass the user ID
    const { user, loading, error } = useFetchUser(id);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="mt-24">
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            {/* Add more user details as needed */}
        </div>
    );
};

export default UserInfo;
