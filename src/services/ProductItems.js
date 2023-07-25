
import axios from "axios";

const url = 'https://604e18fe2a808e00177848f7.mockapi.io/drives';

export const getListProduct = async () =>{

   const result = await axios.get(url);
   return result.data;

}