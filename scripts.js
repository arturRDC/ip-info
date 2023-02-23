'use strict'
import { ipInfo } from './ipInfo.js'

ipInfo('google.com', (error, response) => {
  const par = document.querySelector('p')
  if (error) {
    console.log(error)
  } else {
    par.textContent = response.query
    console.log(response)

    // if (data.proxy) {
    //   console.log('Você está usando vpn ou proxy.')
    // } else {
    //   console.log('Você não está usando vpn ou proxy.')
    // }
    // if (data.mobile) {
    //   console.log('Você acessou o site através de um smartphone.')
    // } else {
    //   console.log('Você acessou o site através de um computador.')
    // }
    // const displayText = `Seu ip é ${data.query}. Você está em ${data.city}, ${data.regionName}, ${data.country}. Seu provedor de internet é ${data.isp}.`
    // console.log(displayText)
  }
})
