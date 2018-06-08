import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Currency from '@/components/Currency'
import Holiday from '@/components/Holiday'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
            children: [
                { path: '', component: Home },
                {
                    path: 'currency',
                    component: Currency
                }, {
                    path: 'holiday',
                    component: Holiday
                }
            ]
        }
    ]
})
