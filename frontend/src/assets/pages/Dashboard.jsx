import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
const Dashboard = () => {
    const { is_login, user } = useSelector((state) => state.auth)
    useEffect(() => {
    }, [])
    return <div>
        {!user ? 'Belum Login' : user.name }
    </div>;
}

export default Dashboard;
