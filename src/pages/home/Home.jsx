import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ServiceCard from "./ServiceCard";

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <Header></Header>

            {/* Services */}
            <div className="mt-14">
                <h1 className="text-5xl font-semibold text-center">Our Services</h1>
                <p className="w-3/4 mx-auto text-center mt-6 mb-14">
                    Our mission is to be your trusted partner in turning your dreams into reality, whether it is a magical wedding, a joyful birthday celebration, a heartwarming anniversary, a blissful engagement party, a well-deserved retirement bash, or a precious baby shower. We are here for you every step of the way.
                </p>
                <div className="grid lg:grid-cols-3 gap-6">

                    {
                        services.map((service) => <ServiceCard key={service.id}
                            service={service}></ServiceCard>)
                    }
                </div>
            </div>


            {/* Focus */}
            <div className="mt-16">
                <h1 className="text-5xl font-semibold text-center">Why Choose Us?</h1>
                <p className="w-3/4 mx-auto text-center mt-6 mb-14">
                    Join us in creating cherished memories that will last a lifetime. URIAN is here to make your special moments truly extraordinary. Start your journey with us today, and let us turn your vision into reality.
                </p>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzb3J0JTIwZXZlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>

                        <div className="p-4">
                            <div className="text-center">
                                <h2 className="text-2xl text-blue-600 font-bold">About [Your Company Name]</h2>
                            </div>
                            <div className="p-4 text-left">
                                <p className="text-xl mb-4">
                                    <span className="font-bold">Unparalleled Expertise:</span> Our team of experienced event planners and coordinators are passionate about crafting unique and memorable experiences. We take pride in our attention to detail and creative approach, ensuring that your event is a true reflection of your vision.
                                </p>
                                <p className="text-xl mb-4">
                                    <span className="font-bold">Customized Solutions:</span> Your event is as unique as you are. We work closely with you to tailor our services to match your preferences, themes, and budgets, resulting in a one-of-a-kind experience that will leave a lasting impression.
                                </p>
                                <p className="text-xl mb-4">
                                    <span className="font-bold">Stress-Free Planning:</span> Let us handle the logistics, so you can focus on enjoying your event. From venue selection to décor, catering, entertainment, and more, we've got it covered.
                                </p>
                                <p className="text-xl mb-4">
                                    <span className="font-bold">Vendor Network:</span> We have built strong relationships with top-notch vendors, ensuring you have access to the best in the industry, whether you need a talented photographer, a fabulous florist, or a delicious cake designer.
                                </p>
                                <p className="text-xl mb-4">
                                    <span className="font-bold">Seamless Technology:</span> Our user-friendly website makes planning your event a breeze. Browse through our services, book appointments, and stay connected with your event coordinator.
                                </p>
                                <p className="text-xl">
                                    <span className="font-bold">Your Vision, Our Commitment:</span> We promise to bring your dreams to life. Your happiness is our success, and we are dedicated to exceeding your expectations.
                                </p>
                            </div>
                        </div>

                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;