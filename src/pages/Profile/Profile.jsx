import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import userDefaultPic from '../../assets/user.png'


const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="h-screen flex md:items-center justify-center">
            <div className="flex flex-col justify-center items-center w-full lg:max-w-xl lg:mb-40 bg-darkGreen bg-opacity-30 p-12 lg:rounded-2xl">
                <div className="mb-5">
                    {user.photoURL ?
                        <img className="w-[250px] h-[250px] rounded-full" src={`${user.photoURL}`} alt="" />
                        :
                        <img className="w-[250px] h-[250px] rounded-full" src={userDefaultPic} alt="" />
                    }
                </div>
                <div>
                    <h2 className="font-bold text-4xl text-center">{user.displayName}</h2>
                    <p className="font-medium text-lg text-center">{user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;