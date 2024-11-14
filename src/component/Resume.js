import resume from '../assert/resume.jpg'
export default function Resume(){
    return <section className='flex bg-primary px-5' id='resume'>
        <div className='w-1/2 bg-primary px-5 flex justify-end '>
            <img className='w-[300px]' src={resume}/>
        </div>
        <div className='w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>            
            <h1 className='text-4xl text-white border-b-4 mb-5 w-[135px] font-bold'>Resume</h1>
            <p>You can view my resume <a href='https://drive.google.com/file/d/1vNZsuztCWAzEeMA81SRGTP2RH8AdfOEg/view?usp=sharing' className='btn hover:text-red-400'>Download</a></p>
            <p></p>
        </div>
        </div>

    </section>
}