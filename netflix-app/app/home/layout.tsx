'use client';
import Footer from '@/assets/components/Common/Footer';
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
      <Footer></Footer>
    </section>
  );
}
