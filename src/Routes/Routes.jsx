import { lazy } from "react";
import { Route } from "react-router-dom";


const Routes = [
    {
        path: '',
        element: lazy(() => import('./../Pages/HomeTemplates/HomeTemplates')),
        nested: [
            {
                path: '',
                element: lazy(() => import('./../Pages/HomeTemplates/HomePage/HomePage'))
            },
            {
                path: 'about',
                element: lazy(() => import('./../Pages/HomeTemplates/About/AboutPage'))
            },
            {
                path: 'list-movie',
                element: lazy(() => import('./../Pages/HomeTemplates/ListMovie/ListMovie'))
            },
            {
                path: 'detail/:id',
                element: lazy(() => import('./../Pages/HomeTemplates/DetailPage/DetailPage'))
            },
        ]
    },
    {
        path: 'checkout/:id',
        element: lazy(() => import('./../Pages/HomeTemplates/CheckoutPage/CheckoutPage'))
    },
    {
        path: 'login',
        element: lazy(() => import('./../Pages/HomeTemplates/User/LoginPage/LoginPage'))
    },
    {
        path: 'register',
        element: lazy(() => import('./../Pages/HomeTemplates/User/RegisterPage/RegisterPage'))
    },
    {
        path: 'admin',
        element: lazy(() => import('./../Pages/AdminTemplates/AdminTemplates')),
        nested: [
            {
                path: 'dashboard',
                element: lazy(() => import('./../Pages/AdminTemplates/Dashboard/Dashboard')),
            },
            {
                path: 'films',
                element: lazy(() => import('../Pages/AdminTemplates/FilmsAdmin/FilmsAdmin')),
                nested: [
                    {
                        path: 'add-film',
                        element: lazy(() => import('../Pages/AdminTemplates/FilmsAdmin/AddFilm/AddFilm'))
                    },
                    {
                        path: 'edit-film/:id',
                        element: lazy(() => import('../Pages/AdminTemplates/FilmsAdmin/EditFilm/EditFilm'))
                    },
                    {
                        path: 'show-time/:id',
                        element: lazy(() => import('./../Pages/AdminTemplates/ShowTime/ShowTime')),
                    },
                ]
            },
            {
                path: 'user',
                element: lazy(() => import('../Pages/AdminTemplates/User/UserAdmin')),
                nested: [
                    {
                        path: 'add-user',
                        element: lazy(() => import('../Pages/AdminTemplates/User/AddUser/AddUser'))
                    },
                    {
                        path: 'edit-user',
                        element: lazy(() => import('../Pages/AdminTemplates/User/EditUser/EditUser'))
                    },
                ]
            },
        ]
    },
    {
        path: 'auth',
        element: lazy(() => import('./../Pages/AdminTemplates/AuthPage/AuthPage'))
    },
]


// const renderRoutes = () => {
//     return Routes.map((route, index) => {
//         if (route.nested) {
//             return <Route key={index} path={route.path} element={<route.element/>}>
//                 {route.nested.map((item, i) => {
//                     return <Route key={i} path={item.path} element={<item.element/>}>

//                     </Route>
//                 })}
//             </Route>
//         } else {
//             return <Route key={index} path={route.path} element={<route.element/>}>

//             </Route>
//         }
//     })
// }


const renderRoutes = () => {
    return Routes.map((route, index) => {
        if (route.nested) {
            return <Route key={index} path={route.path} element={<route.element />}>
                {route.nested.map((item, i) => {
                    if (item.nested) {
                        return <Route key={i} path={item.path} element={<item.element />}>
                            {item.nested.map((child, ii) => {
                                return <Route key={ii} path={child.path} element={<child.element />}>

                                </Route>
                            })}
                        </Route>
                    } else {
                        return <Route key={i} path={item.path} element={<item.element />}>

                        </Route>
                    }
                })}
            </Route>
        } else {
            return <Route key={index} path={route.path} element={<route.element />}>

            </Route>
        }
    })
}

export default renderRoutes;