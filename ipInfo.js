const isIp = (str) => {
  return Number.isNaN(+str.split('.').join(''))
}

export const ipInfo = (query, callback) => {
  const request = new XMLHttpRequest()
  const endpoint = 'http://ip-api.com/json/'
  const lang = 'pt-BR'
  let fields = 'status,message,country,regionName,city,isp,mobile,proxy,query'
  // fields = 254489

  query = query || ''
  const url = `${endpoint}${query}?fields=${fields}&lang=${lang}`
  request.open('GET', url)
  request.send()

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText)
    if (data.status === 'fail') {
      return callback('Error: unable to find information', undefined)
    }
    callback(undefined, {
      status: data.status,
      proxy: data.proxy,
      mobile: data.mobile,
      query: data.query,
      city: data.city,
      country: data.country,
      isp: data.isp,
    })
  })
}
