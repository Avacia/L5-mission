/* ============================== Import Files ============================== */
/* ======================= Library ======================= */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'


/* ================== Hamburger Function ================== */
export default function hamburger(){

    /* ==================== Const Variable ===================== */
    const [isClicked, setIsClicked] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const menuItem =[
        {
            path: '/Membership',
            name: 'Membership'
        },
        {
            path: '/AboutUs',
            name: 'About Us'
        },
        {
            path: '/Contact',
            name: 'Contact'
        }
    ]


    /* ======================= Functions ======================= */
    function checkIsClicked(){
        setIsClicked(!isClicked)
    }

    function checkIsOpen(){
        setIsOpen(!isOpen)
    }

    /* ======================== Display ======================== */
    return(
        <FontAwesomeIcon icon={faBars} size="xl" color='black'/>
    )
}