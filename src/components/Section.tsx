'use client';
import React, { useState } from 'react';
import { sampleText } from '@/data/sample';
import { Modal } from '@/components/Modal';
import { Nav } from '@/components/Nav';
import { Passage } from '@/components/Passage';


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
	passage: sampleText,
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



interface SectionProps {
	title: string;
	children?: any;
	dataa?: any;
}

export const Section: React.FC<SectionProps> = ({ children, title, dataa }) => {

	console.log('front end?',dataa)

	const [selectedItem, setSelectedItem] = useState<IData>(data[27]); // Assume today is 2023-05-28
	const [showModal, setShowModal] = useState<boolean>(false);
	const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);

	const toggleDropdown = () => setDropdownIsOpen(!dropdownIsOpen);
	return (
		<>
		<Nav toggleDropdown={toggleDropdown} dropdownIsOpen={dropdownIsOpen}  setShowModal={setShowModal}/>
		
			 {/* <Passage selectedItem={selectedItem}/> */}
			 <>
			 	{
				dataa.values.map((item:any, index:any) => (
				<>
					{item}
				</>
				))}

			 </>



			<div className='flex h-screen items-center' onClick={() => { setShowModal(false) }}>
				<Modal showModal={showModal} setShowModal={setShowModal}>
					 <div className="bg-white rounded-lg overflow-auto w-full " onClick={e => e.stopPropagation()}>
						<div className="flex overflow-x-scroll hide-scrollbar">
							{data.map((item, index) => (
								<ScrollItem key={index} item={item} onClick={() => { setSelectedItem(item); setShowModal(false); }} />
							))}
						</div>
					</div> 
				</Modal>
				
			</div>
		</>
	)
}