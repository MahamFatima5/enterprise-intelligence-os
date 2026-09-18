'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { FileText, Network, Bot, Zap } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Document Intelligence',
    description: "Extract insights from your organization's documents with advanced AI understanding and semantic search.",
    color: 'from-cyan-500 to-cyan-600',
    delay: 0,
  },
  {
    icon: Network,
    title: 'Knowledge Graph',
    description: 'Build comprehensive knowledge bases that connect documents, entities, and relationships automatically.',
    color: 'from-violet-500 to-violet-600',
    delay: 0.1,
  },
  {
    icon: Bot,
    title: 'AI Agents',
    description: 'Deploy intelligent agents that understand context, make decisions, and execute tasks autonomously.',
    color: 'from-indigo-500 to-indigo-600',
    delay: 0.2,
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description: 'Orchestrate complex business processes with AI-powered automation that learns and improves.',
    color: 'from-emerald-500 to-emerald-600',
    delay: 0.3,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export function FeaturesSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            <span className="text-white">Powerful Features for </span>
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Enterprise Scale
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Everything you need to transform organizational intelligence into actionable insights
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="group relative h-full overflow-hidden bg-slate-900/50 border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700/0 via-slate-700/0 to-slate-700/0 group-hover:from-cyan-500/10 group-hover:via-violet-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />

                  {/* Content */}
                  <div className="relative p-8">
                    {/* Icon with gradient background */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="mb-6"
                    >
                      <div className="relative w-12 h-12">
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        <div className={`relative w-full h-full bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Title and description */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-400 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Accent line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: 40 }}
                      transition={{ duration: 0.3 }}
                      className={`mt-4 h-1 bg-gradient-to-r ${feature.color} rounded`}
                    />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
