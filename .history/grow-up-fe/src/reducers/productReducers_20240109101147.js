const productListReducers (state ={products:[]}, action) =>{
switch(action.type){
    case 'PRODUCT_LIST_REQUEST':
        return {loading:true, products:[]}
        
    case 'PRODUCT_LIST_SUCCESS':
        return {loading:false, products:[]}

     case 'PRODUCT_LIST_SUCCESS':
            return {loading:false, products:[]}
    }
}