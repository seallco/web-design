import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { 
    BlogStaticPage_45, 
    HomeLayoutPage_45, 
    HomePage_45,
    BlogLocalJsonPage_45,
    BlogNodePage_45
} from './pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayoutPage_45 />,
        children:[
            {
                index: true,
                element: <HomePage_45 />,
            },
            {
                path: 'static_45',
                element: <BlogStaticPage_45/>,
            },
            {
                path: 'localjson_45',
                element: <BlogLocalJsonPage_45/>,
            },
            {
                path: 'node_45',
                element: <BlogNodePage_45/>,
            },
        ],
    },
]);

const App_45 = () => {
    return <RouterProvider router = {router} />;
};

    export default App_45 ;