import Vue from 'vue/dist/vue.esm';
import * as  Bootstrap from 'bootstrap-umi';
import 'bootstrap-umi/dist/css/bootstrap.css';

Vue.use(Bootstrap);

const links = new Vue({
    el: '#links',
    data: function() {
        return {
            message: "Hello!"
        }
    }
})