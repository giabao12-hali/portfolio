const AboutMeLayout = () => {
    return (
        <>
            <section data-aos="fade-up">
                <div className='anything-about-me grid grid-cols-3 my-12 px-24 text-balance text-2xl text-center font-buenardFont sm:flex sm:flex-col sm:gap-12 sm:px-10'>
                    <div className='flex justify-center items-center'>
                        <p>Hello, I&apos;m Gia Bao, a Software Engineer with a background in studying at FPT Polytechnic College. I have gained practical experience by participating in various software development projects. Currently, my expertise is <span className='text-success'>primarily focused</span> on technologies related to <span className='text-[#67217a]'>.NET</span>, with additional experiences in the Frontend domain.
                        </p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <p>I am eager to have the opportunity to contribute to problem-solving and bring new experiences to users. During my free time, I dedicate myself to learning new knowledge and practical applications, aiming to enhance my understanding and become an increasingly proficient programmer.</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <p>My learning and exploration go beyond coding; I am passionate about generating innovative ideas to optimize values for everyone through the products I create. I look forward to opportunities that allow me to contribute to impactful solutions and provide new experiences for users.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMeLayout;