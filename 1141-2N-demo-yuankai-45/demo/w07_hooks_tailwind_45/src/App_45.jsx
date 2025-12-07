import { createBrowserRouter, RouterProvider } from 'react-router';

import { 
    BlogStaticPage_45, 
    HomeLayoutPage_45, 
    HomePage_45,
    BlogLocalJsonPage_45,
    BlogNodePage_45,
    BookListPage_45,
    BlogSupaPage_45,
    BlogLocalJsonPage2_45,
} from './pages';

import {
    T11_ErrorExamplePage_45,
    T12_UseStateBasicsPage_45,
} from './pages/tutorials';

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
                path: 'localjson2_45',
                element: <BlogLocalJsonPage2_45/>,
            },
            {
                path: 'node_45',
                element: <BlogNodePage_45/>,
            },
            {
                path:'supa_45',
                element: <BlogSupaPage_45/>,
            },
            {
                path: 'booklist_45',
                element: <BookListPage_45/>,
            },
        ],
    },
{
        path:'/tutorials',
        element:<HomeLayoutPage_45/>,
        children:[
            {
                index:true,
                element:<HomePage_45/>,
            },
            {
                path: 't11_45',
                element: <T11_ErrorExamplePage_45/>,
            },
            {
                path: 't12_45',
                element: <T12_UseStateBasicsPage_45/>,
            }
        ],
    },
]);

const App_45 = () => {
    return <RouterProvider router = {router} />;
};

    export default App_45 ;