import { useTranslations } from 'next-intl';

import { PricingInformation } from '@/features/billing/PricingInformation';
import { Section } from '@/features/landing/Section';
import { PLAN_ID } from '@/utils/AppConfig';

export const Pricing = () => {
  const t = useTranslations('Pricing');

  return (
    <Section
      id="blog"
      subtitle={t('section_subtitle')}
      title={t('section_title')}
      description={t('section_description')}
    >
      <PricingInformation
        buttonList={{
          [PLAN_ID.FREE]: (
            <>
              {/**
                * Sign-up CTA (disabled for now).
                * Keep for future re-enable.
                */}
              {/*
              <Link
                className={buttonVariants({
                  size: 'sm',
                  className: 'mt-5 w-full',
                })}
                href="/sign-up"
              >
                {t('button_text')}
              </Link>
              */}
              <span className="mt-5 inline-block w-full text-center text-sm font-medium text-muted-foreground">
                {t('button_text')}
              </span>
            </>
          ),
          [PLAN_ID.PREMIUM]: (
            <>
              {/**
                * Sign-up CTA (disabled for now).
                * Keep for future re-enable.
                */}
              {/*
              <Link
                className={buttonVariants({
                  size: 'sm',
                  className: 'mt-5 w-full',
                })}
                href="/sign-up"
              >
                {t('button_text')}
              </Link>
              */}
              <span className="mt-5 inline-block w-full text-center text-sm font-medium text-muted-foreground">
                {t('button_text')}
              </span>
            </>
          ),
          [PLAN_ID.ENTERPRISE]: (
            <>
              {/**
                * Sign-up CTA (disabled for now).
                * Keep for future re-enable.
                */}
              {/*
              <Link
                className={buttonVariants({
                  size: 'sm',
                  className: 'mt-5 w-full',
                })}
                href="/sign-up"
              >
                {t('button_text')}
              </Link>
              */}
              <span className="mt-5 inline-block w-full text-center text-sm font-medium text-muted-foreground">
                {t('button_text')}
              </span>
            </>
          ),
        }}
      />
    </Section>
  );
};
