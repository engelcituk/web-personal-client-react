//layout
import LayoutAdmin from '../layouts/LayoutAdmin'
import LayoutBasic from '../layouts/LayoutBasic'

//admin  pages
import AdminHome from '../pages/Admin/';
import AdminSigIn from '../pages/Admin/SignIn';
import AdminUsers from '../pages/Admin/Users';
import AdminMenu from '../pages/Admin/MenuWeb';
import AdminCourses from '../pages/Admin/Courses';
import AdminBlog from '../pages/Admin/Blog';



//pages
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Courses from '../pages/Courses';
import Blog from '../pages/Blog';



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
                path: "/admin/courses",
                exact: true,
                component: AdminCourses
            },
            {
                path: "/admin/blog",
                exact: true,
                component: AdminBlog
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
                path: "/blog",
                component: Blog,
                exact: true,

            },
            {
                path: "/blog/:url",
                component: Blog,
                exact: true,

            },
            {
                component: Error404
            }
        ]
    }
];

export default routes;