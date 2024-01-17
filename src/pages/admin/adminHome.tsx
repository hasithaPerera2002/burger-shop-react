import img from '../../assets/white-burger-3.jpg';
import RoundButton from "../../components/roundButton.tsx";
import {useEffect, useState} from "react";
import {BsTrash} from "react-icons/bs";
import {MdOutlineModeEdit} from "react-icons/md";
import DeleteModal from "../helpers/deleteModal.tsx";
import EditModal from "../helpers/editModal.tsx";


interface Burger {
    id: string,
    name: string,
    image: string,
    featured: boolean,
    offered: boolean
    price: number
}

// const Modal = ({ isOpen, closeDeleteModal, children }) => {
//     return (
//         <div
//             className={`fixed inset-0 ${
//                 isOpen ? 'flex' : 'hidden'
//             } items-center justify-center`}
//         >
//             <div className="absolute bg-black opacity-75 inset-0" onClick={closeDeleteModal}></div>
//             <div className="bg-white text-center p-4 rounded-md z-10">
//                 {children}
//                 <button className="mt-4 bg-red-600 text-center text-white p-2 rounded-md" onClick={closeDeleteModal}>
//                     DELETE
//                 </button>
//             </div>
//         </div>
//     );
// };

function AdminHome() {
    const [burgerList, setBurgerList] = useState<Burger[]>([]);

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredBurgerList, setFilteredBurgerList] = useState<Burger[]>(burgerList);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
    const [selectedBurger, setSelectedBurger] = useState<Burger>()
    const [isUpdate, setIsUpdate] = useState<boolean>(true)

    const openDeleteModal = (burger: Burger) => {
        setSelectedBurger(burger);
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {

        setIsDeleteModalOpen(false);
    };
    const openEditModal = (burger: Burger) => {
        setSelectedBurger(burger);
        setIsEditModalOpen(true);
    }
    const closeEditModal = () => {
        setIsEditModalOpen(false)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {


                // const response = await axios.get('http://localhost:3000/api/v1/burgers');
                // setBurgerList(response.data.result)
                // console.log(response.data.result)
                // console.log(burgerList)

            } catch (e) {
                console.log('catched err')


            }


        }
        fetchData()


    }, []);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredBurgerList(burgerList);
        } else {
            const filteredList = burgerList.filter((burger) =>
                burger.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredBurgerList(filteredList);
        }
    }, [searchTerm, burgerList]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    useEffect(() => {
        setBurgerList((prevState) => [...prevState, ...tableData]);
    }, []);
    const tableData: Burger[] = [
        {
            id: '01546545',
            name: 'Silver',
            image: img,
            price: 2999,
            offered: false,
            featured: true,
        }, {
            id: '01546545',
            name: 'Silver',
            image: img,
            price: 2999,
            offered: false,
            featured: true,
        }, {
            id: '01546545',
            name: 'Silver',
            image: img,
            price: 2999,
            offered: false,
            featured: true,
        }, {
            id: '01546545',
            name: 'huuu',
            image: img,
            offered: true,
            price: 2999,
            featured: true,
        },
        {
            id: '01546545',
            name: 'anew',
            image: img,
            price: 2999,
            offered: true,
            featured: true,
        },

    ];


    return (
        <div className="bg-tertiary  h-screen w-full">
            <div className="text-black text-3xl text-center  p-3 underline">Manage Burgers</div>
            <div className="mt-3 mx-6 mb-2  relative  h-[80vh] ">
                <div className={"flex justify-between px-12 h-14 w-full"}>
                    <div>
                        <RoundButton color={"red-400"} fontColor={"black"} text={"add new"}/>
                    </div>
                    <div className={"flex gap-10 items-baseline"}>
                        <div className="relative ">
                            <input
                                id="searchInput"
                                name="username"
                                type="text"
                                onChange={handleSearchChange}
                                className="border-b px-2 border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"

                            />
                        </div>
                        <RoundButton color={"blue-400"} fontColor={"black"} text={"search"}/>
                    </div>
                </div>
                <div className=" overflow-y-scroll h-full relative shadow-md">
                    <table className="w-full text-sm overflow-y-scroll max-h-2 text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 align-top">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3 align-top">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 align-top">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3 align-top">
                                Featured
                            </th>
                            <th scope="col" className="px-6 py-3 align-top">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3 align-top">
                                Offered
                            </th>

                            <th scope="col" className="px-6 py-3 align-top">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody id={"tableBody"}>
                        {
                            filteredBurgerList.map((burger, index) => (
                                <tr key={index} className=" border-b text-gray-900 ">
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                                        {burger.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {burger.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        <img src={burger.image} className={"object-cover h-24 w-24 "} alt=""/>
                                    </td>
                                    <td className="px-6 py-4">
                                        {burger.featured ?
                                            <div
                                                className={"bg-green-400 text-center w-20 p-1 rounded font-normal"}>YES</div>
                                            :
                                            <div
                                                className={"bg-red-400 text-center w-20 p-1 rounded font-normal"}>NO</div>}
                                    </td>
                                    <td className="px-6 py-4">
                                        {burger.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {burger.offered
                                            ?
                                            <div className={"bg-green-400  text-center w-20 p-1 rounded font-normal"}>
                                                YES
                                            </div> :
                                            <div className={"bg-red-400 bg text-center w-20 p-1 rounded font-normal"}>
                                                NO
                                            </div>
                                        }
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className={"flex gap-5 text-"} key={burger.id}>
                                            <button className={"bg-red-500 rounded p-2"}
                                                    onClick={() => openDeleteModal(burger)}>
                                                <BsTrash size={"1rem"}/>
                                            </button>
                                            <button data-modal-target="popup-modal" data-modal-toggle="popup-modal"
                                                    className={"bg-yellow-500 rounded p-2"}
                                                    onClick={() => {
                                                        openEditModal(burger)
                                                        setIsUpdate(true)
                                                    }}>
                                                <MdOutlineModeEdit size={"1rem"}/>
                                            </button>

                                        </div>
                                    </td>
                                </tr>

                            ))
                        }

                        </tbody>
                    </table>
                </div>
            </div>
            {/*models*/}

            <DeleteModal isOpen={isDeleteModalOpen} closeDeleteModal={closeDeleteModal}>
                <h2 className="text-lg font-bold mb-2">Delete Burger</h2>
                <p>Do you want to delete the burger with id {selectedBurger?.id}</p>
            </DeleteModal>
            <EditModal isOpen={isEditModalOpen} closeEditModal={closeEditModal}>
                <div className="max-w-md mx-auto">
                    <form className="bg-white  shadow-md rounded px-5 pt-6 pb-8 mb-4">
                        {isUpdate
                            ?
                            <div className={"p-2 text-2xl underline my-3 font-thin"}>Update Form</div>
                            :
                            <div className={"p-2 text-2xl underline my-3 font-thin"}>Add Item Form</div>
                        }
                        {isUpdate && <div className="m-4 px-4 text-center ">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
                                id
                            </label>
                            <input type="text" className={"text-center"} value={selectedBurger?.id} readOnly/>
                        </div>}
                        <div className="m-4 px-4 text-center ">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="name"
                                required
                            />
                        </div>
                        <div className="m-4 px-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                                image
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="image"
                                type="file"

                            />
                        </div>
                        <div className="m-4 px-4 text-center ">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="featured">
                                featured
                            </label>
                            <input
                                className="mr-2 leading-tight focus:outline-none"
                                id="featured-yes"
                                type="radio"
                                name="featured"
                                value="yes"
                                required
                            />
                            <label className="text-sm" htmlFor="featured-yes">
                                Yes
                            </label>
                            <input
                                className="ml-4 mr-2 leading-tight focus:outline-none"
                                id="featured-no"
                                type="radio"
                                name="featured"
                                value="no"
                                required
                            />
                            <label className="text-sm" htmlFor="featured-no">
                                No
                            </label>
                        </div>
                        <div className="m-4 px-4 text-center ">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                price
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="price"
                                type="number"
                                placeholder="price"
                                required
                            />
                        </div>
                        <div className="m-4 px-4 text-center ">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="offered">
                                offered
                            </label>
                            <input
                                className="mr-2 leading-tight focus:outline-none"
                                id="offered-yes"
                                type="radio"
                                name="offered"
                                value="yes"
                                required
                            />
                            <label className="text-sm" htmlFor="offered-yes">
                                Yes
                            </label>
                            <input
                                className="ml-4 mr-2 leading-tight focus:outline-none"
                                id="offered-no"
                                type="radio"
                                name="offered"
                                value="no"
                                required
                            />
                            <label className="text-sm" htmlFor="offered-no">
                                No
                            </label>
                        </div>
                        <div className="m-4 px-4">
                            <button
                                className={`w-full ${isUpdate ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                                type="button"
                            >
                                {isUpdate ? ' Update Item':'Add Item'}
                            </button>
                        </div>
                    </form>
                </div>
            </EditModal>

            {/*models end*/}
        </div>
    );

}

export default AdminHome;
