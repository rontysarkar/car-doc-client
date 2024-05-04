import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero my-28 ">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className=" w-2/4 rounded-lg shadow-2xl absolute right-0 top-1/2" />

                </div>
                <div className='lg:w-1/2'>
                    <h1 className='text-3xl text-orange-500 font-bold'>About</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. </p>
                    <p>
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. 
                    </p>
                    <button className="btn outline bg-warning mt-5">Get More info</button>
                </div>
            </div>
        </div>
    );
};

export default About;