import { createSlice } from '@reduxjs/toolkit';
const priceSlice = createSlice({
    name: 'priceReducer',
    initialState: {
        users:[],
        friends:[],
        myne:[],
        To:[],
    },
    reducers: {
      load_users: (state, action) => {
        // console.log(' DATA FROM LOAD_users......', action.payload);
        state.users=[];
        state.users.push(action.payload);
      },
      load_frds:(state,action)=>{
        // console.log("I am from load friends...",action.payload);
        state.friends=[];
        state.friends.push(action.payload);
      },
      load_expanse:(state,action)=>{
         console.log("I am from My expanses...",action.payload);
        state.myne=[];
        state.myne.push(action.payload);
      },
      load_to_expanse:(state,action)=>{
        console.log("I am from My expanses...",action.payload);
       state.To=[];
       state.To.push(action.payload);
     }
    },
  });
  export function getUsers(key) {
    // console.log('GETITEMS ... METHOD CALLED.....',key);
    return (dispatch) => {
      fetch('http://localhost:5000/getusers/getusers')
        .then((res) => res.json())
        .then((data) => {
            console.log("data in get users",data[0]);
          if(key==='')
          {
            // dispatch(load_users(data[0]))
          }
          else
          {
            var temp=data[0].filter((p,i)=>{
              return p.name.includes(key);
            })
            dispatch(load_users(temp));
          }
        });
    };
  }
  export function getFriends(id)
  {
    // console.log("I am from getting frds method",id);
    return(dispatch)=>{
      fetch('http://localhost:5000/getfriends/getfriends/'+id)
        .then((res) => res.json())
        .then((data) => {
            console.log("data in get friends",data[0]);
            dispatch(load_frds(data[0]));
        });
    }
  }
 export function add_frd(obj)
 {
     return(dispatch)=>{
        fetch('http://localhost:5000/addfriend/addfriend', {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json',
                'authorization':localStorage.getItem('authorization')
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
          console.log("data from add frd",data);
        });
     }
 }
 export function update_pas(obj)
 {
   return(dispatch)=>
   {
    console.log("i am update pas function",obj)
    fetch('http://localhost:5000/forgotpas/forgotpas', {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    'Content-Type': 'application/json',
                    'authorization':localStorage.getItem('authorization')
                }
            })
            .then(()=>{
              dispatch(getUsers(''))
            })
   }
 }
 export function Add_Expense(obj)
 {
   return(dispatch)=>{
    console.log("i am update pas function",obj)
    fetch('http://localhost:5000/add_expanse/add_expanse', {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    'Content-Type': 'application/json',
                    'authorization':localStorage.getItem('authorization')
                }
            })
            .then(()=>{
              // dispatch(getUsers(''))
            })

   }
 }
 export function MyExpanse(id)
 {
  return(dispatch)=>{
    fetch('http://localhost:5000/myexpanse/myexpanse/'+id)
      .then((res) => res.json())
      .then((data) => {
          console.log("data in my expanses",data[0]);
          dispatch(load_expanse(data[0]));
      });
  }
 }
 export function ToExpanse(id)
 {
  return(dispatch)=>{
    fetch('http://localhost:5000/toexpanse/toexpanse/'+id)
      .then((res) => res.json())
      .then((data) => {
          console.log("data in to expanses",data[0]);
          dispatch(load_to_expanse(data[0]));
      });
  }
 }
export const { load_users,load_frds,load_expanse,load_to_expanse} = priceSlice.actions;
export default priceSlice.reducer;