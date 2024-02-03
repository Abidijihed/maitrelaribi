import {GET_PRODUCT} from '../actiontype/actiontype'
const initialState = {
    data: [],
  };
  const PostReducer =(state = initialState,{type,payload })=>{
    switch(type){
        case GET_PRODUCT:
            return {...state,data: payload};
        default:
            return state

    }
  }
  export default PostReducer;