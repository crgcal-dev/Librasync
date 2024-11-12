import background from "../assets/login-logo.png";

const Background = () =>{
    return (
        <div className="z-0 absolute">
            <p className="h-screen w-screen bg-sky-400 flex justify-evenly items-center opacity-10">
                <img className="h-96 w-96" src={background} alt="background" />
                <p className="text-white text-8xl font-bold">LIBRASYNC</p>
            </p>
        </div>
    )
}

export default Background;