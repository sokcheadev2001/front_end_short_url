import { reactive } from 'vue'

export const user = reactive(
  localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null
)
