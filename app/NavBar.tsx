'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiFillBug } from "react-icons/ai";
import classnames from 'classnames';


// Active Link method - 1

// const NavBar = () => {

//     const currentPath = usePathname();
//     // console.log(currentPath);

//     const links = [
//         {label: 'Dashboard', href:'/'},
//         {label: 'Issues', href:'/issues'},
//     ]

//     return (
//         <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
//             <Link href='/'><AiFillBug /></Link>
//             <ul className='flex space-x-6'>
//                 {links.map(link => <Link 
//                 key={link.href} 
//                 className={`${currentPath === link.href ? 'text-zinc-900' : 'text-zinc-500'} font-bold hover:text-zinc-800 transition-colors`} 
//                 href={link.href}>{link.label}</Link>)}

//             </ul>
//         </nav>
//     )
// }


// Active Link Method - 2

const NavBar = () => {

    // Active Link Method - 2

    const currentPath = usePathname();

    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' },
    ]

    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href='/'><AiFillBug /></Link>
            <ul className='flex space-x-6 font-bold'>
                {links.map(link => <Link
                    key={link.href}
                    className={classnames({
                        'text-zinc-900' : link.href === currentPath,
                        'text-zinc-500' : link.href !== currentPath,
                        'hover:text-zinc-700 transition-colors' : true
                    })}
                    //this method is used for cleaner code
                    
                    href={link.href}>{link.label}</Link>)}

            </ul>
        </nav>
    )
}

export default NavBar