import { motion } from 'framer-motion';

export default function NeonButton({ children, onClick, href, variant = 'primary' }) {
  const style = {
    backgroundImage:
      variant === 'primary'
        ? 'linear-gradient(135deg,#00F0FF,#FF00C8)'
        : 'linear-gradient(135deg,#B500FF,#00F0FF)'
  };

  const Btn = (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="neon-btn"
      style={style}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} style={{ textDecoration: 'none' }}>
        {Btn}
      </a>
    );
  }
  return Btn;
}
