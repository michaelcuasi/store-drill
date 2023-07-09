import { writable } from "svelte/store";

const defaultSettings = {
  colorScheme: 'dark',
  language: 'en',
  fontSize: 12
}

function createSettingsStore() {
  const {subscribe, set, update} = writable({...defaultSettings})
  return {
    subscribe,
    set,
    update,
    updateSetting: (setting, value) => {
      update((settings) => ({...settings, [setting]: value}))
    },
    toggleColorScheme: () => {
      update((settings) => ({...settings, colorScheme: settings.colorScheme === 'dark' ? 'light' : 'dark'}))
    },
    reset: () => {
      set({...defaultSettings})
    }
  }
}

// const settings = writable({
//   colorScheme: 'dark',
//   language: 'en',
//   fontSize: 12
// }, 

// (set) => {
//   const timer = setTimeout(() => {
//     set({
//       colorScheme: 'light',
//       language: 'en',
//       fontSize: 12
//     })
//   }, 1000)
//   // console.log('from 0 to 1')
//   return () => {
//     clearTimeout(timer)
//     // console.log('from 1 to 0')
//   }}
// )

export default createSettingsStore()