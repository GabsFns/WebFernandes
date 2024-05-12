import React from 'react';
import { Link } from 'react-scroll';
import Styles from "../../css/Header.module.css";



function HeaderPortfolio ({ navegacao1, navegacao2, navegacao3, navegacao4 }) {
    
    
    return (
        <>
            <header className={Styles.LayoutHeader}>
               
                <h1 className={Styles.TitleHeader}> CODE.</h1>
                <nav>
                    <ul>
                        <li>
                            <Link
                                activeClass="active"
                                to={navegacao1}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to={navegacao2}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to={navegacao3}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to={navegacao4}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default HeaderPortfolio;