import React from "react"
import founder from "../assets/founder.jpg";
import cofounder from "../assets/co-founder.jpg";

export const About = () => {
  return (
    <section className="row">
        <div className="col-1">
            <img src={founder} alt="founder internee.pk" 
            className="round-banner object-contain"
            />
        </div>
    </section>
  )
}
