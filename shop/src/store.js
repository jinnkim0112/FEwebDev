import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : {name : 'kim', age : 20},
  reducers : {
    changeName(state){
      state.name = 'park'
    },
    changeAge(state, how){
      state.age += how.payload
    }
  }
})

export let { changeName, changeAge} = user.actions

let stock = createSlice({
  name : 'stock',
  initialState : [10, 11, 12]
})

let cartData = createSlice({
  name : 'cartData',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    incCnt(state, action){
      let imsi = state.findIndex(x=>x.id==action.payload)
      state[imsi].count++
    },
    addCart(state, action){
      let imsi = state.findIndex(x=>x.id==action.payload.id)
      imsi != -1 ? state[imsi].count++ : state.push(action.payload)
    },
    decCnt(state, action){
      let imsi = state.findIndex(x=>x.id==action.payload)

      if(--state[imsi].count == 0) state.splice(imsi, 1)
    }
  }
})

export let { incCnt, decCnt, addCart } = cartData.actions

let watch = createSlice({
  name : 'watch',
  initialState : [],
  reducers : {
    watchingID(state, action){
      let imsi = state.findIndex(x=>x.id==action.payload)
      
      if(imsi != -1) state.splice(imsi, 1)
      state.push(action.payload)
    }
  }
})

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    cartData : cartData.reducer
  }
}) 