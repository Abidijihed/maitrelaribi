import {GET_PRODUCT, GET_USER} from '../actiontype/actiontype'
const initialState = {
    data: [],
    user:{}
  };
  const PostReducer =(state = initialState,{type,payload })=>{
    switch(type){
        case GET_PRODUCT:
            return {...state,data: payload};
        case GET_USER:
          return {...state,user:payload};
        default:
            return state

    }
  }
  export default PostReducer;