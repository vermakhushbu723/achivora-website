import { useEffect } from 'react';
import {
  ArrowRight,
  Briefcase,
  Clock,
  GraduationCap,
  HeartPulse,
  MapPin,
  Rocket,
  Users,
} from 'lucide-react';
import { SITE } from '@/constants/site';
import { Reveal, Section, SectionHeading } from '@/components/home/Section';
import BuildTogether from '@/components/home/BuildTogether';

const OPENINGS = [
  { role: 'Senior React Developer', team: 'Engineering', type: 'Full-time', location: 'Noida / Hybrid', exp: '4-7 years' },
  { role: 'Laravel Backend Developer', team: 'Engineering', type: 'Full-time', location: 'Noida', exp: '3-6 years' },
  { role: 'Flutter Developer', team: 'Mobile', type: 'Full-time', location: 'Remote (India)', exp: '2-5 years' },
  { role: 'UI/UX Designer', team: 'Design', type: 'Full-time', location: 'Noida / Hybrid', exp: '3-6 years' },
  { role: 'SEO Specialist', team: 'Marketing', type: 'Full-time', location: 'Noida', exp: '2-4 years' },
  { role: 'QA Automation Engineer', team: 'Engineering', type: 'Full-time', location: 'Remote (India)', exp: '3-5 years' },
  { role: 'DevOps Engineer', team: 'Cloud', type: 'Full-time', location: 'Noida / Hybrid', exp: '4-8 years' },
  { role: 'Business Development Executive', team: 'Sales', type: 'Full-time', location: 'Noida', exp: '1-3 years' },
  { role: 'Content Writer', team: 'Marketing', type: 'Full-time', location: 'Remote (India)', exp: '1-3 years' },
  { role: 'Web Development Intern', team: 'Engineering', type: 'Internship', location: 'Noida', exp: '0-1 years' },
];

const PERKS = [
  { icon: Rocket, title: 'Real ownership', description: 'You own features end to end, not a slice of a ticket someone else scoped.' },
  { icon: GraduationCap, title: 'Learning budget', description: 'An annual budget for courses, certifications and conferences, no approval theatre.' },
  { icon: HeartPulse, title: 'Health cover', description: 'Medical insurance for you and your immediate family from day one.' },
  { icon: Clock, title: 'Flexible hours', description: 'Core overlap hours, and the rest of the day is yours to structure.' },
  { icon: Users, title: 'Senior mentorship', description: 'Paired with a senior engineer or designer for your first six months.' },
  { icon: Briefcase, title: 'Hybrid by default', description: 'Two days in the Noida office, three from wherever you work best.' },
];

export default function CareerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/25 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-3">
            Careers at Achivora
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-5">
            Build Things That <span className="text-primary">Actually Ship</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            We are a senior-heavy team in Noida working on products used by real
            businesses across India. {OPENINGS.length} roles open right now.
          </p>
        </div>
      </section>

      {/* Perks */}
      <Section band="surface">
        <SectionHeading
          eyebrow="Why Join Us"
          title="What working here is actually like"
          subtitle="No ping-pong tables in the pitch. Here is what we do offer."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PERKS.map((perk, i) => (
            <Reveal key={perk.title} delay={i * 70}>
              <div className="surface-card h-full p-7 hover:-translate-y-1.5 transition-all duration-300">
                <span className="w-14 h-14 rounded-2xl bg-job-tag-bg flex items-center justify-center mb-5">
                  <perk.icon className="h-7 w-7 text-primary" />
                </span>
                <h3 className="font-bold text-text-main text-lg mb-2">{perk.title}</h3>
                <p className="text-text-sub text-sm leading-relaxed">{perk.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Openings */}
      <Section band="canvas">
        <SectionHeading
          eyebrow="Open Roles"
          title="Current openings"
          subtitle={`Send your CV to ${SITE.careerEmail} mentioning the role in the subject line.`}
        />

        <div className="space-y-4">
          {OPENINGS.map((job, i) => (
            <Reveal key={job.role} delay={Math.min(i, 8) * 50}>
              <div className="surface-card p-6 flex flex-col md:flex-row md:items-center gap-4 hover:-translate-y-1 transition-all duration-300">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-bold text-text-main text-lg">{job.role}</h3>
                    <span className="tag bg-job-tag-bg text-job-tag-txt">{job.team}</span>
                    {job.type === 'Internship' && (
                      <span className="tag bg-tint-blue text-remote-txt">Internship</span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-text-sub text-sm">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-4 w-4" />
                      {job.exp}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {job.type}
                    </span>
                  </div>
                </div>

                <a
                  href={`mailto:${SITE.careerEmail}?subject=${encodeURIComponent(
                    `Application: ${job.role}`,
                  )}`}
                  className="btn-primary px-6 py-2.5 text-sm shrink-0"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-sub mb-4">
            Do not see a role that fits? We still want to hear from strong people.
          </p>
          <a href={SITE.emailHref} className="btn-secondary text-base px-8 py-3.5">
            Send an Open Application
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </Section>

      <BuildTogether />
    </div>
  );
}
