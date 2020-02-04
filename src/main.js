import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: '#app',
    render: function (MyApp) {
        return MyApp(App)
    }
})
