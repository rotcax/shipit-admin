import axios from 'axios'

const fetchService = async (url: string, method: string = 'GET', data: any | null = null, auth: any | null = null) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/vnd.shipit.v4'
  }

  if(auth) {
    headers['X-Shipit-Email'] = auth.email
    headers['X-Shipit-Access-Token'] = auth.accessToken
  }

  const objectRequest: any = { method, url, data, headers }
  const response = await axios(objectRequest)

  return response?.data
}

export default fetchService
