function WeatherMap() {
    return weather => {
        fetch('https://api.openweathermap.org/data/2.5/weather?')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchSuccess);
            
        })
        .catch(error => {
            dispatch(fetchError);
        })
    }
}