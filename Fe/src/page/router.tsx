import routerHome from './Home/router'
import routerLogin from './Login/router'
import routerRegister from './Register/router'
import routerWellcome from './Wellcome/router'
 
import { createBrowserRouter } from 'react-router-dom'
 
 
 
export const routers = createBrowserRouter([
 routerHome,
 routerLogin,
 routerRegister,
 routerWellcome,
 
])