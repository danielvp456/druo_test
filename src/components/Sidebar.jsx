import React from "react";
import Image from "next/image";
import Link from "next/link";

const sidebarItems = [
    {
        name: "Negocios",
        href: "/negocios",
    },
    {
        name: "Crear negocios",
        href: "/negocios/crear",
    }
]

function Sidebar() {

    return (
        <div>
            <aside className="sidebar bg-gray-900">
                <ul className="sidebar_list">
                    {sidebarItems.map((item) => (
                        <li className="sidebar_item" key={item.name}>
                            <Link href={item.href} className="sidebar_link"> {item.name} </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar