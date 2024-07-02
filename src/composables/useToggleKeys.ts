import { ref } from 'vue'

/** Добавить ключ в объект/удалить по повторному нажатию */
export function useToggleKeys() {
  const keys = ref<Record<number, number>>({})

  const toggle = (index: number) => {
    if (keys.value[index]) {
      delete keys.value[index]
      return
    }
    keys.value[index] = index
  }

  return {
    toggle,
    keys,
  }
}
