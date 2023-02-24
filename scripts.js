'use strict'
import { ipInfo } from './ipInfo.js'

const displayInfo = (query) => {
  ipInfo(query, (error, response) => {
    const ipCard = document.querySelector('.ip')
    const vpnCard = document.querySelector('.vpn')
    const mobileCard = document.querySelector('.mobile')
    const cityCard = document.querySelector('.city')
    const countryCard = document.querySelector('.country')
    const ispCard = document.querySelector('.isp')
    const errorCard = document.querySelector('.error')
    if (error) {
      ipCard.textContent = ''
      vpnCard.textContent = ''
      mobileCard.textContent = ''
      cityCard.textContent = ''
      countryCard.textContent = ''
      ispCard.textContent = ''
      errorCard.textContent = error
    } else {
      errorCard.textContent = ''
      ipCard.textContent = response.query
      ipCard.textContent = `Ip: ${response.query}`

      if (response.proxy) {
        vpnCard.textContent = 'Você está usando vpn ou proxy'
      } else {
        vpnCard.textContent = 'Você não está usando vpn ou proxy'
      }
      if (response.mobile) {
        mobileCard.textContent = 'Você acessou o site através de um smartphone'
      } else {
        mobileCard.textContent = 'Você acessou o site através de um computador'
      }
      if (query) {
        countryCard.textContent = `O endereço procurado está no país: ${response.country}`
        cityCard.textContent = `O endereço procurado está na cidade: ${response.city}`
        ispCard.textContent = `O provedor de internet do endereço procurado é: ${response.isp}.`
      } else {
        countryCard.textContent = `Você está no país: ${response.country}`
        cityCard.textContent = `Sua cidade é: ${response.city}`
        ispCard.textContent = `Seu provedor de internet é: ${response.isp}`
      }
    }
  })
}
displayInfo('')

const searchButton = document.querySelector('#search-btn')
const queryInput = document.querySelector('#query-input')

searchButton.addEventListener('click', () => {
  displayInfo(queryInput.value)
})

queryInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') displayInfo(queryInput.value)
})
