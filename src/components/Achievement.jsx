import CountUp from "react-countup";
import img from "../assets/people-working-as-team-company.jpg";

export const Achievement = () => {
  return (
    <section className='row relative max-sm:!gap-0 max-w-[1200px] w-full mx-auto px-2 my-20'>
        <div className="col-1 bg-primary round-banner sm:py-12 py-5 sm:px-10 px-2 h-full ">
            <h2 className="sm:text-5xl text-3xl font-bold sm:!leading-[60px] text-white">
            Launching tech careers with internships, exposure, and networking.
            </h2>
            <p className="text-neutral-100 my-3">Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry.</p>

            <div className="flex gap-10 items-center max-sm:justify-center justify-start mt-5">
                <div>
                    <div className="text-white sm:text-4xl text-2xl font-semibold">
                        <CountUp end={5000} duration={5}/> +
                    </div>
                    <p className="text-white mt-2 max-sm:text-sm">Registered users</p>
                </div>

                <div>
                    <div className="text-white sm:text-4xl text-2xl font-semibold">
                        <CountUp end={35} duration={5}/> +
                    </div>
                    <p className="text-white mt-2 max-sm:text-sm">Opening Internships</p>
                </div>
            </div>
        </div>

        <div className="col-2">
            <img src={img} alt="Banner" className="w-full h-full object-contain round-banner-img"/>
        </div>
    </section>
  )
}
