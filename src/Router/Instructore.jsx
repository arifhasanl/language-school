
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useInstructore from '../Hooks/useInstructore';
import { Navigate, useLocation } from 'react-router-dom';

const Instructore = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isisInstructorLoading] = useInstructore();
    const location = useLocation();

    if(loading || isisInstructorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default Instructore;