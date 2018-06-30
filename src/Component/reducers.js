
export function airport_details(state={
  airport_details: [],
  airportsname: [],
  filter: [],
  fetching: false,
  fetched: false,
  error: null,
},action)
{
   switch (action.type){
     case "FETCH_DETAILS": {
       return {...state, airportsname: action.payload}
     }
     case "FETCH_DETAILS_REJECTED":{
       return {...state, fetching:false,error: action.payload}
     }
     case "FETCH_DETAILS_FILTER":{
       return {...state, filter: action.payload}
     }
     case "FETCH_DETAILS_FULFILLED":{
       return {
         ...state,
         fetching: false,
         fetched: true,
         airport_details: action.payload,
       }
     }
     default:
      return state;
   }

}

export  function available_flight(state={
  flights: [],
  trips: ' ',
  fetching: false,
  fetched: false,
  sort: false,
  error: null
},action){
  switch (action.type){
    case "TRIPS_DETAILs": {
      return {...state,fetched: true, trips:action.payload}
    }
    case "FETCHED_FALSE":
    {
      return {...state, fetched: false}
    }
    case "FETCH_FLIGHTS_REJECTED":{
      return {...state, fetching:false,error: action.payload}
    }
    case "FETCH_FLIGHTS_FULFILLED":{
      return {
        ...state,
        fetching: false,
        sort: true,
        flights: action.payload,
      }
    }
    case "SORT_FALSE":
    {
      return {...state, sort: false}
    }

    default:
     return state;
  }
}

export function addContact(state={
  bookFlight: '',
  added: false
},action){

  switch (action.type) {
    case "ADD_CONTACT_FULFIELD":
      return {...state,added: true,bookFlight: action.payload}
    case "ADDED_FALSE":
      return {...state,added: false}
    default:
      return state;
  }

}

const initialState3 = { nonStop:false,
                        oneStop:false,
                        twoStop:false,
                        filter:true,
                        minPrice:'',
                        maxPrice:'',
                        airlines: [],
                        economy:false,
                        business:false,
                        first:false,
                        price1:false,
                        price2:false,
                        price3:false,
                        morning:false,
                        afternoon:false,
                        evening:false
                      }

export function FilterOption(state=initialState3,action){
  switch (action.type) {
    case "FILTER_FALSE":{
      return {...state, filter:false}
    }
    case "SET_NON_STOP":{
      return {...state, nonStop:action.payload,filter:true}
    }
    case "SET_ONE_STOP":{
      return {...state, oneStop:action.payload,filter:true}
    }
    case "SET_TWO_STOP":{
      return {...state, twoStop:action.payload,filter:true}
    }
    case "SET_MIN_PRICE":{
      return {...state, minPrice:action.payload,filter:true}
    }
    case "SET_MAX_PRICE":{
      return {...state, maxPrice:action.payload,filter:true}
    }
    case "SET_ECONOMY":{
      return {...state, economy:action.payload,filter:true}
    }
    case "SET_BUSINESS":{
      return {...state, business:action.payload,filter:true}
    }
    case "SET_FIRST":{
      return {...state, first:action.payload,filter:true}
    }
    case "SET_AIRLINES":{
      let list = state.airlines;
      return {...state, airlines:[...list, action.payload],filter:true}
    }
    case "REMOVE_AIRLINES":{
      let list = state.airlines;
      return {...state, airlines:[...list.slice(0,action.payload), ...list.slice(action.payload+1)],filter:true}
    }
    case "SET_PRICE1":{
      return {...state, price1:action.payload,filter:true}
    }
    case "SET_PRICE2":{
      return {...state, price2:action.payload,filter:true}
    }
    case "SET_PRICE3":{
      return {...state, price3:action.payload,filter:true}
    }
    case "SET_MORNING":{
      return {...state, morning:action.payload,filter:true}
    }
    case "SET_AFTERNOON":{
      return {...state, afternoon:action.payload,filter:true}
    }
    case "SET_EVENING":{
      return {...state, evening:action.payload,filter:true}
    }
    default:{
      return state;
    }
  }
}
