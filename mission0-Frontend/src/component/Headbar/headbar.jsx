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
                <img src='https://marketing.org.nz/hs-fs/hubfs/MA_Logo_square_tag.png?width=100&height=100&name=MA_Logo_square_tag.png' 
                     alt='NZ Marketing Association logo'/>
                <p>NZ Marketing Association</p>
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