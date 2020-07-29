import Vue from 'vue'
import Vuex from 'vuex'
import active from './module/active'

Vue.use(Vuex)

// function storeLocalStore (state){
//     window.localStorage.setItem("activeIndex", JSON.stringify(state))
// }

const store = new Vuex.Store({
    modules: {
        active
    }
})

export default store;