import React, { createContext, useReducer } from 'react'
import TransReducer from './TransReducer'

const iniTransaction = [
	{ amount: 500, desc: 'Cash' },
	{ amount: -40, desc: 'Book' },
	{ amount: 1000, desc: 'Cash' },
	{ amount: -200, desc: 'Camera' },
]

export const TransContext = createContext(iniTransaction)

const TransProvider = ({ children }) => {
	let [state, dispatch] = useReducer(TransReducer, iniTransaction)

	const addTrans = (trans) => {
		dispatch({
			type: 'ADD',
			payload: { amount: trans.amount, desc: trans.desc },
		})
	}
	return (
		<TransContext.Provider
			value={{
				trans: state,
				addTrans,
			}}
		>
			{children}
		</TransContext.Provider>
	)
}

export default TransProvider
