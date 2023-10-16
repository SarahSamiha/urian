import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from "../ErrorPage/ErrorPage";


const ServiceDetail = () => {
    const services = useLoaderData();
    const { id } = useParams();
    const service = services.find(service => service.id == id);
    console.log(service);

    const notify = () =>{
        toast('Appointment booked. We will reach you soon.')
    }

    if(service){
        return (
            <div className="lg:max-w-6xl mx-auto">
                <div className="hero h-[200px] md:h-[500px]" style={{ backgroundImage: `url(${service.image})` }}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 text-peach items-center ">
                        <div>
                            <img className="md:pl-8 lg:pl-14" src={service.image} alt="" />
                        </div>
                        <div className="text-center md:text-left p-4 md:p-0 md:pr-14 bg-purple bg-opacity-30 md:bg-transparent">
                            <h1 className="mb-5 text-5xl font-bold">{service.name}</h1>
                            <p className=" mb-5 text-xl">
                                {service.description}
                            </p>
                            <p className=" mb-5 text-xl font-bold">
                                {service.price}
                            </p>
                            <button onClick={notify} className="btn bg-darkGreen hover:bg-green-800 text-white border-none px-9" to='/contactUs'>Book Appointment</button>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
    else {
        return <ErrorPage></ErrorPage>
    }
};

export default ServiceDetail;