/* ============================== Import Files ============================== */
/* ======================= Library ======================= */
import style from './headbar.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-solid-svg-icons'

/* ====================== Component ======================= */
import Hamburger from "./HamburgerList/hamburger.jsx"


/* ================== HeadBar Function ==================== */
export default function HeadBar(){

    return(
        <div className={style.headBar}>

            <section className={style.leftSection}>
                <FontAwesomeIcon icon={faCircle} size='3x' color='grey'/>
                <p>My Company</p>
            </section>

            <section className={style.rightSection}>
                
                <div className={style.phoneVersion}>
                    <Hamburger />
                </div>

                <div className={style.webVersion}>
                    <p>Membership</p>
                    <p>About Us</p>
                    <p>Contact</p>
                    <button className={style.loginBtn}>Login</button>
                </div>
                
            </section>

        </div>
    )
}