'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-md border-b border-slate-800/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-lg blur opacity-75" />
            <div className="relative w-10 h-10 bg-slate-950 rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                ℌ
              </span>
            </div>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold tracking-tight">Enterprise</h1>
            <p className="text-xs text-slate-400">Intelligence OS</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <Button
            variant="ghost"
            className="text-sm text-slate-300 hover:text-white hover:bg-slate-800/50"
          >
            Sign In
          </Button>
          <Button
            className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white font-semibold"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </nav>
  );
}
