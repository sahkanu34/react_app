import { useState, useEffect } from 'react';
import Button from '../components/Button';
import { MessageSquare, Info } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { motion, AnimatePresence } from 'framer-motion';

const HomeSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const texts = [
    'AI Enthusiast',
    // 'Data Scientist',
    'Machine Learning Engineer',
    'MLOps Engineer',
    'Data Analyst'
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center py-20 px-6 md:px-12"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="max-w-5xl mx-auto"
      >
        <span className="text-cyan-400 text-lg font-medium mb-4 block">
          Hi, I'm Suraj Sah Kanu.
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Data Science and
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTextIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {texts[currentTextIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mb-10 leading-relaxed">
          A self-motivated and passionate programmer, thrives on tackling intricate real-world challenges contributing to impactful projects.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button 
            text="Read More" 
            icon={<Info />} 
            href="#about" 
          />
          <Button 
            text="Contact Me" 
            variant="outline" 
            icon={<MessageSquare />} 
            href="#contact" 
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HomeSection;