const url = 'https://api.openweathermap.org/data/2.5/'
const key = 'bdf178f4b1ab8ef91d4b8ab3519927ed'


const setQuery = (e) => {
    if(e.keyCode == '13')
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })

    .then(displayResult)
}

const displayResult = (result) => {
    let city =document.querySelector('.city')
    city.innerText= `${result.name}, ${result.sys.country}`


    let temp = document.querySelector('.temp')
    temp.innerText= `${result.main.temp}`

}
const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)
