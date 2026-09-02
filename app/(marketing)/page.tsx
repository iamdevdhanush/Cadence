import { Hero } from "@/components/sections/Hero";
import { ChaosToControl } from "@/components/sections/ChaosToControl";
import { WorkflowEngine } from "@/components/sections/WorkflowEngine";
import { RealExamples } from "@/components/sections/RealExamples";
import { BuiltForExceptions } from "@/components/sections/BuiltForExceptions";
import { WhyCadence } from "@/components/sections/WhyCadence";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ChaosToControl />
      <WorkflowEngine />
      <RealExamples />
      <BuiltForExceptions />
      <WhyCadence />
      <CTA />
    </main>
  );
}