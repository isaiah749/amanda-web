import { useState } from 'react'



const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div>
        <form id='contactForm' action='https://formsubmit.co/magmindstutor@gmail.com' method='POST' className="flex flex-col space-y-2 py-5 w-fit mx-auto">
            <div className='flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2'>
                <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} placeholder='Name' className='contactInput' />
                <input type="hidden" name='_next' value='https://magnificentmindstutoring.com' />
                <input type="email" value={email} name='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='contactInput' />
            </div>
            <input type="text" value={subject} name='subject' onChange={(e) => setSubject(e.target.value)} placeholder='Subject' className='contactInput' />

            <textarea className='contactInput' name='message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' />
            <div className="flex items-center justify-center">
              <button type='submit' className="border-2 mt-3 border-black rounded-lg flex items-center justify-center font-semibold text-lg bg-emerald-400 w-[200px] py-2 shadow-xl ">Contact Me</button>
            </div>

        </form>
    </div>
  )
}

export default ContactForm