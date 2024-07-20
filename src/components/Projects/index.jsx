import { useState, useEffect } from "react"
import "./style.css"
import BackgroundLines from "../BackgroundLines"
import WorkCard from "../WorkCard"
import ScrambleText from "../ScrambleText"
import ParaWriting from "../ParaWriting"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import work1 from "../../assets/Images/ultraverse.png"
import work2 from "../../assets/Images/airbnb.png"
import work3 from "../../assets/Images/twitter.png"

export default function Projects() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleComplete = () => {
    setHasAnimated(true)
  }

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible")
    }
  }, [inView, controls])

  const works = [
    {
      client: "Frontend Simplified Internship",
      year: "2024",
      img: work1,
      title: "Ultraverse Market",
      detail: "I developed a website that simulates an NFT market exchange, showcasing my proficiency in frontend development. The platform allows users to explore and interact with a mock marketplace, demonstrating complex user interfaces and seamless experiences, effectively simulating a real-world NFT exchange.",
      link: "https://jayson-internship.vercel.app/"
    },
    {
      client: "Personal Project",
      year: "2024",
      img: work2,
      title: "Airbnb Clone",
      detail: "The project is a full-stack web application built with Next.js, Prisma, Supabase, Tailwind CSS,Radix Ul, and secure authentication with Kinde Auth, replicating core Airbnb features. Users can create and list properties, mark favorites, and make reservations.",
      link: "https://airbnb-clone-eta-sand-58.vercel.app/"
    },
    {
      client: "Personal project",
      year: "2024",
      img: work3,
      title: "Twitter Clone",
      detail: "Developed a fully functional Twitter clone using React, Next.js, Redux, and Firebase, providing a secure, real-time, and responsive social media platform. Implementing secure user authentication, real-time tweet updates, and an intuitive, mobile-friendly interface.",
      link: "https://twitter-clone-lovat-zeta.vercel.app/"
    },
  ]

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 0.5 }} className="projects--grid--title">
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              03
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Expertise
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Projects"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              )
            })}
          </div>
        </div>

        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 1 }} onAnimationComplete={() => handleComplete()} className="projects--grid--detail">
          <p className="theme--detail">
            <ScrambleText delay={1}>Discover a curated portfolio of projects where each line of code tells a story of problem-solving, creativity, and technical finesse.</ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
