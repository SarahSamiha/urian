import { BsFillChatDotsFill } from 'react-icons/bs';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { GrMail } from 'react-icons/gr';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {

    const notify = () =>{
        toast('We will contact you soon.')
    }

    return (
        <div className="lg:max-w-6xl mx-auto mt-14">
            <div className="flex flex-col gap-5 justify-center items-center">
                
                <h1 className="font-bold text-purple text-5xl">Get In Touch</h1>


                <div className='text-darkGreen font-bold bg-darkGreen bg-opacity-30 shadow-lg md:flex justify-between items-center py-3 md:px-14 rounded-lg w-[350px] md:w-[700px] text-center md:text-left'>
                    <div className=' md:flex gap-6 items-center md:p-6 md:mr-14 justify-center'>
                        <GrMail className='text-3xl w-full md:w-10 mb-4 md:mb-0'></GrMail>
                        <div>
                            <h1 className='text-3xl'>
                                Email
                            </h1>
                            <p>Typical reply time: Within minutes <br />
                                You can mail us anytime you want</p>
                        </div>
                    </div>
                    <button onClick={notify} className='btn bg-purple text-white border-none hover:bg-green-800 mt-5 md:mt-0'>Contact</button>
                </div>


                <div className='text-darkGreen font-bold bg-darkGreen bg-opacity-30 shadow-lg md:flex justify-between items-center py-3 md:px-14 rounded-lg w-[350px] md:w-[700px] text-center md:text-left'>
                    <div className='md:flex gap-6 items-center md:p-6 md:mr-14 justify-center'>
                        <BiSolidPhoneCall className='text-3xl w-full md:w-10  mb-4 md:mb-0'></BiSolidPhoneCall>
                        <div>
                            <h1 className='text-3xl'>
                                Call
                            </h1>
                            <p>Call us to have a conversation right now! <br />
                                All Week: 09:00 am- 07:00 pm</p>
                        </div>
                    </div>
                    <button onClick={notify} className='btn bg-purple text-white border-none hover:bg-green-800 mt-5 md:mt-0'>Contact</button>
                </div>


                <div className='text-darkGreen font-bold bg-darkGreen bg-opacity-30 shadow-lg md:flex justify-between items-center py-3 md:px-14 rounded-lg w-[350px] md:w-[700px] text-center md:text-left'>
                    <div className='md:flex gap-6 items-center md:p-6 md:mr-14 justify-center'>
                        <BsFillChatDotsFill className='text-3xl w-full md:w-10 mb-4 md:mb-0'></BsFillChatDotsFill>
                        <div>
                            <h1 className='text-3xl'>
                                Chat
                            </h1>
                            <p>Typical reply time: Within minutes <br />
                                All Week: 09:00 am- 07:00 pm</p>
                        </div>
                    </div>
                    <button onClick={notify} className='btn bg-purple text-white border-none hover:bg-green-800  mt-5 md:mt-0'>Contact</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ContactUs;