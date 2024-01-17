import {ReactNode} from "react";

interface EditModal {
    isOpen:boolean,
    closeEditModal:()=>void,
    children:ReactNode
}

function EditModal({isOpen,closeEditModal,children}:EditModal) {
    return (
        <div
            className={`fixed inset-0 ${
                isOpen ? 'flex' : 'hidden'
            } items-center justify-center`}
        >
            <div className="absolute bg-black opacity-75 inset-0" onClick={closeEditModal}></div>
            <div className="bg-white text-center p-4 rounded-md z-10">
                {children}

            </div>
        </div>
    );
}

export default EditModal;