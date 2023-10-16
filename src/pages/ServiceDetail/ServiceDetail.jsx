import {useLoaderData, useParams } from "react-router-dom";


const ServiceDetail = () => {
    const services = useLoaderData();
    const {id} = useParams();
    const service = services.find(service => service.id == id);
    console.log(service);

    return (
        <div className="lg:max-w-6xl mx-auto">
            <div className="hero h-[500px]" style={{ backgroundImage: `url(${service.image})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="grid grid-cols-2 gap-12 text-peach items-center">
                <div>
                    <img className="pl-14" src={service.image} alt="" />
                </div>
                <div >
                <h1 className="mb-5 text-5xl font-bold">{service.name}</h1>
                    <p className="pr-14 mb-5 text-xl">
                        {service.description}
                    </p>
                    <p className="pr-14 mb-5 text-xl font-bold">
                        {service.price}
                    </p>
                    <button className="btn bg-darkGreen hover:bg-green-800 text-white border-none px-9" to='/contactUs'>Book Appointment</button>
                </div>
            </div>
        </div>

        </div>
    );
};

export default ServiceDetail;