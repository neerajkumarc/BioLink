import React from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.waves.min.js";
import pic from "./assets/pic.gif";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import SocialHandle from "./components/SocialHandle";
import socialLinks from "../constants/socialLinks";

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
      zoom: 1.3,
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
          <h1 className="text-4xl md:text-7xl tracking-wider font-extrabold">
            Neerajkumar
          </h1>
          <div className="text-2xl md:text-4xl text-[#00ff00]">
            <Typewriter
              words={[
                "Technophile",
                "UI/UX Designer",
                "Web Developer",
              ]}
              loop={true}
              cursor={true}
            />
          </div>
          <div className="flex flex-row gap-2">
            {socialLinks.map((url) => {
              return <SocialHandle key={url} url={url} />;
            })}
          </div>
        </motion.section>
        <img className="hidden" src="https://hits.sh/neerajk.netlify.app.svg" alt="hits" />
      </div>
    );
  }
}

export default App;
