

const ServiceCard = ({ service }) => {
    const { id, name, image, price, description } = service;

    return (
        <div className="card card-compact bg-darkGreen shadow-xl text-darkGreen bg-opacity-20">
            <figure><img src={image} alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{name}</h2>
                <p className="text-lg">{description.slice(0,100)}...</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-darkGreen text-white border-none hover:bg-green-800">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;