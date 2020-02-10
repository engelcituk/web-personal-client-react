//layout
import LayoutAdmin from '../layouts/LayoutAdmin'
import LayoutBasic from '../layouts/LayoutBasic'

//admin  pages
import AdminHome from '../pages/Admin/';
import AdminSigIn from '../pages/Admin/SignIn';

//pages
import Home from '../pages/Home';
import Contact from '../pages/Contact';

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
                component: Error404
            }
        ]
    }
];

export default routes;