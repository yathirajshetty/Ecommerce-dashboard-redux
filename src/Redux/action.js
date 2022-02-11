import * as types from "./actionType";
import {auth, db} from "../config/firebase";
const addProduct =() =>({
    type: types.ADD_PRODUCT,
});
const getProduct =(product) =>({
    type: types.ADD_PRODUCT,
    payload: product,
});
const addCategory =() =>({
    type: types.ADD_CATEGORY,
});
const getCategory =(category) =>({
    type: types.GET_CATEGORY,
    payload: category,
});
export const ProductInitiate = (product) =>{
    return function(dispatch){
       db.collection("products").doc().set(product);
       dispatch(addProduct());
    }
}
export const CategoryInitiate = (category) =>{
    return function(dispatch){
       db.collection("categorys").doc().set(category);
       dispatch(addCategory());
    }
}

export const getProductInitiate = () =>{
    return function(dispatch){
       db.collection("products").onSnapshot((querySnapshot) =>{
           const products= [];
           querySnapshot.forEach((doc) =>{
               products.push({ ...doc.data(), id: doc.id});
           });
           dispatch(getProduct(products));
       });
      
    }
}

export const getCategoryInitiate = () =>{
    return function(dispatch){
       db.collection("categorys").onSnapshot((querySnapshot) =>{
           const category= [];
           querySnapshot.forEach((doc) =>{
            category.push({ ...doc.data(), id: doc.id});
           });
           dispatch(getCategory(category));
       });
      
    }
}