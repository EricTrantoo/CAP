import Link from "next/link";
import Image from "next/image";

const menuItems= [
    {
        title: "MENU",
        items: [
            {
                icon:"/",
                label: "Home",
                href: "/"
            },
            {
                icon: "/",
                label: "Assign",
                href: "/"
            },
            {
                icon: "/",
                label: "HELP",
                href: "/"
            },
        ],
    },
    {
        title: "OTHER",
        items: [
            {
                icon: "/",
                label: "Profile",
                href: "/profile"
            },
            {
                icon: "/",
                label: "Logout",
                href: "/logout",
            }
        ]
    }
];

const Menu = () => {
    return (
        <div className="">
            {menuItems.map(i=>(
                <div className='' key={i.title}>
                    <span>{i.title}</span>
                    {i.items.map(item=>(
                        <Link href={item.href} key={item.label}>
                        <Image src={item.icon} alt="" width={20} height={20} />
                        <span>{item.label}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Menu;