import { ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';

/** Closing call-to-action band used at the bottom of inner pages. */
export default function BuildTogether() {
  return (
    <section className="relative py-12 bg-primary-gradient overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-28 -right-28 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
          Have a project in mind?
        </h2>
        <p className="mt-3 text-lg text-white/75 leading-relaxed">
          Tell us what you need — website, app, software or marketing — and get a
          written estimate within two working days.
        </p>
        <Link to="/contact" className="btn-white text-base px-8 py-3.5 mt-7">
          Get a Free Quote
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
