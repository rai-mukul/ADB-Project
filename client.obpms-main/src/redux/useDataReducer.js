


let init={
  data:{
        status: " ",
        message: " ",
        user: null,
        token: " "
    
   },  
   
}; 




const useData =(state=init,action)=>{
    switch (action.type) {
        case 'REGISTER_USER':
            return {...state.data,data:action.payload} 
        case "LOGIN" :
            // // console.log(action.payload)
            return {...state.data,data:action.payload} 
        case "UPDATE" :
            // // console.log(payload);
            return {...state,
                data : { ...state.data,user:{...action.payload}
                }
            } 
        case "LOGOUT" :
            return init ;
        default:
            return state
    }
}



export default useData;