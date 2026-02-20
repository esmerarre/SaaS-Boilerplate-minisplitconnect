import { StickyBanner } from '@/features/landing/StickyBanner';

export const DemoBanner = () => (
  <StickyBanner>
    Live Demo of SaaS Boilerplate -
    {' '}
    {/**
      * Sign-up entry point (disabled for now).
      * Keep for future re-enable.
      */}
    {/* <Link href="/sign-up">Explore the User Dashboard</Link> */}
    <span className="cursor-default">Explore the User Dashboard</span>
  </StickyBanner>
);
