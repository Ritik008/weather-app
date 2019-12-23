const request = require('request')

const forecast = (latitude, longitude, callback)=> {
    const url = "https://api.darksky.net/forecast/dd783ce7b32ad45f3b0d45356da059a2/"+latitude+","+longitude
    request({url, json: true}, (err, { body })=> {
        if(err) {
            callback("Unable to access weather services!", undefined)
        }else if(body.error) {
            callback("Unable to find the location. Try another request!", undefined)
        }else {
            callback(undefined, body.daily.data[0].summary + " It is currently "+body.currently.temperature+" degree out. This high today is " + body.daily.data[0].temperatureHigh + " with a low of "+body.daily.data[0].temperatureLow+". There is a "+body.currently.precipProbability+"% chance of rain.")
        }
    })
}

module.exports = forecast