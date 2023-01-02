import React from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.waves.min.js";
import pic from "./assets/pic.webp";
import { Typewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

class App extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = GLOBE({
      el: this.vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x0,
      shininess: 30.0,
      waveHeight: 13.0,
      zoom: 1.16,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
  render() {
    return (
      <div
        ref={this.vantaRef}
        className="h-screen w-screen overflow-hidden bg-black text-white flex items-center justify-center flex-col"
      >
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-[-96px] md:mt-0 flex flex-col items-center justify-center gap-7"
        >
          <img
            className=" w-52 h-52 rounded-full"
            src={pic}
            alt="profile pic"
          />
          <h1 className="text-4xl md:text-7xl tracking-wider font-bold">
            Neerajkumar
          </h1>
          <div className="text-2xl md:text-4xl text-[#00ff00]">
            <Typewriter
              words={[
                "Programmer",
                "UI/UX Designer",
                "Software Engineer",
                "Full-Stack Developer",
              ]}
              loop={true}
              cursor={true}
            />
          </div>
          <div className="flex flex-row gap-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <SocialIcon
                className="hover:scale-110 transition-all duration-450"
                bgColor="white"
                fgColor="black"
                url="https://github.com/Neerajkumarc"
                target={"_blank"}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <SocialIcon
                className="hover:scale-110 transition-all duration-450"
                bgColor="white"
                fgColor="black"
                url="https://www.linkedin.com/in/neerajkumar31/"
                target={"_blank"}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <SocialIcon
                className="hover:scale-110 transition-all duration-450"
                bgColor="white"
                fgColor="black"
                url="https://twitter.com/neerajkumar_31"
                target={"_blank"}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <SocialIcon
                className="hover:scale-110 transition-all duration-450"
                bgColor="white"
                fgColor="black"
                url="https://www.instagram.com/neerajchaudhary.31/"
                target={"_blank"}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              <SocialIcon
                className="hover:scale-110 transition-all duration-450"
                bgColor="white"
                fgColor="black"
                url="https://www.facebook.com/neerajkumar.chaudhary.94695/"
                target={"_blank"}
              />
            </motion.div>
          </div>
        </motion.section>
      </div>
    );
  }
}

export default App;
