import React from "react";

interface ModalProps {
	showModal: boolean;
	setShowModal: (show: boolean) => void;
	children?: any;
}

export const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, children }) => {

	return (
		<>
		  {showModal ? (
			<div className="relative z-30">
			  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
			  <div className="fixed z-10 inset-0 overflow-y-auto">
				<div className="flex items-end justify-center min-h-full p-4 text-center md:items-center md:p-0">
				  <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all md:my-8 md:max-w-5xl md:w-full">
				  	{children}
				  </div>
				</div>
			  </div>
			</div>
		  ) : null}
		</>
	  );
	  
}
