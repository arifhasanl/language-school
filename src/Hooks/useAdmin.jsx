
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxioSecoure from './UseMenu/useAxioSecoure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
        const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxioSecoure();
    // use axios secure with react query
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            //todo
            const res = await axiosSecure.get(`/user/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;