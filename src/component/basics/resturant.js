import React, { useState } from "react";
import "./style.css";
import Menu from './menuApi.js'
import MenuCard from './menuCard'
import Navbar from "./navbar"

const uniqueList = [...new Set(Menu.map((element) => {
    return element.category
})),
    "All"];

console.log(uniqueList)

const Resturant = () => {

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((element) => {
            return element.category === category
        });
        setMenuData(updatedList)
    }
    return (<>
        <Navbar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuData={menuData} />
    </>)

}

export default Resturant;