export  const initialState = {
  posts: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_POST" :{
            return { posts:[...state.posts, action.payload]}
        } 

        default :
           return state

    }


}