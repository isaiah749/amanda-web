import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>();
      const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:magmindstutor@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
      };
  return (
    <>
        <form id="form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto py-5">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                <input type="text" {...register('name')} placeholder="Name" className="contactInput" />
                <input type="email" {...register('email')} placeholder="Email" className="contactInput" />
            </div>
            <input type="text" {...register('subject')} placeholder="Subject" className="contactInput" />
            <textarea placeholder="Message" {...register('message')} className="contactInput" />

            <div className="flex items-center justify-center">
              <button type='submit' className="border-2 mt-3 border-black rounded-lg flex items-center justify-center font-semibold text-lg bg-emerald-400 w-[200px] py-2 shadow-xl ">Contact Me</button>
            </div>

        </form>
    </>
  )
}

export default ContactForm