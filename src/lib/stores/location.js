import { readable } from "svelte/store";

const location = readable(null, (set) => {
  let watchId
  if(navigator.geolocation && navigator.geolocation.watchPosition) {
    watchId = navigator.geolocation.watchPosition(
      (position) => {
        const {latitude, longitude} = position.coords
        console.log(position)
        set({latitude, longitude})
      }, 
      (error) => {
        console.log(error)
        set({error})
      }
    )
  }
  return () => {
    if(navigator.geolocation && navigator.geolocation.watchPosition)
    navigator.geolocation.clearWatch(watchId)
    set(null)
  }
  // if(navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const {latitude, longitude} = position.coords
  //       console.log(position)
  //       set({latitude, longitude})
  //     }, 
  //     (error) => {
  //       console.log(error)
  //       set({error})
  //     }
  //   )
  // }
  // return () => {
  //   set(null)
  // }
})

export default location