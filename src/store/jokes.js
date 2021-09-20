import { loadJoke } from '../services/jokeService'
export default ({
    actions: {
        async fetchJokes(ctx) {
            const joke = await loadJoke();
            if (joke) { ctx.commit('setJokes', joke); }
            else {
                ctx.commit('setJokes', "No jokes about Chuck!");
            }
        }
    },
    mutations: {
        setJokes(state, jokes) {
            state.jokes = jokes
        }
    },
    state: {
        jokes: ""
    },
    getters: {
        getJokes(state) {
            return state.jokes;
        }
    }
});