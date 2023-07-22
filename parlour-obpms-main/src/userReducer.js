let init={
    data:{
          status:" ",
          message:" ",
          parlour:{ },
          token:" "
     },   
  }; 
  
  
  const userReducer =(state=init,action)=>{
      switch (action.type) {
          case 'REGISTER_USER':
            //   // console.log(action.payload)
              return {...state.data,data:action.payload} 
          case "LOGIN" :
              return {...state.data,data:action.payload}       
        case "UPDATE" :
    
        return {...state,
            data : { ...state.data,parlour:{...action.payload}
            }
        }           
          case "LOGOUT" :
              return {...state.data,data:null}             
          default:
              return state
      }
  }
  
export default userReducer;