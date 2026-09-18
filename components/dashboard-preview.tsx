'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Database, Brain, Zap, TrendingUp } from 'lucide-react';

const agentData = [
  { name: 'Mon', agents: 42, tasks: 126 },
  { name: 'Tue', agents: 55, tasks: 185 },
  { name: 'Wed', agents: 48, tasks: 152 },
  { name: 'Thu', agents: 61, tasks: 198 },
  { name: 'Fri', agents: 71, tasks: 245 },
  { name: 'Sat', agents: 68, tasks: 212 },
  { name: 'Sun', agents: 54, tasks: 156 },
];

const performanceData = [
  { name: '00:00', performance: 78 },
  { name: '04:00', performance: 82 },
  { name: '08:00', performance: 88 },
  { name: '12:00', performance: 94 },
  { name: '16:00', performance: 91 },
  { name: '20:00', performance: 86 },
  { name: '24:00', performance: 82 },
];

const stats = [
  { icon: Database, label: 'Documents Indexed', value: '12.4M', color: 'from-cyan-500 to-cyan-600' },
  { icon: Brain, label: 'AI Agents Active', value: '847', color: 'from-violet-500 to-violet-600' },
  { icon: Zap, label: 'Tasks Processed', value: '2.1M', color: 'from-emerald-500 to-emerald-600' },
  { icon: TrendingUp, label: 'System Intelligence', value: '94.2%', color: 'from-orange-500 to-orange-600' },
];

export function DashboardPreview() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-64 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
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
            <span className="text-white">Intelligence in </span>
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Real-Time
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Monitor AI agent activity, document processing, and system performance at a glance
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-slate-400 mb-2">{stat.label}</p>
                      <p className="text-3xl font-bold text-white">{stat.value}</p>
                    </div>
                    <div className={`bg-gradient-to-br ${stat.color} p-2.5 rounded-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Charts section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Agent Activity Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900/50 border-slate-700/50 p-6 hover:border-slate-600/50 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">Agent Activity</h3>
                <p className="text-sm text-slate-400">Weekly task processing trend</p>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={agentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: '1px solid #475569',
                      borderRadius: '8px',
                    }}
                    labelStyle={{ color: '#e2e8f0' }}
                  />
                  <Bar dataKey="tasks" fill="#06b6d4" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          {/* Performance Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900/50 border-slate-700/50 p-6 hover:border-slate-600/50 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">System Performance</h3>
                <p className="text-sm text-slate-400">AI inference quality score</p>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" domain={[0, 100]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: '1px solid #475569',
                      borderRadius: '8px',
                    }}
                    labelStyle={{ color: '#e2e8f0' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="performance"
                    stroke="#a78bfa"
                    strokeWidth={2}
                    dot={{ fill: '#a78bfa', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </div>

        {/* Large preview card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-slate-900/50 via-slate-900/30 to-slate-900/50 border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 p-8">
            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Knowledge Graph Overview</h3>
                  <p className="text-sm text-slate-400">Real-time entity relationships and insights</p>
                </div>
              </div>

              {/* Simplified knowledge graph visualization */}
              <div className="h-64 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid meet">
                  {/* Connection lines */}
                  <line x1="80" y1="120" x2="200" y2="80" stroke="#475569" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="80" y1="120" x2="200" y2="160" stroke="#475569" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="320" y1="120" x2="200" y2="80" stroke="#475569" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="320" y1="120" x2="200" y2="160" stroke="#475569" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="200" y1="80" x2="200" y2="160" stroke="#475569" strokeWidth="1" strokeDasharray="3,3" />

                  {/* Left node */}
                  <circle cx="80" cy="120" r="20" fill="#06b6d4" opacity="0.8" />
                  <text x="80" y="125" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                    Doc
                  </text>

                  {/* Central nodes */}
                  <circle cx="200" cy="80" r="20" fill="#a78bfa" opacity="0.8" />
                  <text x="200" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                    Entity
                  </text>

                  <circle cx="200" cy="160" r="20" fill="#34d399" opacity="0.8" />
                  <text x="200" y="165" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
                    Context
                  </text>

                  {/* Right node */}
                  <circle cx="320" cy="120" r="20" fill="#f59e0b" opacity="0.8" />
                  <text x="320" y="125" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                    Agent
                  </text>
                </svg>
              </div>

              <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-700/50">
                <div className="text-center">
                  <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                    1.2M
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Entities</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-violet-500 bg-clip-text text-transparent">
                    4.8M
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Relationships</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                    98.3%
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Accuracy</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                    2.1s
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Query Time</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
