import React from 'react'
import { useRoutes } from 'react-router-dom';
import Pages from './Pages';
import VRKDevelopers from './VRKDevelopers';
import Service from './Services';
import OtherServices from './OtherServices';
import About from './About';

function PageRoute() {
    const routes = useRoutes([
        { path: "/", element: <Pages />, errorElement: <>err</> },
        { path: "/vrkdevelopers", element: <VRKDevelopers /> },
        { path: "/services", element: <Service /> },
        { path: "/other-services", element: <OtherServices /> },
        { path: "/about", element: <About /> }
    ])
    return routes;
}

export default PageRoute