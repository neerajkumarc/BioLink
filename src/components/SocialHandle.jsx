import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'

export default function SocialHandle({url}) {
  return (
    <motion.div
    initial={{ opacity: 0,}}
    animate={{ opacity: 1,}}
    transition={{ delay: 0.6 }}
  >
    <SocialIcon
      className="transition-all duration-450 hover:-translate-y-2"
      bgColor="white"
      fgColor="black"
      url={url}
      target={"_blank"}
    />
  </motion.div>
  )
}
