import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { client } from "../../lib/axios";
import { toast } from "react-toastify";

function SignUpForm() {

    const schema = yup.object({
        username: yup.string().required(),
        email: yup.string().required().email(),
        password: yup.string().required().min(8).max(16),
    })

    const [isShowPassword, setIsShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur"
    })


    function toggleShowPassword() {
        setIsShowPassword(!isShowPassword);                                                                                                                         
    }

    async function submitForm(user) {


        try {
            const response = await client.post("/user/signup", user)
            localStorage.setItem('token', response.data.jwt)
            toast.success("user added successful", {
                type: "success"
            });
        }
        catch(error) {
           toast(error, {
            type: "error"
           });
        }
    }

    return (
       <div></div>
    )
}

export default SignUpForm;