import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer flex flex-col md:flex-row items-center justify-center md:justify-between text-neutral-content p-10 bg-darkGreen lg:mt-14">
            <aside className="items-center grid-flow-col">
                <p>Copyright © 2023 - All right reserved</p>
            </aside>
            <nav className="flex gap-4 md:place-self-center md:justify-self-end ">
                <a><FaFacebook className='text-peach text-3xl'></FaFacebook>
                </a>
                <a><FaTwitter className='text-peach text-3xl'></FaTwitter></a>
                <a><FaInstagram className='text-peach text-3xl'></FaInstagram></a>
            </nav>
        </footer >
    );
};

export default Footer;