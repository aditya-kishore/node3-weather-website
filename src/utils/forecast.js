const request = require('request')

const forecast = (latitude,longitude,callback) =>{
    const url='http://api.weatherstack.com/current?access_key=a828ec5c5ae852316e16a187c71d1c62&query='+latitude+','+longitude+'&units=m'

    request({url,json:true},(error,{body}={})=>{
        if(error)//for low level errors like no internet connection
    {
        callback('Unable to connect to weather service!',undefined)
    }
    else if(body.error)//for invalid url
    {
        callback('Unable to find the location!',undefined)
    } 
    else
    {
        callback(undefined,"it is currently "+body.current.temperature+" and it feels like "+ body.current.feelslike)
    }
    })
}

module.exports = forecast