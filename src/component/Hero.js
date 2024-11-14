import { AiOutlineTwitter,AiOutlineInstagram,AiOutlineLinkedin } from "react-icons/ai"
import HeroImg from '../assert/img1.png'
export default function Hero(){
    return <section className="flex flex:col md:flex-row px-5 py-32 bg-secondary justify-center">
        <div className="w-1/2 flex flex-col">
        <h1 className="text-white text-4xl">Hi, <br/> Im Prasanna
        <p className="text-2xl">React Developer</p></h1>
        <div className="flex ">
            <a href="https://x.com/PRASANNAA2312" className="hover:text-white pr-2"><AiOutlineTwitter size={40}/></a>
        <a href="#" className="hover:text-white pr-2"><AiOutlineInstagram size={40}/></a>
        <a href="https://www.linkedin.com/in/prasanna2312/" className="hover:text-white"><AiOutlineLinkedin size={40}/></a>
        </div>

        </div>
        <img className="w-1/3"  src={HeroImg}/>
    </section>
}