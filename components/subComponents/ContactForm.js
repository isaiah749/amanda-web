import React from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {
  const sendEmail = (e) => {
    let form = document.querySelector('#contactForm')
    const success = document.querySelector('#successMessage')
    const errorMessage = document.querySelector('#errorMessage')

    e.preventDefault()

    emailjs
      .sendForm(
        'service_m39u4t1',
        'template_y6rzaga',
        e.target,
        '9Iv1gFcW2SqXdaGMF',
      )
      .then(
        (result) => {
          console.log(result.text)
          form.style.display = 'none'
          success.classList.remove('hide')
        },
        (error) => {
          console.log(error.text)
          errorMessage.classList.remove('hide')
        },
      )
  }

  return (
    <section className="">
      <form
        onSubmit={sendEmail}
        id="contactForm"
        className=" w-[90%] pt-5 mx-auto h-[max-content]"
      >
        <div className="max-w-[300px] lg:max-w-[450px] mx-auto border-2 border-black rounded-md ">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            className="w-full pl-2 text-emerald-400 placeholder:text-emerald-400 outline-none h-[50px] text-sm placeholder:font-semibold md:text-lg "
          />
        </div>
        <div className="max-w-[300px] lg:max-w-[450px] mx-auto border-2 border-black rounded-md my-5 ">
          <input
            type="text"
            placeholder="Email Address"
            className="w-full pl-2 text-emerald-400 placeholder:text-emerald-400 outline-none h-[50px] text-sm placeholder:font-semibold md:text-lg "
          />
        </div>
        <div className="max-w-[300px] lg:max-w-[450px] mx-auto border-2 border-black rounded-md ">
          <input
            type="text"
            value={'Magnificent Minds Email'}
            name="subject"
            readOnly
            className="w-full pl-2 text-emerald-400 placeholder:text-emerald-400 outline-none h-[50px] text-sm placeholder:font-semibold md:text-lg "
          />
        </div>
        <div className="max-w-[300px] lg:max-w-[450px] mx-auto border-2 border-black rounded-md mt-5 ">
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            className="w-full pl-2 text-emerald-400 placeholder:text-emerald-400 outline-none h-full text-sm placeholder:font-semibold bg-white md:text-lg "
          />
        </div>
        <div className=" my-5 flex items-center justify-center ">
          <button
            type="submit"
            form="contactForm"
            className="border-2 border-black rounded-md text-lg font-semibold px-4 py-2 bg-white font-semibold text-emerald-400 lg:text-2xl "
          >
            Contact Me
          </button>
        </div>
      </form>
      <div
        id="successMessage"
        className="text-emerald-400 font-bold text-2xl text-center hide"
      >
        Message Sent!
      </div>
      <div
        id="errorMessage"
        className="text-emerald-400 font-bold text-2xl text-center hide"
      >
        Message Failed! Try again!
      </div>
    </section>
  )
}

export default ContactForm
