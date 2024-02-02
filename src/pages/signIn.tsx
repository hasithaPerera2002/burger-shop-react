import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import image1 from '../assets/redman.jpg'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useState} from "react";
import Swal from "sweetalert2";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import { loginUser} from "../api/userHandler.ts";
import {login, logout} from "../state/authReducer.ts";
import axios from "axios";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                burgerBlitz
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const defaultTheme = createTheme();

export default function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    document.title = "Sign In";
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState(
        {
            email: '',
            password: ''
        }
    )
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        try {
            const response = await loginUser(
                formData.email, 
                formData.password
            );
            console.log(response);

            if (response.status == 200) {
                console.log(response.data.result)
                const payload = {
                    token: 'someToken',
                    role: 'someRole',
                };

                dispatch(login(payload));

                await Swal.fire({
                    title: 'Success!',
                    text: 'Sign up success',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                navigate('/home');
            } else {
                dispatch(logout());
                await Swal.fire({
                    title: 'Error!',
                    text: 'Failed signUp | check input values',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } catch (e) {
            if (axios.isAxiosError(e)) {
                // Axios error with a response
                await Swal.fire({
                    title: 'Error!',
                    text: 'Failed to signUp ' + e.response?.data?.message || 'Unknown error',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            } else {
                // Non-Axios error
                console.error('Non-Axios error:');
                await Swal.fire({
                    title: 'Error!',
                    text: 'Check input values',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        }finally {
            setLoading(false);
        }


    };

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{height: '100vh'}}>
                <CssBaseline/>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${image1})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                            {loading  }
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                                disabled={loading}
                            >
                                {loading ? 'Sign In...' : 'Sign In'}
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/signUp" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{mt: 5}}/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}