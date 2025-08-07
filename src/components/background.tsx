"use client"
import Image from "next/image"
import clsx from "clsx"
import { usePathname } from "next/navigation";

export default function Background() {
    const activePathname = usePathname()
    return <Image src={clsx({
                  "/bgblur.jpg": activePathname !== "/",
                  "/bg2.jpg": activePathname === "/",
                })} alt="" fill className="absolute -z-50 transition"/>
}