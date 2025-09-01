import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#1e293b] text-gray-200 w-full py-10 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Image height={30} width={30} src="/logo.png" alt="icône" />
              <span className="font-bold text-lg text-white">CareerHub</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Votre plateforme complète pour le développement de carrière,
              l’éducation et la croissance professionnelle.
            </p>
            <div className="flex gap-3 mt-2">
              <Link href="#" aria-label="Facebook">
                <span className="text-xl hover:text-white">
                  <Facebook />
                </span>
              </Link>
              <Link href="#" aria-label="Twitter">
                <span className="text-xl hover:text-white">
                  <Twitter />
                </span>
              </Link>
              <Link href="#" aria-label="Linkedin">
                <span className="text-xl hover:text-white">
                  <Linkedin />
                </span>
              </Link>
              <Link href="#" aria-label="Instagram">
                <span className="text-xl hover:text-white">
                  <Instagram />
                </span>
              </Link>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Nos Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/career-guidance" className="hover:underline">
                  Emplois
                </Link>
              </li>
              <li>
                <Link href="/career-guidance" className="hover:underline">
                  Orientation professionnelle
                </Link>
              </li>
              <li>
                <Link href="/course" className="hover:underline">
                  Cours
                </Link>
              </li> 
            </ul>
          </div>
          {/* Contact Us */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Contactez-nous</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-400">
                  <MapPin className="h-4 w-4" />
                </span>
                123 Rue de la Carrière, Ville de l’Emploi
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">
                  <Phone className="h-4 w-4" />
                </span>
                (+555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">
                  <Mail className="h-4 w-4" />
                </span>
                info@careerhub.com
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs mt-8 pt-8 border-t border-gray-500">
          © {new Date().getFullYear()} CareerHub. Tous droits réservés.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
