
import ContactForm from "./ContactForm";


const Contact = () => {
    return (
        <div className="mx-auto w-80 max-w-screen-lg sm:w-[30rem] my-auto">
            <div className="" shadow={true}>
                <div className=" bg-[#dddcdd] h-6 px-1 gap-0.5 -mt-0 mx-0 rounded-t-lg rounded-b-none flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#fd5c5c" className="size-4">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#febe3f" className="size-4">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM6.5 " clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#37d14b" className="size-4">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm4-7a.75.75" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="px-10 py-5 mb-10">
                    <p className="text-center" variant="h4" color="blue-gray">
                        Contact Me
                    </p>
                    <p color="gray" className="mt-1 font-normal text-wrap">
                        You can contact me by filling this form. I will get back to you soon as possible
                    </p>
                    <ContactForm />
                    <hr className="mt-3" />
                    <p color="gray" className="mt-4 text-center font-normal">
                        Conncet Through Other Platforms
                    </p>
                    <div className="flex gap-4 justify-center mt-4">
                        <a href="https://www.google.com" target="_blank" rel="noreferrer">
                            <button className="rounded-full bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
                                <i className="fab fa-google text-lg" />
                            </button>
                        </a>
                        <a href="https://x.com/?lang=en" target="_blank" rel="noreferrer">
                            <button className="rounded-full bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
                                <i className="fab fa-twitter text-lg" />
                            </button>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <button className="rounded-full bg-[#0072b1] hover:shadow-[#0072b1]/20 focus:shadow-[#0072b1]/20 active:shadow-[#0072b1]/10">
                                <i className="fab fa-linkedin text-lg" />
                            </button>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            <button className="rounded-full bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                                <i className="fab fa-github text-lg" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;