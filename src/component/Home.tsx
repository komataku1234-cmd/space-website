import { Link } from 'react-router-dom';

export default function Homepage() {
    

    return(
        <div className="home-hero min-h-dvh bg-cover bg-center bg-no-repeat px-6">
            <div className="pt-28 md:pt-56 lg:pt-96 text-center lg:text-left lg:ml-24 flex flex-col gap-6 ">
                <p className="text-blue-300 ">SO, YOU WANT TO TRAVEL TO</p>
                <h1 className="text-white text-[80px]">SPACE</h1>
                <p className="text-center lg:text-left text-blue-300 max-w-sm mx-auto lg:mx-0">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                <Link to="/destination" className="text-[20px] md:text-[50px] aspect-square w-36 md:w-70 rounded-full bg-white text-blue-900 flex items-center justify-center mx-auto lg:mx-50 lg:self-end lg:-mt-70">EXPLORE</Link>
            </div>
        </div>
    )
}