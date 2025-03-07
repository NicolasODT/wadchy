import Header from '../components/Header';
import Services from '../components/Services';
import Team from '../components/Team';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import BurgerNav from '../components/BurgerNav';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main className="relative">
            <BurgerNav />
            <Header />
            <Pricing />
            <Services />
            <Team />

            <Contact />

            <Footer />
        </main>
    );
}