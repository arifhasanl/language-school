import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxioSecoure from "./UseMenu/useAxioSecoure";
import { useQuery } from "@tanstack/react-query";


const useInstructore = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxioSecoure();
    // use axios secure with react query
    const {data: isInstructor, isLoading: isisInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/instructor/${user?.email}`);
            return res.data.instructor;
        }
    })
    return [isInstructor, isisInstructorLoading]
};

export default useInstructore;