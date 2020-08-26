import { GET_userList, /*SOCKET_UserList*/ } from './../services/userList';

export default {

    namespace:'postData',

    state: {
        post: []
    },
    actions: { //等於dvajs的effects
        async GET_PostData({ commit }, payload) {  // eslint-disable-line
            const data = await GET_userList();
            await commit('set_post_data', data);
        },
    },
    mutations: { //等於dvajs的reducers
        set_post_data(state, payload) {
            state.post = payload;
            // return { ...state, users: payload };
        },
    }
};
