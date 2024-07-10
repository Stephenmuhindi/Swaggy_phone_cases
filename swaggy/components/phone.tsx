import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"
interface phoneprops extends HTMLAttributes<HTMLDivElement>{
    imgsrc: string
    dark?: boolean
}
const phone = ({ imgsrc, className, dark = false, ...props }: phoneprops) => {
    <div className={cn("relative-events-pointer-none z-50 overflow-hidden", className)}{...props}></div>
}
export default phone