// const reducer=(posts=[],action)=>{ //takes state,here posts ,and action 
//     switch(action.type){
//         case 'FETCH_ALL':
//             return posts;
//         case 'CREATE':
//             return posts;
//         default:
//             return posts;
//     }
// }
// export default (posts=[],action)=>{ //takes state,here posts ,and action 
//     switch(action.type){
//         case 'FETCH_ALL':
//             return action.payload;
//         case 'CREATE':
//             return [...posts, action.payload]; //spread the posts and add the new post to payload
//         default:
//             return posts;
//     }
// }
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload]
        default:
            return posts;
    }
}