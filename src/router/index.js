import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import store from '../store'
import SignIn from '../views/sessions/SignIn.vue'
import SignUp from '../views/sessions/SignUp.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../layout/index.vue'),
        redirect: '/dashboards/dashboard-version-one',
        meta: {
            title: 'Home',
        },

        children: [
            {
                path: '/dashboards',
                name: 'Dashboards',
                component: () => import('../views/dashboards/index.vue'),
                meta: {
                    title: 'Dashboard',
                },
                children: [
                    {
                        path: 'dashboard-version-one',
                        name: 'dashboard-version-one',
                        component: () =>
                            import('../views/dashboards/Dashboards.v1.vue'),
                    },
                ],
            },
            {
                path: '/components',
                name: 'components',
                component: () => import('../views/components/index.vue'),
                meta: {
                    title: 'Components',
                },
                children: [
                    {
                        path: 'button',
                        name: 'button',
                        component: () =>
                            import('../views/components/Button.vue'),
                    },
                ],
            },
            {
                path: '/StudentRecords',
                name: 'StudentRecords',
                component: () => import('../views/StudentRecords/index.vue'),
                meta: {
                    title: 'StudentRecords',
                },
                children: [
                    {
                        path: 'studentrecords',
                        name: 'studentrecords',
                        component: () =>
                            import('../views/StudentRecords/studentrecords.vue'),
                    },
                ],
            },
            {
                path: '/ClinicAppointments',
                name: 'ClinicAppointments',
                component: () => import('../views/clinic/ClinicAppointments/index.vue'),
                meta: {
                    title: 'ClinicAppointments',
                },
                children: [
                    {
                        path: 'clinic-appointments',
                        name: 'clinic-appointments',
                        component: () =>
                            import('../views/clinic/ClinicAppointments/clinic-appointments.vue')
                    },
                ],
            },
            {
                path: '/Medicine',
                name: 'Medicine',
                component: () => import('../views/clinic/Medicine/index.vue'),
                meta: {
                    title: 'Medicine',
                },
                children: [
                    {
                        path: 'medicine',
                        name: 'medicine',
                        component: () =>
                            import('../views/clinic/Medicine/medicine.vue')
                    },
                ],
            },
            {
                path: '/profile',
                name: 'profile',
                component: () => import('../views/profile/index.vue'),
                meta: {
                    title: 'Profile',
                },
                children: [
                    {
                        path: 'profileTwo',
                        name: 'ProfileTwo',
                        component: () =>
                            import('../views/profile/ProfileTwo.vue'),
                    },
                ],
            },
        ],
    },

    { path: '/signIn', component: SignIn },
    { path: '/signUp', component: SignUp },

    { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return { left: 0, top: 0 }
    },
    routes,
})

router.afterEach(() => {
    if (window.innerWidth <= 1200) {
        const sidenav =
            store.state.largeSidebar.sidebarToggleProperties.isSideNavOpen

        store.commit('largeSidebar/toggleSidebarProperties')
    }
})

export default router
