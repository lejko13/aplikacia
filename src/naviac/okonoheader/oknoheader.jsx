import './oknoheader.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'

const Oknoheader = ({ targetId = 'okno-header' }) => {
  const target = document.getElementById(targetId)

  if (!target) return null

  return ReactDOM.createPortal(
    <motion.div
      className="Oknoheader"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      HEADER CONTENT
    </motion.div>,
    target
  )
}

export default Oknoheader
