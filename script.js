const api_url= "https://api.weatherapi.com/v1/current.json?key=c19407c1b3424d1d90033106230904&q=India&aqi=no"
const form= document.querySelector("form")
const locationinput=document.querySelector('[data-location]')
const temperature=document.querySelector('[data-temperature]')
const temperaturetext=document.querySelector('[data-temperature-text]')
const date=document.querySelector('[data-date]')
const img=document.querySelector('[data-img]')

form.addEventListener(submit, async(e)=>{
    e.preventDefault()
    getTheWeather()
}
)
const getTheWeather= async()=>{
    const days =[]
    const otherdays =[]
    const location= locationinput.value

    await fetch(api_url + '&q=${location}')
    .then(response => response.json)
    .then((forcast,location)=>{
        forcast.forcastday.map(item=>{
            days.push({
                icon: item.day.condition.icon,
                text: item.day.condition.text,
                temp: Math.round(item.day.avgtemp_c),
                country: location.country,
                time: location.localtime.split('')[1],
                day: new Date(item.date)toLocalDatestring('en-GB', {weekday: 'long'})
            })
        })
    } ) 

    const firstDate=[0]
    temperature.innerHTML=firstDate.temp
    temperaturetext.innerHTML= firstDate.text
}




document.getElementById("button").addEventListener(click, function(){

})