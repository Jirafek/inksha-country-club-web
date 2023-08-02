import React from "react";
import Header from '../Header';

const Main = () => {
    return (
        <section style={{ backgroundImage: 'url(/image/bg1_right.png)', backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }} className="h-[1080px] w-full">
            <Header />
            <div className="absolute left-0 top-0 flex items-center">
                <img className="h-full" src="/image/main_arrow_big.png" alt="" />
                <img className="h-full -ml-[300px] animate-aroow" src="/image/main_arrow_md.png" alt="" />
                <img className="h-full -ml-[300px] animate-aroow" src="/image/main_arrow_sm.png" alt="" />
            </div>
            <div className="px-[90px] flex flex-col mt-[150px] relative z-10">
                <div className="flex flex-col mb-[115px]">
                    <h1 className="uppercase text-white text-[98px] font-extrabold leading-[100px]">Икша</h1>
                    <h2 className="text-[78px] font-extrabold gradient_title leading-[100px]">КАНТРИ КЛАБ</h2>
                </div>
                <p className="w-[600px] text-[48px] text-white font-semibold">
                    Ваш идеальный отдых в подмосковье!
                </p>
                <img className="my-[70px] w-[590px]" src="/image/palka_pending.png" alt="" />
                <button className="rounded-[15px] border-[2px] border-[#4D382B] bg-[#AB8E67] py-[18px] flex justify-center items-center w-[420px]">
                    <p className="text-[32px] text-white font-semibold">Забронировать</p>
                </button>
            </div>
        </section>
    )
}

export default Main;
