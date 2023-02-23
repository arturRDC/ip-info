'use strict'

const request = new XMLHttpRequest()
const url = 'http://ip-api.com/xml/'
request.open('GET', url)

request.addEventListener('load', function () {
  console.log(this.responseText)
})

request.send()
