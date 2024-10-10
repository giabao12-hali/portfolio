import Slider from 'react-infinite-logo-slider'

const SlideSkillsLayout = () => {
    return (
        <>
            <section className='overflow-hidden w-full my-12' data-aos="fade-up">
                <Slider>
                    <Slider.Slide >
                        <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                        </a>
                    </Slider.Slide>
                    <Slider.Slide>
                        <a href='https://github.com/microsoft/TypeScript' target='_blank'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                        </a>
                    </Slider.Slide>
                    <Slider.Slide>
                        <a href='https://www.youtube.com/@DotNetMastery' target='_blank'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                        </a>
                    </Slider.Slide>
                    <Slider.Slide>
                        <a href='https://learn.microsoft.com/en-us/dotnet/core/introduction' target='_blank'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" className="filter grayscale hover:filter-none transition duration-300" width={60} />
                        </a>
                    </Slider.Slide>
                    <Slider.Slide>
                        <a href='https://www.udemy.com/share/101Wby/' target='_blank'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                        </a>
                    </Slider.Slide>
                    <Slider.Slide>
                        <a href='https://vitejs.dev/' target='_blank'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                        </a>
                    </Slider.Slide>
                    <Slider.Slide>
                        <a href='https://tailwindcss.com/' target='_blank'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                        </a>
                    </Slider.Slide>
                    <Slider.Slide>
                        <a href='https://react-bootstrap.github.io/' target='_blank'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                        </a>
                    </Slider.Slide>
                    <Slider.Slide>
                        <a href='https://learn.microsoft.com/en-us/ef/core/' target='_blank'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                        </a>
                    </Slider.Slide>
                    <Slider.Slide>
                        <a href="https://www.w3schools.com/postgresql/index.php" target='_blank'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                        </a>
                    </Slider.Slide>
                    <Slider.Slide>
                        <a href='https://www.udemy.com/share/1013o4/' target='_blank'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                        </a>
                    </Slider.Slide>
                    <Slider.Slide>
                        <a href="https://www.udemy.com/share/1013o4/" target='_blank'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                        </a>
                    </Slider.Slide>
                </Slider>
            </section>
        </>
    );
}

export default SlideSkillsLayout;