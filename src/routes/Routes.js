// import RouteConfig from './RouteConfig'
// import PrivateRoute from './PrivateRoute'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// const AppRoutes = () => {

//     return (

//         <BrowserRouter>
//             <Routes>
//                 {
//                     RouteConfig.map((route, index) =>
//                         route.isPrivate ? (
//                             <Route
//                                 key={index}
//                                 path={route.path}
//                                 element={<PrivateRoute>{route.element}</PrivateRoute>}
//                             />
//                         ) :
//                             (
//                                 <Route
//                                     key={index}
//                                     path = { route.path }
//                                     element = { route.element }
//                         />
//                     )
                    
//                     )
//                 }
//             </Routes>
//         </BrowserRouter>
//     )
// }
// export default AppRoutes