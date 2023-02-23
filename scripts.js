'use strict'

const request = new XMLHttpRequest()
const endpoint = 'http://ip-api.com/json/'
const lang = 'pt-BR'
let fields = 'status,message,country,regionName,city,isp,mobile,proxy,query'
fields = 254489
const url = `${endpoint}?fields=${fields}&lang=${lang}`
request.open('GET', url)
request.send()

request.addEventListener('load', function () {
  const data = JSON.parse(this.responseText)
  console.log(data)
  if (data.proxy) {
    console.log('Você está usando vpn ou proxy.')
  } else {
    console.log('Você não está usando vpn ou proxy.')
  }
  if (data.mobile) {
    console.log('Você acessou o site através de um smartphone.')
  } else {
    console.log('Você acessou o site através de um computador.')
  }
  const displayText = `Seu ip é ${data.query}. Você está em ${data.city}, ${data.regionName}, ${data.country}. Seu provedor de internet é ${data.isp}.`
  console.log(displayText)
})
