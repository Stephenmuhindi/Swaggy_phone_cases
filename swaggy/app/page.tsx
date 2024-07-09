import Maxwidthwrapper from "@/components/maxwidthwrapper";
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
            <ul className="mt-10 space-y-1 text-left font-semibold flex flex-col items-center sm:items-start"></ul>
          </div>
          </div>
        </Maxwidthwrapper>
      </section>
    </div>
  );
}