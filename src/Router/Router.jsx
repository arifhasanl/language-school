import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import Home from "../Page/Home/Home";
import Class from "../Page/Class/Class";
import Instructores from "../Page/Instructore/Instructores";
import Dashboard from "../Page/Dashboard/Dashboard";
import SelectedClass from "../Page/Dashboard/SelectedClass";
import PrivetRout from "./PrivetRout";
import Enrol from "../Page/Dashboard/Enrol";
import PamentHistry from "../Page/Dashboard/PamentHistry";
import DasContent from "../Page/Dashboard/DasContent";
import Allusers from "../Page/Dashboard/Allusers";
import AdminRout from "./AdminRout"
import MangeClass from "../Page/Dashboard/Admin/MangeClass";
import AddedClass from "../Page/Dashboard/Admin/Instructore/AddedClass";
import InstructoreRout from "./Instructore"
import InstructorClass from "../Page/Dashboard/Admin/Instructore/InstructorClass";
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
                path:'/instructor',
                element:<Instructores></Instructores>
            },
           
        ]
    },
        {
            path:'dashboard',
            element:<PrivetRout><Dashboard></Dashboard></PrivetRout>,
            children:[
               
                {
                    path:'selecteClass',
                    element:<SelectedClass></SelectedClass>
                },
                {
                    path:'enrol',
                    element:<Enrol></Enrol>
                },
                {
                    path:'history',
                    element:<PamentHistry></PamentHistry>
                },
                {
                    path:'alluser',
                    element:<Allusers></Allusers>
                },
                {
                    path:'addClass',
                    element:<AddedClass></AddedClass>
                  },
               {
                path:'mangeclass',
                element:<AdminRout><MangeClass></MangeClass></AdminRout>
               },
               {
                path:'instructorClass',
                element:<InstructoreRout><InstructorClass></InstructorClass></InstructoreRout>
              }
            ]
        }
])
export default router