//layout
import LayoutAdmin from '../layouts/LayoutAdmin'
import LayoutBasic from '../layouts/LayoutBasic'

//admin  pages
import AdminHome from '../pages/Admin/';
import AdminSigIn from '../pages/Admin/SigIn';

//pages
import Home from '../pages/Home';
import Contact from '../pages/Contact';


const routes = [
    {
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
        }
    ]
},
{
    path: "/",
    component: LayoutBasic,
    exact: false, //#endregion
    routes: [
        {
            path: "/",
            component: Home,
            exact: true,

        },
        {
            path: "/contact",
            component: Contact,
            exact: true,

        }
    ]
}
];

export default routes;