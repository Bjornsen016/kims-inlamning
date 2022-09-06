import {Link, useLocation} from "react-router-dom"
import Typography from "@mui/material/Typography";

function Error(){
    let location = useLocation();

    return (<div>
        <Typography>ERROR! Path <code>'{location.pathname}'</code> does not exist</Typography>
        <Link to="/"><Typography>Back to Home</Typography></Link>
    </div>)
}

export default Error;