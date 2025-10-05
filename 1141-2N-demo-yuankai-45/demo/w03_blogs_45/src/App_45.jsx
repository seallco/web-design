import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { BlogStaticPage_45, HomeLayoutPage_45, HomePage_45 } from './pages';

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
        ],
    },
]);

const App_45 = () => {
    return <RouterProvider router = {router} />;
};

    export default App_45 ;