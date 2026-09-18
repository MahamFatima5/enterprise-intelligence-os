import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { DashboardPreview } from '@/components/dashboard-preview';

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <DashboardPreview />
      <footer className="border-t border-slate-800/50 bg-slate-950/80 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white">Enterprise Intelligence OS</p>
            <p className="text-sm text-slate-500">The operating system for organizational intelligence.</p>
          </div>
          <p className="text-sm text-slate-500">© 2025 Enterprise Intelligence OS</p>
        </div>
      </footer>
    </main>
  );
}

