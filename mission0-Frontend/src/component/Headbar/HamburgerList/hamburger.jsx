/* ============================== Import Files ============================== */
/* ======================= Library ======================= */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'

/* ====================== Component ======================= */
import style from './hamburger.module.css'

/* ================== Hamburger Function ================== */
export default function hamburger(){

    /* ==================== Const Variable ===================== */
    const [isClicked, setIsClicked] = useState(false)


    /* ======================= Functions ======================= */
    function updateMenu(){
        setIsClicked(!isClicked)
    }


    /* ======================== Display ======================== */
    return(
        <div className={style.hamburger}>
            
            <div className={style.icon}>
                <div className={isClicked ? `${style.unClicked}` : `${style.clicked}`}>
                    <FontAwesomeIcon icon={faBars} size='3x' onClick={updateMenu}/>
                </div>

                <div className={isClicked ? `${style.clicked}` : `${style.unClicked}`}>
                    <FontAwesomeIcon icon={faXmark} size='3x' onClick={updateMenu}/>
                </div>    
            </div>

            <div className={style.menu}>
                <div className={isClicked ? `${style.visible}` : `${style.unClicked}`}>
                    <p className={style.burgerText}>Membership</p>
                    <p className={style.burgerText}>About Us</p>
                    <p className={style.burgerText}>Contact</p>
                    <button className={style.loginBtn}>Login</button>
                </div>
            </div>

        </div>
    )
}