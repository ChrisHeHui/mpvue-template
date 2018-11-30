import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from '@/App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#vuex}}
import store from '@/vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const app = new Vue({
  mpType: 'app',{{#vuex}}
  store,{{/vuex}}
  ...App{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
app.$mount(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
