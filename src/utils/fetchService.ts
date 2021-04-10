import axios from 'axios'

const ACCESS_USER: string = process.env.NEXT_PUBLIC_ACCESS_USER
const ACCESS_TOKEN: string = process.env.NEXT_PUBLIC_ACCESS_TOKEN

const fetchService = async (url: string, method: string = 'GET', data: any | null = null) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/vnd.shipit.v4',
    'X-Shipit-Email': ACCESS_USER,
    'X-Shipit-Access-Token': ACCESS_TOKEN
  }

  const objectRequest: any = { method, url, data, headers }
  const response = await axios(objectRequest)

  return response?.data
}

export default fetchService
