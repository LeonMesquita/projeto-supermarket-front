import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const alertObject = (icon, titleText, text, timer) => {
    return {
        icon: icon,
        titleText: titleText,
        text: text,
        color: `#FFFFFF`,
        background: `#212129`,
        confirmButtonColor: `#5ec45e`,
        padding: `10px`,
        timer: timer ?? 2000
    }
}
//333333   #323949
export default function handleAlert(icon, titleText, text, timer){
    return Swal.fire(alertObject(icon, titleText, text, timer)) 
};