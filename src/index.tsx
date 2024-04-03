import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import pageData from "./type/PageData.json"
import reportWebVitals from './reportWebVitals';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./page/Login";
import RequireAuth from "./component/RequireAuth";
import { AdminPage } from "./page/admin/AdminPage";
import App from "./App";
import { AdminEditPage } from "./page/admin/AdminEditPage";

import { CreateParcelList } from "./page/Parcel/CreateParcelList";
import { ProductDetail } from "./page/Product/ProductDetail";
import Warehouse from './page/warehouse/Warehouse';
import Audit from './page/audit/Audit';
import Job from './page/job/Job';

const container = document.getElementById('root')!;
const root = createRoot(container);

function ErrorPage() {
    return null;
}


const router = createBrowserRouter([
    // RequireAuth
    {
        path: '/',
        element: <>
            <App />
        </>,
        errorElement: <ErrorPage />,
        // You can add child routes here
        children: [
            { path: 'admin', element: <><AdminPage></AdminPage></> },
            { path: 'admin/:id', element: <><AdminEditPage></AdminEditPage></> },
            {
                path: pageData["Create-Parcel"].pageUrl,
                element: <><CreateParcelList></CreateParcelList></>
            },
            {
                path: pageData["Create-Product"].pageUrl,
                element: <><ProductDetail></ProductDetail></>
            },
            { path: pageData["warehouse"].pageUrl, element: <><Warehouse /></> },
            { path: pageData["audit"].pageUrl, element: <><Audit /></> },
            { path: pageData["job"].pageUrl, element: <><Job /></> },


            // ... other child routes
        ],
    },
    {
        path: '/login',
        element: <Login />
    }
    // ... other top-level routes
]);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
