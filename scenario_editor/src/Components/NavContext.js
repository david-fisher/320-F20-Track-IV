import React, { createContext, useReducer } from 'react'
import {NavDataEditor} from "./NavDataEditor"

export const NavContext = createContext()

const reducer = (state, pair) => ({ ...state, ...paisr })

export function NavProvider(props) {
	const [state, update] = useReducer(reducer, NavDataEditor)

	return (
		<NavContext.Provider value={{ state, update }}>
			{props.children}
		</NavContext.Provider>
	)
}