import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes.js'
export const bus = new Vue();

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: 'history',
});

Vue.directive('rainbow', {
  bind(ele, binding, vnode){
    ele.style.color = "#" + Math.random().toString().slice(2,8);
  }
});

Vue.directive('theme', {
  bind(el, binding,vnode){
    if (binding.value == 'wide'){
      el.style.maxWidth = "1200px";
    }
    else if(binding.value == 'narrow'){
        el.style.maxWidth = "600px";
    }
    if(binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';

    }
  }
});


//Filters
Vue.filter('to-uppercase', function (value) {
    return value.toUpperCase();
});

Vue.filter('shorter', function (value) {
    return value.slice(0,100)+ '...';
});

new Vue({
  el: '#app',
  render: h => h(App),
    router : router
});
