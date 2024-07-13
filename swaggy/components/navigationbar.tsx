import { ArrowRightSquareIcon } from "lucide-react"
import Maxwidthwrapper from "./maxwidthwrapper"
import { buttonVariants } from "./ui/button"

const navbar = () => {
    const user = undefined
    const isAdmin = false
    return(
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-blue-500 bg-slate/75 backdrop-blur-lg transition-all">
        <Maxwidthwrapper>
            <div className="h-16 items-center justify-between border-b border-zinc-500 ">
                <link href="/" className="flex z-40 font-bold">
                    swaggy<span className="text-purple-600">case</span>
                    </link>
            <div className="h-full items-center space-x-4 ">
                {user ? (
                    <>
                    <link href="/api/auth/logout" className={buttonVariants({ size:"sm", variant:"ghost"})}>
                        sign out
                    </link>
                    {isAdmin ? <link href="/api/auth/logout" className={buttonVariants({ size:"sm", variant:"ghost"})}>
                        Dashboard
                    </link> : null}
                    <link href="/configure/upload" className={buttonVariants({ size:"sm", className: "hidden sm:flex items-center gap-1"})}>
                        customize case
                        <ArrowRightSquareIcon className="ml-1.5 h-5 w-5"/>
                    </link>
                    </>
                ): (<>
                    <link href="/api/auth/register" className={buttonVariants({ size:"sm", variant:"ghost"})}>
                        sign up
                    </link>
                    <link href="/api/auth/login" className={buttonVariants({ size:"sm", variant:"ghost"})}>
                        login
                    </link>
                    </>)}
            </div>
            </div>
        </Maxwidthwrapper>
    </nav>
    )
}
export default navbar