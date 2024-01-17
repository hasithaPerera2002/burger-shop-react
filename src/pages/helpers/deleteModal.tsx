import {ReactNode} from "react";

interface ModalProps {
    isOpen: boolean;
    closeDeleteModal: () => void;
    children: ReactNode;
}




function DeleteModal ({ isOpen, closeDeleteModal, children }:ModalProps) {
    return (
        <div
            className={`fixed inset-0 ${
                isOpen ? 'flex' : 'hidden'
            } items-center justify-center`}
        >
            <div className="absolute bg-black opacity-75 inset-0" onClick={closeDeleteModal}></div>
            <div className="bg-white text-center p-4 rounded-md z-10">
                {children}
                <button className="mt-4 bg-red-500 text-center text-white p-2 rounded-md" onClick={closeDeleteModal}>
                    DELETE
                </button>
            </div>
        </div>
    );
}

export default DeleteModal;