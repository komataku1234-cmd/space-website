import { useState } from 'react';
import data from '../../starter-code/data.json'

const images = import.meta.glob<string>('../assets/technology/*.jpg', { eager: true, import: 'default' })

export default function Technology(){
    const [technology, setTechnology] = useState("Launch vehicle");
    const slug = technology.toLowerCase().replaceAll(' ', '-')
    const landscapeSrc = images[`../assets/technology/image-${slug}-landscape.jpg`]
    const portraitSrc = images[`../assets/technology/image-${slug}-portrait.jpg`]
    //const imageSrc = images[`../assets/crew/image-${crew.toLowerCase().replaceAll(' ', '-')}.png`]

    const handleTechnologyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTechnology(e.target.value);
    }
    return(
        <div>
            <div className="technology-hero min-h-dvh bg-cover bg-center bg-no-repeat px-6 pt-28 lg:pt-40">
                <div className="text-white text-center md:text-left md:ml-10 lg:ml-35 text-[20px] mb-20 lg:mb-0"><span aria-hidden="true" className="opacity-25 pr-4">03</span>SPACE LAUNCH 101</div>
                <div className="mb-20 flex flex-col lg:flex-row lg:items-center lg:gap-16 lg:ml-35">
                    <picture className="block -mx-6 mb-10 lg:order-3 lg:ml-auto lg:mb-0 lg:shrink-0">
                        <source media="(min-width: 768px) and (max-width: 1439px)" srcSet={landscapeSrc} />
                        <img src={portraitSrc} alt={technology} className="w-full h-80 object-cover lg:w-[515px] lg:h-[527px]" />
                    </picture>
                    <div className="flex flex-row  lg:flex-col items-center justify-center gap-4 mb-10 lg:order-1 lg:mb-0 *:w-10 *:h-10 md:*:w-16 md:*:h-16 lg:*:w-20 lg:*:h-20 md:*:text-lg lg:*:text-xl">
                        <label className={`rounded-full border border-white flex items-center justify-center ${technology === "Launch vehicle" ? 'bg-white text-blue-900' : 'text-white'}`}>
                            <input type="radio"  className="sr-only" name="technology" value="Launch vehicle" checked={technology === "Launch vehicle"} onChange={handleTechnologyChange} />1</label>
                        <label className={`rounded-full border border-white flex items-center justify-center ${technology === "Spaceport" ? 'bg-white text-blue-900' : 'text-white'}`}>
                            <input type="radio"  className="sr-only" name="technology" value="Spaceport" checked={technology === "Spaceport"} onChange={handleTechnologyChange} />2</label>
                        <label className={`rounded-full border border-white flex items-center justify-center ${technology === "Space capsule" ? 'bg-white text-blue-900' : 'text-white'}`}>
                            <input type="radio"  className="sr-only" name="technology" value="Space capsule" checked={technology === "Space capsule"} onChange={handleTechnologyChange} />3</label>
                        
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 lg:max-w-xl lg:order-2 lg:text-left lg:items-start">
                        <div className="text-white opacity-25 md:text-[20px]">THE TERMINOLOGY…</div>
                        <div className='text-white text-[30px] md:text-[50px]'>{technology}</div>
                        <div className='text-blue-300 mb-10'>{data.technology.find((d: any) => d.name === technology)?.description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}