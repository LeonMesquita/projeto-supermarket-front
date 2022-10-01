import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const alertObject = (icon, titleText, text, timer) => {
    return {
        icon: icon,
        titleText: titleText,
        text: text,
        color: `#FFFFFF`,
        background: `#333333`,
        confirmButtonColor: `#1877F2`,
        padding: `10px`,
        timer: timer,
        timerProgressBar: true,
        timerProgressBar: `#ffffff`
    }
}

export default function handleAlert(icon, titleText, text, timer){
    return Swal.fire(alertObject(icon, titleText, text, timer)) 
};