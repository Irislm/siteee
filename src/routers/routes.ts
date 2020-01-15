interface Route {
    path: string,
    component: () => any,
}

const routes: Route[] = [{
    path: '/reading',
    component: () => require('../pages/Reading'),
}, {
    path: '/',
    component: () => require('../pages/Home'),
}]

export default routes;