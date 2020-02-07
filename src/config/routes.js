//layout
import LayoutAdmin from '../layouts/LayoutAdmin'

//admin  pages
import AdminHome from '../pages/Admin/';
import AdminSigIn from '../pages/Admin/SigIn';

const routes = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path:"/admin",
                component: AdminHome,
                exact: true
            },
            {
                path:"/admin/login",
                component: AdminSigIn,
                exact: true
            }
        ]
    }
];

export default routes;
