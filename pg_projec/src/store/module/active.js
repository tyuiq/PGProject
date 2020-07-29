
const active = {
    state: {
        activeIndex: '1'  // 激活菜单的index
    },
    getters: {
        getActiveIndex(state) {
            return state.activeIndex
        }
    },
    mutations: {
        SET_ACTIVEINDEX(state, num){
            state.activeIndex = num
        }
    },
    actions: {

    }
}

export default active;