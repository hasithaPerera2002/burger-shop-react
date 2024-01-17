import img from '../../assets/white-burger-3.jpg';
import RoundButton from "../../components/roundButton.tsx";
import {useCallback, useEffect, useState} from "react";
import {BsTrash} from "react-icons/bs";
import {MdOutlineModeEdit} from "react-icons/md";
import EditModal from "../helpers/editModal.tsx";
import axios from "axios";
import Swal from 'sweetalert2'


interface Burger {
    id: string,
    name: string,
    image: string,
    featured: boolean,
    offered: boolean
    price: number
}


function AdminHome() {
    const [burgerList, setBurgerList] = useState<Burger[]>([]);

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredBurgerList, setFilteredBurgerList] = useState<Burger[]>([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
    const [selectedBurger, setSelectedBurger] = useState<Burger >(
        {
            id: '',
            name: '',
            price:0,
            featured:false,
            image:'',
            offered:false
            
        }
        
    )
    const [isUpdate, setIsUpdate] = useState<boolean>(true)


    const openEditModal = (burger: Burger) => {
        setSelectedBurger(burger);
        setIsEditModalOpen(true);
    }
    const closeEditModal = () => {
        setIsEditModalOpen(false)
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, type, checked, files} = e.target;


        setSelectedBurger((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : type !== 'file' ? value : files?.[0],
        }));
    };

    const handleDeleteBtn = async () => {

        console.log('called delete button')
        try {
            const response = await axios.delete(`http://localhost:3000/api/v1/burgers?id=${selectedBurger?.id}`);
            if (response.status === 200) {
                await fetchData()

                Swal.fire({
                    title: 'Success!',
                    text: 'Burger deleted successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            } else {

                await Swal.fire({
                    title: 'Error!',
                    text: 'Unexpected error occurred',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } catch (e) {
            console.error('Error deleting burger:', e);
            await Swal.fire({
                title: 'Error!',
                text: 'Failed to delete burger',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }

    };
    //data fetching method
    const fetchData = useCallback(async () => {
        try {


            // const response = await axios.get('http://localhost:3000/api/v1/burgers');
            // setBurgerList(response.data.result)
            // console.log(response.data.result)
            // console.log(burgerList)

        } catch (e) {
            console.log('catched err')
        }


    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isUpdate) {
            const response = await axios.put('http://localhost:3000/api/v1/burgers');
            setBurgerList(response.data.result)
            console.log(response.data.result)
            console.log(burgerList)
        } else {
            const response = await axios.postForm('http://localhost:3000/api/v1/burgers');
            setBurgerList(response.data.result)
            console.log(response.data.result)
            console.log(burgerList)
        }
    };

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

    useEffect(() => {

        fetchData()
        setBurgerList((prevState) => [...prevState, ...tableData]);
        setFilteredBurgerList(prevState => [...prevState, ...burgerList])


    }, [fetchData]);

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
                                                    onClick={() => {
                                                        setSelectedBurger(burger)
                                                        Swal.fire({
                                                            title: `Are you sure to delete ${burger.id}?`,
                                                            text: "You won't be able to revert this!",
                                                            icon: "warning",
                                                            showCancelButton: true,
                                                            confirmButtonColor: "#3085d6",
                                                            cancelButtonColor: "#d33",
                                                            confirmButtonText: "Yes, delete it!"
                                                        }).then((result) => {
                                                            if (result.isConfirmed) handleDeleteBtn();
                                                        })
                                                    }}>
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


            <EditModal isOpen={isEditModalOpen} closeEditModal={closeEditModal}>
                <div className="max-w-md mx-auto">
                    <form className="bg-white  shadow-md rounded px-5 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
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
                            <input

                                type="text" className={"text-center"} value={selectedBurger?.id} readOnly/>
                        </div>}
                        <div className="m-4 px-4 text-center ">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                name
                            </label>
                            <input
                                onChange={handleInputChange}
                                value={selectedBurger?.name}
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
                                onChange={handleInputChange}
                                value={selectedBurger?.image}
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
                                onChange={handleInputChange}
                                checked={selectedBurger?.featured === true}

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
                                onChange={handleInputChange}
                                checked={selectedBurger?.featured === false}
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
                                onChange={handleInputChange}
                                value={selectedBurger?.price}
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
                                onChange={handleInputChange}
                                checked={selectedBurger?.offered === true}

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
                                onChange={handleInputChange}
                                checked={selectedBurger?.offered === false}

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
                                type="submit"
                            >
                                {isUpdate ? ' Update Item' : 'Add Item'}
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
