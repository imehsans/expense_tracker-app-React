import React, { useContext, useState } from 'react'
import { TransContext } from './TransContext'

const Child = () => {
	let transactions = useContext(TransContext)
	let addTrans = useContext(TransContext)
	const [descr, setDescr] = useState('')
	const [amount, setAmount] = useState(0)

	const handleAddation = (e) => {
		e.preventDefault()
		addTrans({
			amount,
			desc: descr,
		})
	}

	return (
		<div>
			<h1 className=" w-full  bg-slate-100 shadow-2xl py-4 text-[28px] md:text-[36px] font-[700] mb-12 text-center text-[#330072]">
				Expense Tracker App
			</h1>
			<div className="container mx-auto w-10/12 md:w-3/4 lg:w-1/2 xl:w-1/3 ">
				<div>
					<p className="text-[20px]">Your Balance:</p>
					<p className="text-[30px] font-[500] text-[#330072]">$1234</p>
				</div>

				<div className="shadow-2xl bg-slate-100 p-6 text-center flex justify-between pb-5">
					<div className="w-1/2">
						<h1 className="uppercase font-bold text-[#330072]">Income</h1>
						<p className="text-[#055353]">$1234</p>
					</div>
					<div className="w-1/2">
						<h1 className="uppercase font-bold text-[#330072]">Expense</h1>
						<p className="text-[#055353]">$1234</p>
					</div>
				</div>
				<div className="mb-6">
					<h1 className="text-[20px] font-bold text-[#330072]">History</h1>
					<hr className="border-[#330072]" />
					<ul>
						{transactions.map((trans) => {
							return (
								<li className="py-2 px-4 shadow-md mt-2  border-r-8 border-red-500 flex justify-between bg-slate-100">
									<p>{trans.desc}</p>
									<p>{trans.amount}</p>
								</li>
							)
						})}
					</ul>
				</div>
				<form className="pb-6" onSubmit={handleAddation}>
					<h1 className="text-[20px] font-bold text-[#330072]">
						Add new transaction
					</h1>
					<hr className="border-[#330072]" />
					<div className="py-2 mt-2">
						<label>Title</label>
						<input
							className="w-full border border-[#330072] focus:outline-2 outline-[#330072] py-1 px-2"
							type="text"
							onChange={(e) => setDescr(e.target.value)}
							placeholder="Enter Title..."
							required
						/>
					</div>
					<div className="py-2 mt-2">
						<label>Amount</label>
						<p>
							<sup>(Negative-Expense/Positive-Income)</sup>
						</p>
						<input
							className="w-full border border-[#330072] focus:outline-2 outline-[#330072] py-1 px-2"
							type="number"
							onChange={(e) => setAmount(e.target.value)}
							placeholder="Enter amount"
							required
						/>
					</div>
					<input
						type="submit"
						className=" my-2 w-full hover:bg-[#330072] pt-2 pb-1 bg-violet-800 text-white"
						value="Add Transaction"
					/>
				</form>
			</div>
		</div>
	)
}

export default Child
