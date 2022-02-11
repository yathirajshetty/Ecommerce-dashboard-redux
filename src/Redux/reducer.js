import * as types from './actionType';
const initialState ={
    products: [],
    product: [],
    category: [],
    user: null,
    error: null,
    loading: true,
}
const useReducers = (state = initialState, action) =>{
    switch(action.type)
    {
       
        case types.ADD_PRODUCT:
                return{
                    ...state,
                    products: action.payload,
                    loading: false,
                };
        case types.GET_PRODUCTS:
                return{
                    ...state,
                    products: action.payload,
                    loading: false,
                };
        case types.ADD_CATEGORY:
                return{
                    ...state,
                    category: action.payload,
                    loading: false,
                };
        case types.GET_CATEGORY:
                return{
                    ...state,
                    category: action.payload,
                    loading: false,
                };
        default:
           return state;
    }
}
export default useReducers;