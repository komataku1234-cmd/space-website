import { useState } from 'react';
import data from '../../starter-code/data.json'

const images = import.meta.glob<string>('../assets/crew/*.png', { eager: true, import: 'default' })

export default function Crew(){
    const [crew, setCrew] = useState("Douglas Hurley");
    const imageSrc = images[`../assets/crew/image-${crew.toLowerCase().replaceAll(' ', '-')}.png`]

    const handleCrewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCrew(e.target.value);
    }

    return(
        <div className="crew-hero min-h-dvh bg-cover bg-center bg-no-repeat px-6 pt-28 lg:pt-40 text-center lg:text-left">
            <p className="text-white mb-15 lg:mb-50 md:text-left lg:text-[20px] lg:ml-30"><span aria-hidden="true" className="opacity-25">02</span>MEET YOUR CREW</p>
            <div className="md:text-center lg:text-left lg:ml-30 flex flex-col lg:flex-row gap-20">
                <div>
                    <div className="text-white/50 text-[25px] md:text-[30px]">{data.crew.find((d: any) => d.name === crew)?.role}</div>
                    <h1 className="text-white text-[30px] mb-8 md:text-[60px]">{crew}</h1>
                    <div className="text-blue-300 mb-20 lg:mb-60 max-w-[539px]">{data.crew.find((d: any) => d.name === crew)?.bio}</div>
                    <div className="flex gap-8 justify-center lg:justify-start mb-15">
                                <label className=""><input type="radio"  className="" name="crew" value="Douglas Hurley" checked={crew === "Douglas Hurley"} onChange={handleCrewChange} /></label>
                                <label className=""><input type="radio" className="" name="crew" value="Mark Shuttleworth"  checked={crew === "Mark Shuttleworth"} onChange={handleCrewChange} /></label>
                                <label className=""><input type="radio" className="" name="crew" value="Victor Glover" checked={crew === "Victor Glover"} onChange={handleCrewChange} /></label>
                                <label className=""><input type="radio" className="" name="crew" value="Anousheh Ansari" checked={crew === "Anousheh Ansari"}  onChange={handleCrewChange} /></label>
                    </div>
                </div>
                <img src={imageSrc} alt={crew} className="w-[327px] h-[425px] md:w-[688px] md:h-[850px] lg:w-[539px] lg:h-[734px] object-cover object-top mx-auto lg:mx-0" />
            </div>
        </div>
    )
}