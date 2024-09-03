import Link from 'next/link';
import React from 'react'

import {FaFacebook, FaGithub, FaLinkedinIn, FaTwitter,} from "react-icons/fa"

const socials=[
    {
    icon:<FaGithub/>,path:'https://github.com/ismailbouaich'
        },
        {
            icon:<FaFacebook/>,path:'https://www.facebook.com/ismail.bouaichi/'
                },
                {
                    icon:<FaLinkedinIn/>,path:'https://www.linkedin.com/in/ismail-bouaichi-971714291/'
                        },
                        {
                            icon:<FaTwitter/>,path:'https://x.com/Ismail62331676'
                                },

];
const Social = ({containerStyles,iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item,index)=>{
        return<Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
    })}
  </div>
}

export default Social
