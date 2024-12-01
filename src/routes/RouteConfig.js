import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import OurWork from "../pages/OurWork";
import PostPage from "../pages/PostPage";
import ProductPage from "../pages/ProductPage";
import Root from "../pages/Root";

const Routes = [
    {
        path:"/",
        element:<Root />,
        children:[
           {
            path:"/",
            element: <Home />,
            isPrivate:false
           },
           {
            path:"/home",
            element: <Home />,
            isPrivate:false
           },
           {
            path:"/our-work",
            element:<OurWork />,
            isPrivate:false
           },
           {
            path:"/contact",
            element:<Contact />,
            isPrivate:false
           },
           {
            path:"/single/:id",
            element:<ProductPage />,
            isPrivate:false
           },
           {
            path:"/aryan",
            element: <Login/>,
            isPrivate:false
           },
           {
            path:"/ary",
            element: <PostPage/>,
            isPrivate:false
           }
           
        ]
    }
]   

export default Routes