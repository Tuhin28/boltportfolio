'use client';

import { NavBar } from '@/components/nav-bar';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Blog() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      
      {/* Featured Blog Section */}
      <section className="pt-20 pb-10">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8">Featured Post</h2>
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-2xl">Featured Blog Title</CardTitle>
                <CardDescription>Published on January 1, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Preview of the featured blog post content...
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* All Blogs Section */}
      <section className="py-10">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8">All Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Add blog post cards here */}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}