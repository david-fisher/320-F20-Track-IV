// ********************************************
// OLD TEST FILE.
// Do not think we will need this file with current Nav setup
// ********************************************
import React, { createContext, useReducer } from 'react'
import {NavDataEditor} from "./NavDataEditor"

export const NavContext = createContext()

const reducer = (state, pair) => ({ ...state, ...pair })

export function NavProvider(props) {
	const [state, update] = useReducer(reducer, NavDataEditor)

	return (
		<NavContext.Provider value={{ state, update }}>
			{props.children}
		</NavContext.Provider>
	)
}