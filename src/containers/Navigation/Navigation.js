import React from 'react';
import Styles from './Navigation.module.css';
const Navigation = (props)=>{
    const links = [
        {id:0,href:'#Wallpaper', title:'Wallpapers'},
        {id:1,href:'#photography', title:'Photography'},
        {id:2,href:'#wildlife', title:'Wildlife'},
        {id:3,href:'#Nature', title:'Nature'},
]
    return(
        <nav className = {Styles.Navigation}>
            <ul className={Styles.NavList}>
                <li className={Styles.NavTitle}> <a href='#'>quickShare</a></li>
                {links.map(link => <li key={link.id}className={Styles.NavListItem} onClick={()=>props.getlink(link.title)}><a>{link.title}</a></li>)}
            </ul>
        </nav>
    )
}

export default Navigation;