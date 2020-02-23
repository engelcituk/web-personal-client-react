//layout
import LayoutAdmin from '../layouts/LayoutAdmin'
import LayoutBasic from '../layouts/LayoutBasic'

//admin  pages
import AdminHome from '../pages/Admin/';
import AdminSigIn from '../pages/Admin/SignIn';
import AdminUsers from '../pages/Admin/Users';
import AdminMenu from '../pages/Admin/MenuWeb';



//pages
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Courses from '../pages/Courses';


//others paginas
import Error404 from '../pages/Error404';


const routes = [{
        path: "/admin",
        exact: false,
        component: LayoutAdmin,
        routes: [{
                path: "/admin",
                exact: true,
                component: AdminHome
            },
            {
                path: "/admin/login",
                exact: true,
                component: AdminSigIn
            },
            {
                path: "/admin/users",
                exact: true,
                component: AdminUsers
            },
            {
                path: "/admin/menu",
                exact: true,
                component: AdminMenu
            },
            {
                component: Error404
            }
        ]
    },
    {
        path: "/",
        component: LayoutBasic,
        exact: false, //#endregion
        routes: [{
                path: "/",
                component: Home,
                exact: true,

            },
            {
                path: "/contact",
                component: Contact,
                exact: true,

            },
            {
                path: "/courses",
                component: Courses,
                exact: true,

            },
            {
                component: Error404
            }
        ]
    }
];

export default routes;