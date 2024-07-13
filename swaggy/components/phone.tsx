import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"
interface phoneprops extends HTMLAttributes<HTMLDivElement>{
    imgsrc: string
    dark?: boolean
}
const phone = ({ imgsrc, className, dark = false, ...props }: phoneprops) => {
    <div className={cn("relative-events-pointer-none z-50 overflow-hidden", className)}{...props}>
        <img src={dark ? "/phone-template-dark-edges.jpg": "/phone-template-white-edge.jpg" } className="pointers-events-none z-50 select-none" />
        <div className="absolute -z-10 inset-0">
            <img className="object-cover" src={imgsrc} alt="photo overlay" />
        </div>
    </div>
}
export default phone