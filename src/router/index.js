import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import JobDetails from '../views/JobDetails.vue'
import AddJob from '../views/AddJob.vue'
import EditJob from '../views/EditJob.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/jobs/add', name: 'AddJob', component: AddJob },
  { path: '/jobs/:id', name: 'JobDetails', component: JobDetails, props: true },
  { path: '/jobs/:id/edit', name: 'EditJob', component: EditJob, props: true },
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
