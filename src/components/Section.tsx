'use client';
import React, { useState } from 'react';
import { sampleText } from '@/data/sample';
import { Modal } from '@/components/Modal';
import { Nav } from '@/components/Nav';
import { Passage } from '@/components/Passage';
import Link from 'next/link';


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
	children?: any;
	problems?: any;
}

interface Question {
	question: string;
	answer: string;
	option1: string
	option2: string
	option3: string
	option4: string
}

interface Problem {
	date: string;
	passage: string;
	questions: Question[];
}

export const Section: React.FC<SectionProps> = ({ children, problems }) => {

	console.log(problems)

	const [showModal, setShowModal] = useState<boolean>(false);
	const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);
	const [selectedProblem, setSelectedProblem] = useState<Problem>(problems[0]);

	console.log(problems)


	const toggleDropdown = () => setDropdownIsOpen(!dropdownIsOpen);
	return (
		<>
		<Nav toggleDropdown={toggleDropdown} dropdownIsOpen={dropdownIsOpen}  setShowModal={setShowModal}/>
	
			
		<div className="container mx-auto p-4 sm:p-6 lg:p-8">
				<h2 className="text-xl font-bold mb-4 text-center">{selectedProblem.date}</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{/* Here you render the passage */}
					<div>
						<h2 className="text-lg font-bold mb-4 bg-yellow-200">Passage</h2>
						{selectedProblem.passage}					
					</div>

					<div>
						<h2 className="text-lg font-bold mb-4">Questions</h2>
						{selectedProblem.questions.map((question, index) => (
							<div key={index}>
								<h3 className="mb-2">{question.question}</h3>
							</div>
						))}
					</div> 
				</div>
			</div>
		




			<div className='flex h-screen items-center' onClick={() => { setShowModal(false) }}>
				<Modal showModal={showModal} setShowModal={setShowModal}>
					 <div className="bg-white rounded-lg overflow-auto w-full " onClick={e => e.stopPropagation()}>
						{problems.map((item: any) => (
							<div className='h-[40px] w-[100px] text-center' onClick={() => { setShowModal(false) }}>
								{item.date}
							</div>
						))}
					</div> 
				</Modal>
				
			</div>
		</>
	)
}