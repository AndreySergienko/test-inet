import { ref } from 'vue'

/** Добавить ключ в объект/удалить по повторному нажатию */
export function useToggleKeys() {
  const keys = ref<Record<number, number>>({})

  const toggle = (index: number) => {
    if (keys.value[index] || typeof keys.value[index] === 'number') {
      delete keys.value[index]
      return
    }
    console.log(keys)
    keys.value[index] = index
  }

  return {
    toggle,
    keys,
  }
}
