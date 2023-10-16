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


                <div className='text-darkGreen font-bold bg-darkGreen bg-opacity-30 shadow-lg flex justify-between items-center py-3 px-14 rounded-lg w-[350px] md:w-[700px]'>
                    <div className='flex gap-6 items-center p-6 mr-14'>
                        <GrMail className='text-3xl'></GrMail>
                        <div>
                            <h1 className='text-3xl'>
                                Email
                            </h1>
                            <p>Typical reply time: Within minutes <br />
                                You can mail us anytime you want</p>
                        </div>
                    </div>
                    <button onClick={notify} className='btn bg-purple text-white border-none hover:bg-green-800'>Contact</button>
                </div>


                <div className='text-darkGreen font-bold bg-darkGreen bg-opacity-30 shadow-lg flex justify-between items-center py-3 px-14 rounded-lg w-[350px] md:w-[700px]'>
                    <div className='flex gap-6 items-center p-6 mr-14'>
                        <BiSolidPhoneCall className='text-3xl'></BiSolidPhoneCall>
                        <div>
                            <h1 className='text-3xl'>
                                Call
                            </h1>
                            <p>Call us to have a conversation right now! <br />
                                All Week: 09:00 am- 07:00 pm</p>
                        </div>
                    </div>
                    <button onClick={notify} className='btn bg-purple text-white border-none hover:bg-green-800'>Contact</button>
                </div>


                <div className='text-darkGreen font-bold bg-darkGreen bg-opacity-30 shadow-lg flex justify-between items-center py-3 px-14 rounded-lg w-[350px] md:w-[700px] mb-16'>
                    <div className='flex gap-6 items-center p-6 mr-14'>
                        <BsFillChatDotsFill className='text-3xl'></BsFillChatDotsFill>
                        <div>
                            <h1 className='text-3xl'>
                                Chat
                            </h1>
                            <p>Typical reply time: Within minutes <br />
                                All Week: 09:00 am- 07:00 pm</p>
                        </div>
                    </div>
                    <button onClick={notify} className='btn bg-purple text-white border-none hover:bg-green-800 '>Contact</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ContactUs;