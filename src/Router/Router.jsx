import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import Home from "../Page/Home/Home";
import Class from "../Page/Class/Class";
import Instructores from "../Page/Instructore/Instructores";
import Dashboard from "../Page/Dashboard/Dashboard";
const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/class',
                element:<Class></Class>
            },
            {
                path:'instructor',
                element:<Instructores></Instructores>
            },
            {
                path:'dashboard',
                element:<Dashboard></Dashboard>
            }
        ]
    }
])
export default router