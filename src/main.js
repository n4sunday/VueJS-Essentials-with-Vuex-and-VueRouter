import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
    el: '#app',
    store,
    render: function (MyApp) {
        return MyApp(App)
    }
})
