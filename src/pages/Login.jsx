import React, { useState } from "react";
// import { testApi } from "../apis/Api";
import { toast } from "react-toastify";
import { loginUserApi } from "../apis/Api";

const Login = () => {
    //useState (Setting input Value)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //function for changing input value
        const changeEmail = (e) => {
    setEmail(e.target.value)
    }

    const changePassword = (e) => {
    setPassword(e.target.value)
    }

    //function for button
    const handleSubmit = (e) => {
        e.preventDefault()
        //check if input value is available
        console. log(email, password)
    
    //check test api
    // testApi().then((res)=>{
    //     console.log(res.data)
    // })
    // making json data object
    const data = {
        email : email,
        password : password
    }
    //making    API Call
    // const response = loginUserApi(data)    
    //     if(response.data.success == false){
    //         toast.error(response.data.message)
    //     } else if(response.data.success == true){
    //         toast.success(response.data. message)
    //     }else{
    //         toast.error("Server Error")
    //     }

    // }

    loginUserApi(data).then((res)=> {
        if(res.data.success == false){
            toast.error(res.data.message)
        }else{
            toast.success(res.data.message)
            //set token and user data in local storage
            localStorage.setItem('token',res.data.token)

            //set user data
            const jsonDecode = JSON.stringify(res.data.userData)
            localStorage.setItem('user',jsonDecode)
        }
    }).catch(err =>{
        toast.error("Server Error")
        console.log(err.message)
    })
    

    }



    return (
        
        <div className="m-3">            
            <h1>Sign in to your Accouunt!</h1>

            <form className="w-25">
                <label>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} className="form-control mb-2" placeholder="Enter your email"/>

                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)}  className="form-control mb-2" placeholder="Enter your password"/>

                <button onClick= {handleSubmit} className="btn btn-danger w-100">Submit</button>

                <a href="" className="text=black text-decoration-none">Don't have an Account SignUp!</a>


            </form>
        </div>
        
    )
}

export default  Login

//https://codeshare.io/r93LA6