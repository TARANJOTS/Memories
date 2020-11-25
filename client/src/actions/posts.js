import * as api from '../api'

//Action Creators->functions that return actions

export const getPosts=()=>async (dispatch)=>{ //takes time to bring all data-async-use Redux Thunk->specify additional arrow function
    try{
        const {data}=await api.fetchPosts();
        
        dispatch({type:'FETCH_ALL',payload:data} )//payload->where we store all are data //dispatch and not not return action as using Redux Thunk
    }catch(error){
        console.log(error.message);
    }
}

export const createPost=(post)=>async (dispatch) => {
    try{
        const {data}=await api.createPost(post);

        dispatch({type:'CREATE',payload:data})
    }catch (error) {
        console.log(error);
    }
}