import About1 from '../assert/img.png'

export default function About(){
    return <section className='flex bg-primary px-5' id='about'>
        <div className='w-1/2 bg-primary px-5 '>
            <img src={About1}/>
        </div>
        <div className='w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>            
            <h1 className='text-4xl text-white border-b-4 mb-5 w-[170px] font-bold'>About me</h1>
            <p>Hi, My name is Prasanna, a recent Bachelor of Engineering graduate in Computer Science from VSB College of Engineering Technical Campus.
               I'm excited to start my journey as a software developer.
             </p>
            <p></p>
        </div>
        </div>

    </section>
}