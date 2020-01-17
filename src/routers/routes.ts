import React from 'react';

interface Route {
    path: string,
    component: any,
}

const routes: Route[] = [{
    path: '/reading',
    component: () => import('../pages/Reading'),
}, {
    path: '/',
    component: () => import('../pages/Home'),
}].map(v => {
    return {
        ...v,
        component: React.lazy(v.component)
    }
})

export default routes;