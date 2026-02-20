import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';

import { Logo } from './Logo';

export const Navbar = () => {
  const t = useTranslations('Navbar');

  return (
    <Section className="px-3 py-6">
      <CenteredMenu
        logo={<Logo />}
        rightMenu={(
          <>
            {/* PRO: Dark mode toggle button */}
            <li data-fade>
              <LocaleSwitcher />
            </li>
            <li className="ml-1 mr-2.5" data-fade>
              <Link href="/sign-in">{t('sign_in')}</Link>
            </li>
            {/**
              * Sign-up entry point (disabled for now).
              * Keep for future re-enable.
              */}
            {/*
            <li>
              <Link className={buttonVariants()} href="/sign-up">
                {t('sign_up')}
              </Link>
            </li>
            */}
          </>
        )}
      >
        <li>
          {/* <Link href="/sign-up">{t('product')}</Link> */}
          <Link href="#product">{t('product')}</Link>
        </li>

        <li>
          {/* <Link href="/sign-up">{t('docs')}</Link> */}
          <Link href="#docs">{t('docs')}</Link>
        </li>

        <li>
          {/* <Link href="/sign-up">{t('blog')}</Link> */}
          <Link href="#blog">{t('blog')}</Link>
        </li>

        <li>
          {/* <Link href="/sign-up">{t('community')}</Link> */}
          <Link href="#community">{t('community')}</Link>
        </li>

        <li>
          {/* <Link href="/sign-up">{t('company')}</Link> */}
          <Link href="#company">{t('company')}</Link>
        </li>
      </CenteredMenu>
    </Section>
  );
};
