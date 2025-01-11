'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home, Linkedin, Mail, Briefcase, GraduationCap, Sun, Moon, Download } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import profilePhoto from '@/components/images/Leonardo_Anime_XL_A_dazzlingly_beaming_gentleman_exuding_warmt_3.jpg'; // Ensure this path is correct

// Typography
const typography = {
  h1: 'text-6xl sm:text-7xl lg:text-8xl font-bold',
  h2: 'text-4xl sm:text-5xl lg:text-6xl font-bold',
  h3: 'text-3xl sm:text-4xl lg:text-5xl font-semibold',
  p: 'text-lg sm:text-xl text-muted-foreground',
};

// Nav Bar
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const navbarHeight = useTransform(scrollYProgress, [0, 0.2], [80, 40]); // Shrink navbar height
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const updateNavbar = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', updateNavbar);
    return () => window.removeEventListener('scroll', updateNavbar);
  }, []);

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.nav
      className={`fixed w-full z-40 transition-all duration-300 px-4 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
      style={{ height: navbarHeight }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`bg-background/70 backdrop-blur-lg rounded-full px-4 sm:px-6 py-3 shadow-lg transition-all duration-300 ${
            isScrolled ? 'shadow-md' : ''
          }`}
        >
          <div className="flex items-center justify-between">
            <motion.button
              className="text-xl font-bold hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                // Spin and navigate to artist portfolio page
                window.location.href = '/portfolio/artist_port';
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, type: 'spring' }}
            >
              TB
            </motion.button>
            <div className="hidden sm:flex space-x-6 items-center">
              <Link href="/" className="hover:text-primary transition-colors flex items-center gap-2">
                <Home className="h-5 w-5" />
                Home
              </Link>
              <Link href="/portfolio" className="hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link href="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
              <Button
                variant="outline"
                size="icon"
                onClick={handleThemeToggle}
                className="ml-4"
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="sm:hidden"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Menu
            </Button>
          </div>
        </div>
        {isDropdownOpen && (
          <div className="sm:hidden mt-4 bg-background/70 backdrop-blur-lg rounded-lg shadow-lg p-4">
            <Link href="/" className="block hover:text-primary transition-colors flex items-center gap-2">
              <Home className="h-5 w-5" />
              Home
            </Link>
            <Link href="/portfolio" className="block hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/blog" className="block hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="block hover:text-primary transition-colors">
              Contact
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={handleThemeToggle}
              className="w-full mt-2"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

// Typing Animation Component
const TypingAnimation = ({ texts, speed = 100, delay = 1000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    const handleTyping = () => {
      if (isDeleting) {
        // Deleting text
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        // Typing text
        setDisplayText((prev) => currentText.slice(0, prev.length + 1));
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts, speed, delay]);

  return (
    <span className="text-primary underline">
      {displayText}
      <span className="typed-cursor">|</span>
    </span>
  );
};

// Hero Section
const HeroSection = () => {
  const texts = ['Designer', 'Developer', 'Artist', 'Photographer'];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 blur-3xl transform -rotate-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: 'spring' }}
      />
      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center lg:text-left">
            <h1 className={`${typography.h1} text-primary mb-8`}>Tuhin Bhattacharya</h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8">
              I'm <TypingAnimation texts={texts} />
            </p>
            <p className={`${typography.p} mb-8`}>
              I am an enthusiastic student eager to explore the diverse fields of industry related to data, management
              and engineering. I like working in a challenging and dynamic environment, exploring new opportunities on
              a daily basis. I love meeting and communicating with diverse people and would emerge as a key team
              player at workplace.
            </p>
            <div className="flex gap-4 mb-8 justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button size="icon" variant="outline" asChild>
                  <Link href="https://linkedin.com" target="_blank">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button size="icon" variant="outline" asChild>
                  <Link href="mailto:tuhinbhattacharya9@gmail.com">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
          </div>

          {/* Profile Picture with 3D Effect */}
          <motion.div
            className="flex justify-end mt-8 lg:mt-0"
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: 'spring' }}
          >
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 blur-lg transform -rotate-6" />
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden"
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src={profilePhoto}
                  alt="Profile photo"
                  fill
                  className="object-cover transform transition-transform hover:scale-105 hover:rotate-3"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Resume Section
const ResumeSection = () => {
  const experienceItems = [
    {
      title: 'Senior Developer',
      subtitle: 'Company Name - 2018 - Current',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      title: 'Junior Developer',
      subtitle: 'Company Name - 2013 - 2016',
      description: 'Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
    {
      title: 'UI/UX Designer',
      subtitle: 'Company Name - 2010 - 2012',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
  ];

  const educationItems = [
    {
      title: 'Masters Degree',
      subtitle: 'University Name - 2007 - 2009',
      description: 'Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
    {
      title: 'Bachelors Degree',
      subtitle: 'University Name - 2002 - 2006',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      title: 'Diploma Course',
      subtitle: 'College Name - 1999 - 2001',
      description: 'Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
    {
      title: 'Graduation',
      subtitle: 'College Name - 1994 - 1998',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
  ];

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container px-4 mx-auto max-w-7xl">
        <h2 className={`${typography.h2} mb-8 text-center`}>My Resume</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div>
            <h3 className={`${typography.h3} mb-6 flex items-center gap-2`}>
              <Briefcase className="h-8 w-8" />
              Work Experience
            </h3>
            <ul className="space-y-6">
              {experienceItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <p className="text-muted-foreground">{item.subtitle}</p>
                    </CardHeader>
                    <CardContent>
                      <p>{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className={`${typography.h3} mb-6 flex items-center gap-2`}>
              <GraduationCap className="h-8 w-8" />
              Education
            </h3>
            <ul className="space-y-6">
              {educationItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <p className="text-muted-foreground">{item.subtitle}</p>
                    </CardHeader>
                    <CardContent>
                      <p>{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page
export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <HeroSection />
      <ResumeSection />
    </main>
  );
}