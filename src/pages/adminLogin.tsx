import {ChangeEvent, FormEvent,  useState} from "react";
import {useNavigate} from "react-router-dom";


function AdminLogin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e:ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e:ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = async(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // You would typically handle authentication logic here
        console.log(`Login clicked with username: ${username} and password: ${password}`);
        setPassword('')
        setUsername('')
        navigate('/manage')
    };

    return (
        <div className={"bg-primary h-[100vh] p-5 text-center"} >
            <div className={"text-5xl text-zinc-200 p-5"}>Login</div>
            <form className={"m-5 text-zinc-200"} style={{display: 'inline-block', textAlign: 'left'}} onSubmit={handleLogin}>
                <label className={"py-5"} htmlFor="username">Username:</label>
                <br/>
                <input
                    className={"h-[2rem] my-3 w-full text-black p-3"}
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
                <br/>
                <label htmlFor="password">Password:</label>
                <br/>
                <input
                    className={"h-[2rem] my-3 w-full text-black p-3"}
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <br/>
                <br/>
                <button type="submit" className={"bg-quinary p-3 w-full rounded-2xl"} >
                    Login
                </button>
            </form>
        </div>
    );


}

export default AdminLogin;