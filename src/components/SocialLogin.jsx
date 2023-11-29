
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import useAxiosPublic from "../Hooks/UseaxiosPublic";



const SocialLogin = () => {

    const {googleSignIn} = UseAuth();

    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            const userInfo = {
                email:result.user?.email,
                name:result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data)
                navigate('/')
            })

        })
        
    }




    return (
        <div className="p-8">
        <div className="divider"></div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
         <FaGoogle className="mr-2"></FaGoogle>
          Google
        </button>
      </div>
    </div>
    );
};

export default SocialLogin;