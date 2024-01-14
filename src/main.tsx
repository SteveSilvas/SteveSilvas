import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";
import App from './App';
import About from './Screens/About';
import Certificate from './Screens/Certificate';
import Contact from './Screens/Contact';
import Experience from './Screens/Experience';
import Home from './Screens/Home';
import Projects from './Screens/Projects';
import Skills from './Screens/Skills';
import Training from './Screens/Training';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>,
)

export default function AppRouter() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            children: [
                {
                    path: '/',
                    element: <Home/>,
                },
                {
                    path: 'about',
                    element: <About/>,
                },
                {
                    path: 'projects',
                    element: <Projects/>,
                },
                {
                    path: 'training',
                    element: <Training/>,
                },
                {
                    path: 'certificate',
                    element: <Certificate/>,
                },
                {
                    path: 'experience',
                    element: <Experience/>,
                },
                {
                    path: 'skills',
                    element: <Skills/>,
                },
                {
                    path: 'contact',
                    element: <Contact/>,
                },                
            ]
        },
       
    ]);

    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
}
