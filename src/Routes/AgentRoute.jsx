import { Navigate, useLocation } from "react-router-dom";
import UseAgent from "../Hooks/UseAgent";
import UseAuth from "../Hooks/UseAuth";


const AgentRoute = ({children}) => {
    const {user,loading} = UseAuth()
    const [isAgent,isAgentLoading] =UseAgent();
    const location = useLocation();

    if(loading || isAgentLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAgent) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>


    ;
};

export default AgentRoute;