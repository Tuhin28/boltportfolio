'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail, Star, Award, Code, Briefcase, Palette } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const LogoTransition = ({ isAnimating, onAnimationComplete }) => {
  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 1, rotate: 0 }}
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 1.5,
              times: [0, 0.4, 0.8, 1]
            }}
            onAnimationComplete={onAnimationComplete}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-3xl font-bold">TB</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="flex items-center justify-center"
            >
              <Palette className="h-12 w-12" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const updateNavbar = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', updateNavbar);
    return () => window.removeEventListener('scroll', updateNavbar);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
    router.push('/artist-portfolio');
  };

  return (
    <>
      <LogoTransition 
        isAnimating={isAnimating} 
        onAnimationComplete={handleAnimationComplete} 
      />
      <motion.nav 
        className={`fixed w-full z-40 transition-all duration-300 px-4 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className={`bg-background/70 backdrop-blur-lg rounded-full px-4 sm:px-6 py-3 shadow-lg transition-all duration-300 ${
            isScrolled ? 'shadow-md' : ''
          }`}>
            <div className="flex items-center justify-between">
              <motion.button
                onClick={handleLogoClick}
                className="text-xl font-bold hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                TB
              </motion.button>
              <div className="hidden sm:flex space-x-6">
                <Link href="#portfolio" className="hover:text-primary transition-colors">
                  Portfolio
                </Link>
                <Link href="#blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
              <Button variant="outline" size="sm" className="sm:hidden">
                Menu
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

// Update the ProjectCard component to be more responsive
const ProjectCard = ({ children, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="w-full"
    >
      <Card {...props} className="h-full">
        {children}
      </Card>
    </motion.div>
  );
};

export default function Portfolio() {
  const skills = [
    'Power BI', 'SQL', 'DAX', 'Power Query', 'Python',
    'Data Visualization', 'Business Intelligence', 'Data Analysis', 'Problem Solving'
  ];

  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-20 flex items-center">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Tuhin Bhattacharya</h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto lg:mx-0">
                Business Intelligence Developer with expertise in Power BI, SQL, and data analysis
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </motion.div>
            </div>

            {/* Profile Picture */}
            <motion.div 
              className="flex justify-center mt-8 lg:mt-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >
              <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 blur-lg transform -rotate-6"></div>
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center shadow-xl">
                  <div className="w-[90%] h-[90%] rounded-full bg-muted flex items-center justify-center transform transition-transform hover:scale-105 hover:rotate-3">
                    <span className="text-lg text-muted-foreground"><img src="components\images\Leonardo_Anime_XL_A_dazzlingly_beaming_gentleman_exuding_warmt_3.jpg" alt="Profile-photo" /></span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Briefcase className="h-8 w-8" />
              Experience
            </h2>
            <div className="grid gap-6">
              <ProjectCard>
                <CardHeader>
                  <CardTitle>Business Intelligence Developer</CardTitle>
                  <p className="text-muted-foreground">Celebal Technologies | Aug 2023 - Nov 2023</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Led a team of 4 professionals in developing a 54-page Power BI P&L report</li>
                    <li>Integrated over 300 measures for financial analysis</li>
                    <li>Optimized query loading times by 40%</li>
                  </ul>
                </CardContent>
              </ProjectCard>
              <ProjectCard>
                <CardHeader>
                  <CardTitle>Internal Project Lead</CardTitle>
                  <p className="text-muted-foreground">Pure Storage | Oct 2023 - Dec 2023</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Led documentation efforts for internal projects</li>
                    <li>Created KPI sheets for 5 projects</li>
                    <li>Documented over 200 SQL queries</li>
                  </ul>
                </CardContent>
              </ProjectCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Code className="h-8 w-8" />
              Projects
            </h2>
            <div className="grid gap-6">
              <ProjectCard>
                <CardHeader>
                  <CardTitle>Hydrogen Production Analysis</CardTitle>
                  <p className="text-muted-foreground">Jun 2022 - Aug 2023</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Developed simulation environment on ASPEN-Plus and ASPEN-Hysis for biomass gasification</p>
                  <Badge>Team Size: 5</Badge>
                </CardContent>
              </ProjectCard>
              <ProjectCard>
                <CardHeader>
                  <CardTitle>Aqueous Retarded Acid Formulation</CardTitle>
                  <p className="text-muted-foreground">Jun 2022 - Aug 2023</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Collaborated on aqueous retarded acid stimulation for limestone reservoirs</p>
                  <Badge>Team Size: 6</Badge>
                </CardContent>
              </ProjectCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Certifications Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Star className="h-8 w-8" />
              Skills & Certifications
            </h2>
            <div className="grid gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge variant="secondary">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Microsoft Power BI Desktop for Business Intelligence (2023)</li>
                  <li>Advanced DAX for Microsoft Power BI Desktop</li>
                  <li>6 Star on HackerRank SQL</li>
                  <li>50+ SQL questions solved on LeetCode</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Award className="h-8 w-8" />
              Education
            </h2>
            <div className="grid gap-6">
              <ProjectCard>
                <CardHeader>
                  <CardTitle>Bachelor in Chemical Engineering</CardTitle>
                  <p className="text-muted-foreground">Jadavpur University | Aug 2019 - May 2023</p>
                </CardHeader>
                <CardContent>
                  <p>CGPA: 8.32</p>
                  <p>Ranked in the top 99.3 percentile in WBJEE exam</p>
                </CardContent>
              </ProjectCard>
              <ProjectCard>
                <CardHeader>
                  <CardTitle>Higher Secondary Education</CardTitle>
                  <p className="text-muted-foreground">Bankura Banga Vidalaya | Apr 2016 - May 2018</p>
                </CardHeader>
                <CardContent>
                  <p>Score: 457/500</p>
                  <p>Ranked in the top 99.9 percentile in the Higher Secondary exam</p>
                </CardContent>
              </ProjectCard>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}