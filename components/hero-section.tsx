'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full mix-blend-screen blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-600/10 rounded-full mix-blend-screen blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700/50 bg-slate-900/30 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-slate-300">Welcome to the future of enterprise AI</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-black tracking-tight mb-6"
        >
          <span className="text-white">Your Organization&apos;s </span>
          <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
            Intelligence
          </span>
          <span className="text-white">, Connected.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Connect your organizational documents, knowledge, and AI agents with advanced RAG technology.
          Automate workflows, unlock insights, and scale intelligent operations across your enterprise.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
  size="lg"
  onClick={() => router.push('/workspace')}
  className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold h-12 px-8 rounded-lg group"
>
          
            Get Started
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-700 bg-slate-900/40 text-slate-300 hover:text-white hover:bg-slate-800/60 font-semibold h-12 px-8 rounded-lg"
          >
            Explore Platform
          </Button>
        </motion.div>

        {/* Visual element - animated knowledge graph preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-700/50"
        >
          {/* Glass morphism background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-950/30 to-slate-900/50 backdrop-blur-xl" />

          {/* Animated grid */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="url(#gridGradient)" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>

          {/* Animated nodes */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="relative w-48 h-48"
            >
              {/* Central node */}
              <motion.div className="absolute left-1/2 top-1/2 w-8 h-8 -ml-4 -mt-4">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full blur opacity-75 animate-pulse" />
                  <div className="relative w-full h-full bg-slate-900 rounded-full border 2 border-cyan-400 flex items-center justify-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* Orbiting nodes */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: Math.cos((i * Math.PI) / 2) * 80,
                    y: Math.sin((i * Math.PI) / 2) * 80,
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute left-1/2 top-1/2 w-6 h-6 -ml-3 -mt-3"
                >
                  <div className="w-full h-full bg-gradient-to-br from-violet-500/60 to-indigo-600/60 rounded-full border border-violet-400/40 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-violet-300 rounded-full" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <p className="text-slate-400 text-sm font-medium">AI Knowledge Graph</p>
              <p className="text-slate-500 text-xs mt-1">Real-time intelligence synthesis</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
