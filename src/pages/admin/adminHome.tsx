import img from '../../assets/white-burger-3.jpg';
import RoundButton from "../../components/roundButton.tsx";
import {useEffect, useState} from "react";
import axios from "axios";


interface Burger {
    id:string,
    name:string,
    image:string,
    featured:boolean,
    price:number
}


function AdminHome() {
    const [burgerList,setBurgerList] = useState<Burger[]>([]);

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredBurgerList, setFilteredBurgerList] = useState<Burger[]>(burgerList);


    useEffect(() => {
        const fetchData = async () => {
            try {


                const response = await axios.get('http://localhost:3000/api/v1/burgers');
                setBurgerList(response.data.result)
                console.log(response.data.result)
                console.log(burgerList)

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
    const tableData:Burger[] = [
        {
            id: '01546545',
            name: 'Silver',
            image: img,
            price: 2999,
            featured: true,
        }, {
            id: '01546545',
            name: 'Silver',
            image: img,
            price: 2999,
            featured: true,
        }, {
            id: '01546545',
            name: 'Silver',
            image: img,
            price: 2999,
            featured: true,
        }, {
            id: '01546545',
            name: 'huuu',
            image: img,
            price: 2999,
            featured: true,
        }, {
            id: '01546545',
            name: 'anew',
            image: img,
            price: 2999,
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
                    <table className="w-full text-sm overflow-scroll max-h-2 text-left rtl:text-right text-gray-500">
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
                                List
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
                                        {burger.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>

                            ))
                        }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminHome;
