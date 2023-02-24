'use strict'
import { ipInfo } from './ipInfo.js'

ipInfo('', (error, response) => {
  const ipCard = document.querySelector('.ip')
  const vpnCard = document.querySelector('.vpn')
  const mobileCard = document.querySelector('.mobile')
  const cityCard = document.querySelector('.city')
  const countryCard = document.querySelector('.country')
  const ispCard = document.querySelector('.isp')
  if (error) {
    console.log(error)
  } else {
    ipCard.textContent = response.query
    console.log(response)
    ipCard.textContent = `Ip: ${response.query}`

    if (response.proxy) {
      vpnCard.textContent += 'Você está usando vpn ou proxy.'
    } else {
      vpnCard.textContent += 'Você não está usando vpn ou proxy.'
    }
    if (response.mobile) {
      mobileCard.textContent += 'Você acessou o site através de um smartphone'
    } else {
      mobileCard.textContent += 'Você acessou o site através de um computador'
    }
    countryCard.textContent = `Você está em ${response.country}`
    cityCard.textContent = `Sua cidade é ${response.city}`
    ispCard.textContent = `Seu provedor de internet é ${response.isp}.`
    // console.log(displayText)
  }
})
