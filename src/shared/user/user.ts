import { reactive } from 'vue'

export const user = reactive({
  token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token') as string) : null
})

export const setToken = (token: string) => {
  localStorage.setItem('token', JSON.stringify(token))
  user.token = token
}

export const removeToken = () => {
  localStorage.removeItem('token')
  user.token = null
}

export const refreshToken = async () => {
  // refresh token
  const result = await fetch(import.meta.env.VITE_API_URL + '/auth/refresh', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    credentials: 'include'
  })
  const data = await result.json()
  console.log(data)
}
