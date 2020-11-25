import axios from 'axios';

const url='http://localhost:5000/posts';

export const fetchPosts=()=>axios.get(url);

export const createPost=(newPost)=>{
    console.log(url);
    console.log(newPost);
    axios.post(url,newPost);
}
console.log(8);
