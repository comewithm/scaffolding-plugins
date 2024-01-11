import {useRoutes} from 'react-router-dom'
import App from './App.jsx'

const routerList = [
    {
        path: '/',
        element: App,
    },
    // ...
    {
        path: '*',
        element: <Navigate to={"/404"} />
    }
]

const Routes = () => {
    return useRoutes(routerList)
}

export default Routes