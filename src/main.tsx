import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";
import App from './App';
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
            element: <App />,
        },
    ]);

    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
}
