import Image from 'next/image';
import { ReactNode } from 'react';
import PromoCarousel from '@/app/auth/PromoCarousel';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 min-h-screen bg-base-100">
      <section className="flex flex-col px-6 py-4 content-between">
        <Image
          src="/sh-logo-teal-yellow.svg"
          width={149.33}
          height={32}
          alt="ShipmentX Logo"
          className="h-10 grow-0"
          priority
        />
        <div className="grow flex flex-col justify-center w-96 mx-auto overflow-visible md:max-w-sm max-w-xs">
          {children}
        </div>
      </section>

      <section className="promo-section flex flex-col items-center justify-around p-6 content-between bg-teal-950 bg-[url('/sign-up_promo/Tech1.jpg')] text-white">
        <PromoCarousel
          images={[
            { src: '/sign-up_promo/trip-progress-img.png', alt: 'Promo 1' },
            { src: '/sign-up_promo/chat-pic.png', alt: 'Promo 2' },
            { src: '/sign-up_promo/docs-pic.png', alt: 'Promo 3' }
          ]}
        />
        <div className="promo-content sm:w-3/4 mt-4 lg:mt-0 gap-4 content-center justify-center">
          <h2 className="text-2xl font-semibold text-center">Instant Visibility, Instant Efficiency</h2>
          <p className="text-center">
            Real-time tracking with secure links. Keep drivers productive and shippers informed—no extra steps.
          </p>
        </div>
      </section>
    </main>
  );
}
