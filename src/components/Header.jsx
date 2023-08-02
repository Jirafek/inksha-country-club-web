import React from "react";
import routes from '../utils/routes';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-full pt-[25px] px-10 flex items-center relative justify-between h-14 z-10">
            {
                routes.map((el, i) => (
                    <Link className="text-[26px] text-white monterey font-semibold" to={el.link}>
                        {
                            el.title ?
                                el.title
                                :
                                <img src={el.icon} alt="" />
                        }
                    </Link>
                ))
            }
        </div>
    )
}

export default Header;