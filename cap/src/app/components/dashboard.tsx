import React, {useState} from 'react';
import Menu from "@/app/(root)/Menu";
import Link from "next/link";
import Image from "next/image";

const DashboardLayout = ({ children,}: Readonly<{ children: React.ReactNode; }>) => {
    return(
        <div className="h-screen flex">
            {/* Left side of the screen*/}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
            <Link 
            href="/"
            className="flex items-center justify-center lg:justify-start gap-2"
            >
                <Image src="/logo.png" alt="logo" width={32} height = {32} />
                <span className="hidden lg:block">C.A.P.</span>
            </Link>
            <Menu />
            </div>

            {/* Right side of the screen*/}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]">
                r
            </div>
        </div>
    )
}

export default DashboardLayout;