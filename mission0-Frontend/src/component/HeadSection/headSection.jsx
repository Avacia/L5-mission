/* ============================== Import Files ============================== */
/* ======================== Library ======================== */
import Typewriter from 'typewriter-effect'
import {useSpring, animated} from 'react-spring'
import {useState} from 'react'

/* ======================= Component ======================= */
import style from './headSection.module.css'


/* ================== HeadSection Function ================= */
export default function headSection(){

    /* ================== Animation Component ================= */
    const [flip, setFlip] = useState(false)
    const props = useSpring({
        to:{opacity:1},
        from:{opacity:0},
        reset: true,
        reverse: flip,
        delay:2000,
        onRest: () => setFlip(!flip)
    })


    return(
        <div className={style.heading}>

            <div className={style.topic}>
                <h5>
                    <Typewriter
                        options={{
                            autoStart:true,
                            loop:true,
                            delay:50,
                            strings:["50 YEARS OF HELPING MARKETERS BE"]
                        }}
                    />
                </h5>
                <h1>
                    <animated.div style={props}>
                        BRILLIANT
                    </animated.div>
                </h1>
            </div>

            <div className={style.phoneVersion}>
                <h5>
                    <Typewriter
                        options={{
                            autoStart:true,
                            loop:true,
                            delay:50,
                            strings:["This is the Future currency"]
                        }}
                    />
                </h5>
                <h1>
                    <animated.div style={props}>
                        Crypto
                    </animated.div>
                </h1>
            </div>    

        </div>
    )
}