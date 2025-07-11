import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ResumeSection } from "@/components/resume-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsSection } from "@/components/certifications-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <BlogSection />
      <ContactSection />
    </main>
  )
}
