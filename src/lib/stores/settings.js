import { writable } from "svelte/store";

const settings = writable({
  colorScheme: 'dark',
  language: 'en',
  fontSize: 12
}, 
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
)

export default settings