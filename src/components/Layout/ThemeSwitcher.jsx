import React, { useEffect, useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import {CustomButton} from './';

export const useCustomTheme = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        setTheme(localStorage.getItem("spotify_clone_theme") || "light")
    }, [])

    return [theme, setTheme]
}

const ThemeSwitcher = () => {
    const [theme, setTheme] = useCustomTheme();
    const [mount, setMount] = useState(false);    

    useEffect(() => {
        setMount(true)
    }, [])

    if (!mount) return null;

    return (
        <CustomButton className='w-8 h-8 rounded-full p-1 shadow-md outline-none border-none bg-slate-800 dark:bg-slate-700 text-slate-400 focus:text-white dark:focus:text-yellow-500 dark:hover:text-yellow-500 dark:shadow-none transition-colors' onClick={() => setTheme(theme => theme === "dark" ? "light" : "dark")}>
            {theme === "light" ? <BiMoon className='w-full h-full' /> : <BiSun className='w-full h-full' />}
        </CustomButton>
    )
}

export default ThemeSwitcher