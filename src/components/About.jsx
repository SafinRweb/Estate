import { assets } from "../assets/assets";
import { motion } from "motion/react"


const About = () => {
    return (
        <motion.div 
        initial={{opacity: 0, x: 100}}
            transition={{duration: 1.5}}
            whileInView={{opacity:1 ,x:0}}
            viewport={{once: true}}
        
        className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 overflow-hidden"
        id="About"
        >
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">About <span className="underline underline-offset-4 decoration-1 font-light">Our Brand</span></h1>
            <p className="text-gray-500 max-w-80 text-center mb-8">Passinate About Properties, Dedicated to Your Vision</p>
            
            <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
                <img src={assets.brand_img} alt="Brand IMG" className="w-full sm:w-1/2 max-w-lg" />
                <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
                    <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                        <div>
                            <p className="text-4xl font-medium text-gray-800">10+</p>
                            <p>Years of Excellence</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800">12+</p>
                            <p>Projects Completed</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800">10+</p>
                            <p>Mn. sq. Ft. Delivered</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800">25+</p>
                            <p>Ongoing Project</p>
                        </div>
                    </div>
                    <p className="my-10 max-w-lg">
                        With a decade of unwavering commitment, our real estate company has established a reputation for delivering exceptional projects and exceeding client expectations. Our portfolio spans residential and commercial developments, each crafted with innovation, quality, and attention to detail. Trusted by hundreds of satisfied clients, we continue to shape skylines and create vibrant communities, setting new benchmarks in the industry.
                    </p>
                    <button className="btn-3">Learn More</button>
                </div>
            </div>
        </motion.div>
    );
};

export default About;