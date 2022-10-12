import {createApp} from "vue";
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



const router = new createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            alias: '/books',
            name: 'book-list',
            component: ()=> import('./components/BookList')
        },
        {
            path: '/books/:id',
            name: 'book-item',
            component: ()=> import('./components/Book')
        },
        {
            path: '/add',
            name: 'add-book',
            component: ()=> import('./components/AddBook')
        }
    ]
})

createApp(App).use(router).mount('#app')