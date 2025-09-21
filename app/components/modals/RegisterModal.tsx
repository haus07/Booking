'use client'

import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { useCallback,useState } from "react"
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form"
import Modal from "./Modal"

import useRegisterModal from "@/app/hooks/useRegisterModal"
import Heading from "../Heading"
import Input from "../inputs/Input"
import Button from "../Button"
import { BsGithub } from "react-icons/bs"

const RegisterModal = () => {
    const registerModal = useRegisterModal()
    const [isLoading, setIsLoading] = useState(false)
    
    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password:''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)


    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading />
            
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required />
            <Input
                id="password"
                label="Password"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required />
            
        </div>
    )


    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />  
            <Button outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={()=>{}}
            />
             <Button outline
                label="Continue with Github"
                icon={BsGithub}
                onClick={()=>{}}
            />
            <div className="
                text-neutral-500
                text-center 
                mt-4
                font-light
            ">
                <div className="justify-center flex flex-row items-center gap-2">

                    <div>
                        Đã có tài khoản ?
                    </div>
                    <div onClick={registerModal.onClose}
                        className="
                        text-neutral-500
                        cursor-pointer
                        hover:underline
                        font-extrabold
                    ">
                        Đăng nhập
                    </div>
                </div>
                
                </div>
        </div>
    ) 
    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Đăng kí"
            actionLabel="Tiếp tục"
            body={bodyContent}
            footer={footerContent}
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)
            
            }
        />
    )
}

export default RegisterModal