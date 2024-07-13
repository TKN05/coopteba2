import { useNavigate } from 'react-router-dom';
import { Icon } from './Icon';


export function Button({svg, buttonName}){

    const navigate = useNavigate();

    const handleRedirect = (path) => {
        navigate(path);
    };


    return(

    <div className="box" onClick={() => handleRedirect(`/${buttonName}`)}>
        <Icon svg={svg}></Icon>
        <br />
        {buttonName}
    </div>

    )


}