import Navbar       from '@/components/Navbar'
import Hero         from '@/components/Hero'
import About        from '@/components/About'
import Programs     from '@/components/Programs'
import Testimonials from '@/components/Testimonials'
import CTA          from '@/components/CTA'
import Footer       from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
