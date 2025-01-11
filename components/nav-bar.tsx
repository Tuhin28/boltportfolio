'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Palette, Code, BookOpen, Mail, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6" />
            <span className="font-bold text-lg">Portfolio</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/portfolio">
              <Button variant="ghost" size="sm">
                <Palette className="h-4 w-4 mr-2" />
                Portfolio
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="ghost" size="sm">
                <BookOpen className="h-4 w-4 mr-2" />
                Blog
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" size="sm">
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-10 h-10"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link href="/portfolio">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Palette className="h-4 w-4 mr-2" />
                  Portfolio
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Blog
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-full justify-start"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4 mr-2" />
                ) : (
                  <Moon className="h-4 w-4 mr-2" />
                )}
                Theme
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}