import styles from './Header.module.css'

import igniteLogo from '../assets/igniteLogo.svg'

export function Header(){
    return(
        <div className={styles.header}>
            <img src={igniteLogo}/>
        </div>
    )
}