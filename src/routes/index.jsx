import React from 'react'
import { useRoutes } from 'react-router-dom';
import Pages from './Pages';
import VRKDevelopers from './VRKDevelopers';

function PageRoute() {
    const routes = useRoutes([
        { path: "/", element: <Pages />, errorElement: <>err</> },
        { path: "/vrkdevelopers", element: <VRKDevelopers /> }
    ])
    return routes;
}

export default PageRoute