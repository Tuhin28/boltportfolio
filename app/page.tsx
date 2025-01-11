'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Palette, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  return (
    <div className="fixed w-full z-50 px-4 py-4">
      <div className="container mx-auto">
        <div className="bg-background/80 backdrop-blur-lg rounded-xl px-6 py-3 shadow-lg">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="relative w-[200px] h-[60px]">
                <Image
                  src="/Tuhin-Bhattacharya-1-11-2025.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="200px"
                />
              </div>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/about" className="hover:text-primary transition-colors">
                About
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
            </div>
            <Button variant="outline" size="sm" className="md:hidden">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
          }}
          className="w-12 h-12 bg-primary"
        />
      </div>
    );
  }

  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-background"
      style={{
        backgroundImage: "url('/api/placeholder/1920/1080')"
      }}
    >
      <NavBar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 max-w-xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Creative
                <br />
                Developer
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Exploring the intersection of technology and creativity through code,
                design, and artistic expression.
              </p>
              
              <div className="flex flex-row gap-4">
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    className="relative overflow-hidden transition-transform hover:scale-105 active:scale-95"
                  >
                    <span className="relative z-10 flex items-center">
                      <Palette className="mr-2 h-5 w-5" />
                      View Portfolio
                    </span>
                  </Button>
                </Link>
                
                <Link href="/blog">
                  <Button
                    size="lg"
                    variant="outline"
                    className="relative overflow-hidden transition-transform hover:scale-105 active:scale-95"
                  >
                    <span className="relative z-10 flex items-center">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Read Blog
                    </span>
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Profile Picture - Larger and Right-Aligned */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 flex justify-end"
            >
              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                <div className="w-88 h-88 rounded-full bg-muted flex items-center justify-center">
                  <div className="relative w-[340px] h-[340px]">
                    <Image
                      src="/Leonardo_Anime_XL_A_dazzlingly_beaming_gentleman_exuding_warmt_3.jpg"
                      alt="Profile Picture"
                      fill
                      className="rounded-full object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground">
              I am a creative developer with a passion for blending technology and art. 
              My work spans across web development, design, and digital art, aiming to 
              create immersive and engaging experiences.
            </p>
          </div>

          <div className="flex-1 relative h-[500px]">
            <Image
              src="/Leonardo_Anime_XL_A_dazzlingly_beaming_gentleman_exuding_warmt_3.jpg"
              alt="About Me"
              fill
              className="rounded-lg object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}