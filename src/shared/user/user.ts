import { reactive } from 'vue'

export const user = reactive({
  token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token') as string) : null
})
