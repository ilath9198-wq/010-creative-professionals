import type { Metadata } from 'next';
import './globals.css';
import { StudioProvider } from '../components/StudioContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreativeCanvasNavigation from '../components/CreativeCanvasNavigation';
import ProjectDetailModal from '../components/ProjectDetailModal';
import QuickEnquiryModal from '../components/QuickEnquiryModal';
import LightboxModal from '../components/LightboxModal';

export const metadata: Metadata = {
  title: 'ATELIER N°10 – Multidisciplinary Creative Studio | Architecture, Interiors & Identity',
  description:
    'Ideas Into Form. Creativity Into Experience. An international creative practice bringing together architecture, interior design, brand identity systems, and digital platforms across Zürich, Milan, and Tokyo.',
  keywords: [
    'Creative Studio',
    'Architecture Studio',
    'Interior Design',
    'Brand Identity',
    'UI/UX Design',
    'Spatial Design',
    'ATELIER N°10',
    'Zürich Architecture',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-ivory-100 text-charcoal-950 min-h-screen flex flex-col font-sans selection:bg-terracotta-500 selection:text-white">
        <StudioProvider>
          <Header />
          <CreativeCanvasNavigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <ProjectDetailModal />
          <QuickEnquiryModal />
          <LightboxModal />
        </StudioProvider>
      </body>
    </html>
  );
}
