import { toast } from 'vue3-toastify'

export async function copyText(value: string) {
  await navigator.clipboard.writeText(value)
  toast.success('Coppied to clipboard!', {
    autoClose: 2000
  })
}
