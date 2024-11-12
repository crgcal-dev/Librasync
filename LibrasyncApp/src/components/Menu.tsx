import profile from '../assets/profile.png'
import { MenuItemType } from '../types/MenuItemType';

export const Menu = () =>{
    return(
        <div className="border w-80 h-screen bg-sky-500">
            <div className="flex flex-col items-center gap-2 mt-5">
                <img className="rounded-full h-20 w-20 border" src={profile} alt="profile-placeholder" />
                <p className="font-bold text-lg text-white"> Carlo R. Garcia</p>
                <hr className="divide-white w-72"/>
            </div>
            <MenuItem name = "CATALOG" />
            <MenuItem name = "BORROWED BOOK" />
            <MenuItem name = "RETURNED BOOK" />
            <MenuItem name = "LOG OUT" />
        </div>
    )
}

export const MenuItem = ( { name }:MenuItemType ) =>{
    const pathWay = () => {
        switch (name) {
            case "CATALOG":
                return "/catalog";
            case "BORROWED BOOK":
                return "/borrowed-books";
            case "RETURNED BOOK":
                return "/returned-books";
            case "LOG OUT":
                return "/logout";   
            default:
                return "/";
        }
    };
    
    return(
        <div className='flex flex-col items-center'>
            <a className='p-5 text-white font-semibold w-80' href={pathWay()}>{name}</a>
            <hr className="divide-white w-72"/>
        </div>
    )
}