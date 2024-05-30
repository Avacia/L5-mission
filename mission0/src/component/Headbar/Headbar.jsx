import style from './Headbar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle, faBars} from '@fortawesome/free-solid-svg-icons';

export default function HeadBar(){
    return(
        <div className={style.headBar}>

            <section className={style.leftSection}>
                <FontAwesomeIcon icon={faCircle} size='xl' color='grey'/>
                <p>My company</p>
            </section>

            <section className={style.rightSection}>
                <FontAwesomeIcon icon={faBars} size='l' color='black'/>
            </section>

        </div>
    )
}