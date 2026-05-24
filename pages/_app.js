import '../styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import FloatingActions from '../components/FloatingActions'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <FloatingActions />
    </>
  )
}
