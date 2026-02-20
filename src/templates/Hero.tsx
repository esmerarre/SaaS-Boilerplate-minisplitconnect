import { InstagramLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { badgeVariants } from '@/components/ui/badgeVariants';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <Section className="py-12">
      <CenteredHero
        banner={(
          <a
            className={badgeVariants()}
            href="https://www.instagram.com/minisplitconnect?igsh=MTh2M2pmMGo2ZWg3ZA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogoIcon className="mr-1 size-5" />
            {' '}
            {t('follow_twitter')}
          </a>
        )}
        title={(
          <div className="flex justify-center">
            {/*
              Tailwind sizing notes:
              - h-auto: keep aspect ratio
              - w-[520px]: base width on smallest screens
              - sm:w-[680px]: width on small screens and up (≥640px)
              - md:w-[820px]: width on medium screens and up (≥768px)
              - lg:w-[980px]: width on large screens and up (≥1024px)
            */}
            <Image
              src="/assets/images/mini-split-logo.png"
              alt="MiniSplit Connect"
              width={980}
              height={490}
              priority
              className="h-auto w-[520px] sm:w-[680px] md:w-[820px] lg:w-[980px]"
            />
          </div>
        )}
      />
    </Section>
  );
};
