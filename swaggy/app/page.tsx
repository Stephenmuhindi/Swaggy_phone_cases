import Maxwidthwrapper from "@/components/maxwidthwrapper";
import { Check, Phone, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <Maxwidthwrapper className="pb-20 pt-8 lg:grid lg:grid-cols-4 sm:pb-28 lg:gap-x-0 xl:gap-x-4 lg:pt-20 xl:pt-32 lg:pb-56">
          <div className="col-span-4 px-12 lg:px-0 lg:pt-8">
           <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="absolute w-26 left-0 -top-20 hidden lg:block">
              <img src="/swaggy_icon.png" className="w-full"/>
            </div>
            <h1 className="w-fit tracking-tight text-pretty mt-10 font-extrabold ! leading-tight text-pink-700 text-5xl md:text-6xl lg:text-7xl"> Welcome to <span className="bg-fuchsia-600 px-2 text-black">swaggy</span> phone cases</h1>
            <p className="mt-9 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
              Experience our uniquely crafted and <span className="font-bold ">refreshingly original</span> creation, display your creativity and passion in a unique way
            </p>
            <ul className="mt-10 space-y-2 text-left font-semibold flex flex-col items-center sm:items-start">
              <div className="space-y-1">
                <li className="flex gap-0.5 items-center text-right">
                  <Check className="h-9 w-9 shrink-0 text-purple-700"/>
                  quality like german price like gikomba
                </li>
                <li className="flex gap-0.5 items-center text-right">
                  <Check className="h-9 w-9 shrink-0 text-purple-700"/>
                  Stand out from the crowd; Dont follow; most of them are just as lost.
                </li>
                <li className="flex gap-0.5 items-center text-right">
                  <Check className="h-9 w-9 shrink-0 text-purple-700"/>
                  be yourself; let your personality show
                </li>
              </div>
            </ul>
            <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="flex-space-x-5">
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-slate-400 src=users/swaggy_user.jpg" 
                alt="user_0 image"
                />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-slate-400 src=users/swaggy_user.jpg" 
                alt="user_0 image"
                />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-slate-400 src=users/swaggy_user.jpg" 
                alt="user_0 image"
                />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-slate-400 src=users/swaggy_user.jpg" 
                alt="user_0 image"
                />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-slate-400 src=users/swaggy_user.jpg" 
                alt="user_0 image"
                />
              <div className="flex flex-col justify-between items-center sm:items-start">
                <div className="flex gap-0.5">
                  <Star className="h-6 w-6 text-purple-700 fill-purple-700"/>
                  <Star className="h-6 w-6 text-purple-700 fill-purple-700"/>
                  <Star className="h-6 w-6 text-purple-700 fill-purple-700"/>
                  <Star className="h-6 w-6 text-purple-700 fill-purple-700"/>
                  <Star className="h-6 w-6 text-purple-700 fill-purple-700"/>
                </div>
                <p><span className="font-semibold">11,250</span> happy and satisfied customers</p>
              </div>
            </div>
          </div>
          </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-7 md:px-0 sm:px-16 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative max-w-xl">
            </div>
              <img src="the_image.jpg" className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"/>
              <img src="/llient.png" className="absolute w-20 -left-6 -bottom-6 select-none"/>
              <Phone />
            </div>
        </Maxwidthwrapper>
      </section>
    </div>
  );
}