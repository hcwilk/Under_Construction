import React from "react";

interface NavProps {
	toggleDropdown: () => void;
	dropdownIsOpen: boolean;
	setShowModal: (show: boolean) => void;
}


export const Nav: React.FC<NavProps> = ({toggleDropdown, dropdownIsOpen, setShowModal}) => {

	return(
		<>
		<header className="p-4 bg-gray-300 shadow-md flex justify-end items-center">
				<div className="relative">
					<button onClick={toggleDropdown} className="bg-blue-500 py-2 px-4 rounded">...</button>
					{dropdownIsOpen && (
						<div className="absolute right-0 w-48 mt-2 py-2 bg-white border rounded shadow-xl">
							<button className="w-full text-center" onClick={() => {toggleDropdown(); setShowModal(true) }}>Select Problem</button>
							<button className="w-full text-center" onClick={() => {toggleDropdown(); setShowModal(true) }}>Settings</button>
						</div>
					)}
				</div>
			</header>
		</>
	)
}