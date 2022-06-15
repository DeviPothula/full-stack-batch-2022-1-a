import { createSlice } from '@reduxjs/toolkit';
const priceSlice = createSlice({
    name: 'priceReducer',
    initialState: {
       userOverAllDebits:[],
       userOverAllCredits:[],
        users:[],
        friends:[],
        myne:[],
        To:[],
        details:{},
        group_names:[],
        group_members:[],
        activities:[],

    },
    reducers: {
      load_users: (state, action) => {
        // console.log(' DATA FROM LOAD_users......', action.payload);
        state.users=[];
        state.users.push(action.payload);
      },
      load_frds:(state,action)=>{
        console.log("I am from load friends...",action.payload);
        state.friends=[];
        state.friends.push(action.payload);
      },
      load_expanse:(state,action)=>{
         console.log("I am from My expanses...",action.payload);
        state.myne=[];
        state.myne.push(action.payload);
      },
      load_to_expanse:(state,action)=>{
        console.log("I am from To expanses...",action.payload);
       state.To=[];
       state.To.push(action.payload);
     },
     load_details:(state,action)=>{
      console.log("I am from Details in price slice...",action.payload);
     state.details={};
     state.details=({...action.payload});
   },
    load_group_names:(state,action)=>{
      console.log("I am from load_group_details in slice",action.payload);
      state.group_names=[];
      state.group_names.push(action.payload);
    },
    load_group_members:(state,action)=>{

      console.log("I am from load_group_members in slice",action.payload);
      state.group_members=[];
      state.group_members.push(action.payload);
    },
    load_activities:(state,action)=>{

      console.log("I am from load_activities slice",action.payload);
      state.activities=[];
      state.activities.push(action.payload);
    },
   load_debits:(state,action)=>{
      console.log("I am from load_Debits slice",action.payload)
      state.userOverAllDebits=[];
      state.userOverAllDebits.push(action.payload)
   },
   load_credits:(state,action)=>{
         console.log("I AM FROM LOAD_CREDIST SLICE",action.payload)
         state.userOverAllCredits=[]
         state.userOverAllCredits.push(action.payload)
   }
    },
  });
  export function getUsers() {
    // console.log('GETITEMS ... METHOD CALLED.....');
    return (dispatch) => {
      fetch('http://localhost:5000/getusers/getusers')
        .then((res) => res.json())
        .then((data) => {
            console.log("data in get users",data[0]);
        
          
            dispatch(load_users(data[0]));
          
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
            console.log("data in get friends",data);
            dispatch(load_frds(data));
        });
    }
  }
  export function get_group_details(id)
  {
    // console.log("I am from getting frds method",id);
    return(dispatch)=>{
      fetch('http://localhost:5000/group_details/group_details/'+id)
        .then((res) => res.json())
        .then((data) => {
            console.log("data in get groups details",data[0]);
            dispatch(load_group_names(data[0]));
        });
    }
  }
  export function get_group_members(id)
  {
    // console.log("I am from getting frds method",id);
    return(dispatch)=>{
      fetch('http://localhost:5000/group_members/group_members/'+id)
        .then((res) => res.json())
        .then((data) => {
            console.log("data in get groups members",data[0]);
             
            dispatch(load_group_members(data[0]));
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
          if(data.msg==="success")
          {
         alert("Friend Added Successfully");
         }
         else
         {
           alert("Something wrong")
         }
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
            .then((res)=>res.json())
            .then((data)=>{
              console.log("dara from update password",data)
              if(data.errors)
              {
                alert("Password must contain atleat 4 charactrs")
              }
              else if(data.msg==='success')
              {
                window.location="http://localhost:3000/";
              }
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
            .then((res)=>res.json())
            .then((data)=>{
              console.log("data in add expense",data);
              if(data.msg==="success")
              {
                alert("expense Added successfullly");
              }
              else if(data.errors)
              {
                alert("Eventname must be string,amount must be numaric ")
              }
              else
              {
                alert("Some thing went wrong");
              }
            })

   }
 }
 export function Add_Group(obj)
 {
   return(dispatch)=>{
    console.log("i am update pas function",obj)
    fetch('http://localhost:5000/addgroup/addgroup', {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    'Content-Type': 'application/json',
                    'authorization':localStorage.getItem('authorization')
                }
            })
            .then((res)=>res.json())
            .then((data)=>{
              console.log("data in Add_Group",data)
              if(data.msg==='success')
              {
                alert("group added succesfully")
              }
              else if(data.errors)
              {
                 alert("Group Name Should have minimum 4 characters")
              }
              else
              {
                alert("something went wrong")
              }
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
 export function getDetails(id)
 {
  return(dispatch)=>{
    fetch('http://localhost:5000/details/details/'+id)
      .then((res) => res.json())
      .then((data) => {
          console.log("data in to expanses",data);
          dispatch(load_details(data));
      });
  }
 }
 export function getActivities(id)
 {
  return(dispatch)=>{
    fetch('http://localhost:5000/acts/acts/'+id)
      .then((res) => res.json())
      .then((data) => {
          console.log("data in getActivities",data);
          dispatch(load_activities(data));
      });
  }
 }
 export function update_amount(obj)
 {
  return(dispatch)=>{
    console.log("i am update pas function",obj)
    fetch('http://localhost:5000/update_amount/update_amount', {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    'Content-Type': 'application/json',
                    'authorization':localStorage.getItem('authorization')
                }
            })
            .then((res)=>res.json())
            .then((data)=>{
              
            })

   }
 }
 //method to get overall payment user has to recieved
 export function getCredits(id)
 {
  return(dispatch)=>{
    fetch('http://localhost:5000/account_credits/account_credits/'+id)
      .then((res) => res.json())
      .then((data) => {
          console.log("data in getCredits",data[0]);
          dispatch(load_credits(data[0]));
      });
  }
 }
 //method to get overall payment user has to pay to other
 export function getDebits(id)
 {
  return(dispatch)=>{
    fetch('http://localhost:5000/account_debits/account_debits/'+id)
      .then((res) => res.json())
      .then((data) => {
          console.log("data in getDebits",data[0]);
          dispatch(load_debits(data[0]));
      });
  }
 }
export const { load_users,load_frds,load_expanse,load_to_expanse,load_details,load_group_names,load_group_members,load_activities,load_credits,load_debits} = priceSlice.actions;
export default priceSlice.reducer;