import React, { useState } from 'react';
import { text } from './sample';

interface IData {
	id: string;
	date: string;
	passage: string;
	problems: string[];
}

interface IScrollItemProps {
	item: IData;
	onClick: () => void;
}
const data: IData[] = Array.from({ length: 30 }).map((_, i) => ({
	id: `${i + 1}`,
	date: `2023-05-${String(i + 1).padStart(2, '0')}`,
	passage: text,
	problems: Array.from({ length: 10 }).map((_, j) => `Problem ${j + 1} for passage ${i + 1}: 
		A) Option 1 
		B) Option 2 
		C) Option 3 
		D) Option 4`),
}));



const ScrollItem: React.FC<IScrollItemProps> = ({ item, onClick }) => {
	return (
		<div onClick={onClick} className="mx-4 cursor-pointer bg-blue-700">
			<div className="bg-dark-navy-blue text-medium-sky-blue h-[100px] flex items-center">
				<h2>{item.date}</h2>
			</div>
		</div>
	);
};




function App() {
	const [selectedItem, setSelectedItem] = useState<IData>(data[27]); // Assume today is 2023-05-28
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);

	const toggleDropdown = () => setDropdownIsOpen(!dropdownIsOpen);

	return (
		<div className="h-fit bg-gray-200 flex flex-col">
			<header className="p-4 bg-gray-300 shadow-md flex justify-end items-center">
				<div className="relative">
					<button onClick={toggleDropdown} className="bg-blue-500 text-white py-2 px-4 rounded">...</button>
					{dropdownIsOpen && (
						<div className="absolute right-0 w-48 mt-2 py-2 bg-white border rounded shadow-xl">
							<button className="w-full text-center" onClick={() => { setModalIsOpen(true); toggleDropdown() }}>Select Problem</button>
							<button className="w-full text-center" onClick={() => { setModalIsOpen(true); toggleDropdown() }}>Settings</button>
						</div>
					)}
				</div>
			</header>
			<div className="container mx-auto p-4 sm:p-6 lg:p-8">
				<h2 className="text-xl font-bold mb-4 text-center">{selectedItem.date}</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{/* Here you render the passage */}
					<div>
						<h2 className="text-lg font-bold mb-4 bg-yellow-200">Passage</h2>
						<p className="text-gray-800">{selectedItem.passage}</p>
					</div>

					{/* Here you render the problems */}
					<div>
						<h2 className="text-lg font-bold mb-4">Questions</h2>
						{selectedItem.problems.map((problem, index) => (
							<p key={index} className="mb-2">{problem}</p>
						))}
					</div>
				</div>
			</div>


			<div className='flex h-screen items-center' onClick={() => { setModalIsOpen(false) }}>
				{/* <Modal
					isOpen={modalIsOpen}
					onRequestClose={() => setModalIsOpen(false)}
					className="fixed inset-0 flex items-center justify-center z-50 outline-none focus:outline-none"
					overlayClassName="fixed inset-0 bg-black bg-opacity-50"
					contentLabel="Modal"
				>
					<div className="bg-white rounded-lg overflow-auto w-11/12 " onClick={e => e.stopPropagation()}>
						<div className="flex overflow-x-scroll hide-scrollbar">
							{data.map((item, index) => (
								<ScrollItem key={index} item={item} onClick={() => { setSelectedItem(item); setModalIsOpen(false); }} />
							))}
						</div>
					</div>
				</Modal> */}
			</div>

		</div>
	);
};

export default App