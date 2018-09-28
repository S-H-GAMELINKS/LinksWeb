import Vue from 'vue/dist/vue.esm';
import Header from './components/layouts/header.vue';
import * as  Bootstrap from 'bootstrap-umi';
import 'bootstrap-umi/dist/css/bootstrap.css';

Vue.use(Bootstrap);

const links = new Vue({
    el: '#links',
    components: {
        'nav-bar': Header
    }
})