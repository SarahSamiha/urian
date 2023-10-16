

const Header = () => {
    return (
        <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522413452208-996ff3f3e740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlZGRpbmclMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)' }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-peach">
                    <h1 className="mb-5 text-5xl font-bold">URIAN <br /><span className="text-2xl">Crafting Unforgettable Moments!</span></h1>
                    <p className="mb-5">
                        We specialize in creating extraordinary experiences for most cherished events of life. From weddings to birthdays, anniversaries, engagements, retirements, and baby showers, we turn your vision into reality.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;