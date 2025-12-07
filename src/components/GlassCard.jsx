import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', style }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={`glass ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}
