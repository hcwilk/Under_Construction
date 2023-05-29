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
	problems?: any;
}

export const Section: React.FC<SectionProps> = ({ children, title, problems }) => {

	const [showModal, setShowModal] = useState<boolean>(false);
	const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);

	console.log(problems)


	const toggleDropdown = () => setDropdownIsOpen(!dropdownIsOpen);
	return (
		<>
		<Nav toggleDropdown={toggleDropdown} dropdownIsOpen={dropdownIsOpen}  setShowModal={setShowModal}/>
		
			 {/* <Passage selectedItem={selectedItem}/> */}

			
					{/* <div>
						<h2 className="text-lg font-bold mb-4">Questions</h2>
						{selectedItem.problems.map((problem, index) => (
							<p key={index} className="mb-2">{problem}</p>
						))}
					</div>   */}
		
			 <>
		


			 </>



			<div className='flex h-screen items-center' onClick={() => { setShowModal(false) }}>
				<Modal showModal={showModal} setShowModal={setShowModal}>
					 <div className="bg-white rounded-lg overflow-auto w-full " onClick={e => e.stopPropagation()}>
						
					</div> 
				</Modal>
				
			</div>
		</>
	)
}