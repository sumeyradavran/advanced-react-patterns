// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import React from 'react'
import {Switch} from '../switch'

const ToggleContext = React.createContext()
function Toggle({onToggle, children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  const value = [on, toggle]
  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  )
}

function useToggleContext(){
  const context = React.useContext(ToggleContext)
  if(!context){
    throw Error ("m")
  }
  return context
}
function ToggleOn({children}) {
  const [on] = useToggleContext()
  return on ? children : null
}

// 🐨 do the same thing to this that you did to the ToggleOn component
function ToggleOff({children}) {
  const [on] = useToggleContext()

  return on ? null : children
}

// 🐨 get `on` and `toggle` from the ToggleContext with `useContext`
function ToggleButton(props) {
  const [on, toggle] = useToggleContext()

  return <Switch on={on} onClick={toggle} {...props} />
}

const App = () => <ToggleButton />

export default App

/*
eslint
  no-unused-vars: "off",
*/
