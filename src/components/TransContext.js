const initransaction = [
	{
		amount: 500,
		desc: 'Cash',
	},
	{
		amount: 40,
		desc: 'Book',
	},
	{
		amount: -200,
		desc: 'Camera',
	},
]

export const TransContext = createContext(initransaction)
