import axios from 'axios'
import {GET_PRODUCT, GET_USER} from '../actiontype/actiontype'

import Swal from 'sweetalert2'
export const get_product = () => async (dispatch) => {
    try {
       await axios.get('http://localhost:5800/api/GEtPost').then((res)=>{
        dispatch({ type: GET_PRODUCT, payload: res.data })

       })

    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops..."
          });
        }

    
}
export const add_product = (data) => async (dispatch) => {
    try {
        await axios.post('http://localhost:5800/api/AddPoste',data)
        .then((res)=>{
            if(res.data==="poste added"){
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Votre Poste a été enregistré.",
                showConfirmButton: false,
                timer: 1500
              })
              dispatch(get_product())
              
            }
          })
        

    } catch (error) {
     console.log(error)

    }
}
export const update_product = (id,data) => async (dispatch) => {
    try {
       const res= await axios.put(`http://localhost:5800/api/Update/${id}`,data)
        if(res.data==="Post updated successfully"){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Votre Poste est Modifer',
              showConfirmButton: false,
              timer: 1500
            })
            dispatch(get_product())
            
          }

    } catch (error) {
     console.log(error)

    }
}

export const delete_product = (id) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:5800/api/DeletePost/${id}`)
        dispatch(get_product())

    } catch (error) {
     console.log(error)

    }
}
export const get_user = () => async (dispatch) => {
  try {
     await axios.get('http://localhost:5800/api/getuser').then((res)=>{
      dispatch({ type: GET_USER, payload: res.data[0] })

     })

  } catch (error) {
      Swal.fire({
          icon: "error",
          title: "Oops..."
        });
      }

  
}