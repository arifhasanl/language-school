import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";


const AdminRout = ({children}) => {
        const { user, loading } = useContext(AuthContext);
        const [isAdmin, isAdminLoading] = useAdmin();
        const location = useLocation();
    
        if(loading || isAdminLoading){
            return <h3 className="text-3xl font-bold text-center">Loadding...</h3>
        }
    
        if (user && isAdmin) {
            return children;
        }
        return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRout;