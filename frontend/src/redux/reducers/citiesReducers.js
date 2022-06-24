const initialState = {
    cities: [],
    filterCities: [],
    oneCity: []

}

const citiesReducer = (state = initialState, action) => {

    switch(action.type) {
        case "ALLCITIES" :
            return {
                ...state,
                cities: action.payload,
                filterCities: action.payload
            }
        case "ONECITY":
            return {
                ...state,
                oneCity: action.payload
            }    
        case "FILTERCITIES":
            return{
                ...state,
                filterCities: state.cities.filter(city=>city.name.toLowerCase().startsWith(action.payload.toLowerCase().trim()))
            }
        default: return state
    }
}
export default citiesReducer