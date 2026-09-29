import data from '../../starter-code/data.json'
import {useState} from 'react';
const images = import.meta.glob<string>('../assets/destination/*.png', { eager: true, import: 'default' })

export default function Destination() {
const [destinations, setDestinations] = useState("Moon");
const imageSrc = images[`../assets/destination/image-${destinations.toLowerCase()}.png`]


const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestinations(e.target.value);
};

    return(
        <div className="destination-hero min-h-dvh bg-cover bg-center bg-no-repeat px-6 pt-28 lg:pt-40">
                <p className="text-white text-center md:text-left md:ml-30 text-[20px] mb-10 lg:mb-0">
                    <span aria-hidden="true" className="opacity-25">01　</span> PICK YOUR DESTINATION
                </p>
            <div className="text-center lg:text-left lg:ml-60 flex flex-col items-center lg:items-start lg:flex-row gap-10 lg:gap-15 lg:pt-40">
                <img src={imageSrc} alt={destinations} className="aspect-square rounded-full w-[150px] md:w-[200px] lg:w-[350px]" />
                <div>
                    <div className="text-white flex gap-8 justify-center lg:justify-start">
                        <label className={`pb-2 hover:border-b-1 ${destinations === "Moon" ? 'border-b-1' : ''}`}><input type="radio"  className="appearance-none" name="destination" value="Moon" checked={destinations === "Moon"} onChange={handleDestinationChange} /> MOON</label>
                        <label className={`pb-2 hover:border-b-1 ${destinations === "Mars" ? 'border-b-1' : ''}`}><input type="radio" className="appearance-none" name="destination" value="Mars"  checked={destinations === "Mars"} onChange={handleDestinationChange} /> MARS</label>
                        <label className={`pb-2 hover:border-b-1 ${destinations === "Europa" ? 'border-b-1' : ''}`}><input type="radio" className="appearance-none" name="destination" value="Europa" checked={destinations === "Europa"} onChange={handleDestinationChange} /> EUROPA</label>
                        <label className={`pb-2 hover:border-b-1 ${destinations === "Titan" ? 'border-b-1' : ''}`}><input type="radio" className="appearance-none" name="destination" value="Titan" checked={destinations === "Titan"}  onChange={handleDestinationChange} /> TITAN</label>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-white text-[80px]">{destinations.toUpperCase()}</h1>
                        <p className="text-blue-300 max-w-[327px] md:max-w-[514px] lg:max-w-[445px] lg:mx-0">{data.destinations.find((d: any) => d.name === destinations)?.description}</p>
                        <hr className="border-white/30" />
                        <dl className="grid grid-cols-2 gap-4">
                            <div>
                                <dt className="text-blue-300">AVG. DISTANCE</dt>
                                <dd className="text-white text-[25px]">{data.destinations.find((d: any) => d.name === destinations)?.distance}</dd>
                            </div>
                            <div>
                                <dt className="text-blue-300">EST. TRAVEL TIME</dt>
                                <dd className="text-white text-[25px]">{data.destinations.find((d: any) => d.name === destinations)?.travel}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}