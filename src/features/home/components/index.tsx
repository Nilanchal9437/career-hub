import Card from "@/features/home/components/card";
import Container from "@/components/Container";
import {
  Search,
  GraduationCap,
  ChartLine,
  CircleStop,
  Landmark,
  MessageCircle,
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#f8fafc] min-h-screen flex flex-col">
      {/* Contenu principal */}
      <main className="flex-1 w-full flex flex-col items-center px-4">
        {/* Section Héros */}
        <section className="max-w-3xl w-full text-center mt-5">
          <h1 className="font-extrabold text-3xl md:text-5xl text-gray-900 leading-tight md:leading-tight mb-4">
            Explorez des emplois. Découvrez des formations universitaires. Obtenez des conseils de carrière — tout en un seul endroit.
          </h1>
          <p className="text-gray-500 text-base md:text-lg mb-8">
            Votre plateforme complète pour le développement de carrière, les opportunités éducatives et la croissance professionnelle.
          </p>
          {/* Cartes Fonctionnalités */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mt-6">
            {[
              {
                icon: <Search />,
                link: "/job",
                title: "Explorer les emplois",
                description:
                  "Trouvez des opportunités correspondant à vos compétences et objectifs professionnels.",
                lable: "Explorer les emplois →",
                bgcolor: "bg-blue-100",
                btncolor: "bg-blue-600",
                btncolorHover: "bg-blue-700",
              },
              {
                icon: <GraduationCap className="text-[#D97706]" />,
                link: "/course",
                title: "Universités & Formations",
                description:
                  "Découvrez des parcours éducatifs pour faire progresser votre carrière.",
                lable: "Parcourir les cours →",
                bgcolor: "bg-yellow-100",
                btncolor: "bg-yellow-500",
                btncolorHover: "bg-yellow-600",
              },
              {
                icon: <ChartLine className="text-[#16A34A]" />,
                link: "/career-guidance",
                title: "Conseils de carrière",
                description:
                  "Obtenez des conseils d’experts et des outils pour planifier votre parcours professionnel.",
                lable: "Obtenir des conseils →",
                bgcolor: "bg-green-100",
                btncolor: "bg-green-500",
                btncolorHover: "bg-green-600",
              },
            ].map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </section>
        <section className="w-full bg-[#f1f5f9] mt-16 py-10">
          <Container>
            {/* Section Pourquoi choisir */}
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
              Pourquoi choisir SmartEdu ?
            </h2>
            <div className="flex flex-col md:flex-row gap-6 ">
              {/* Recommandations personnalisées */}
              <div className="bg-white rounded-xl shadow p-6 flex-1 flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-2 mb-2">
                  <span className="text-blue-500 text-xl">
                    <CircleStop />
                  </span>
                </div>
                <h4 className="font-bold mb-1 text-gray-900">
                  Recommandations personnalisées
                </h4>
                <p className="text-gray-500 text-sm text-center">
                  Recevez des suggestions d’emplois et de formations adaptées à vos compétences, votre expérience et vos objectifs professionnels.
                </p>
              </div>
              {/* Institutions vérifiées */}
              <div className="bg-white rounded-xl shadow p-6 flex-1 flex flex-col items-center">
                <div className="bg-yellow-100 rounded-full p-2 mb-2">
                  <span className="text-yellow-500 text-xl">
                    <Landmark />
                  </span>
                </div>
                <h4 className="font-bold mb-1 text-gray-900">
                  Institutions vérifiées
                </h4>
                <p className="text-gray-500 text-sm text-center">
                  Accédez à des formations issues d’universités et d’institutions éducatives accréditées.
                </p>
              </div>
              {/* Conseils d’experts */}
              <div className="bg-white rounded-xl shadow p-6 flex-1 flex flex-col items-center">
                <div className="bg-green-100 rounded-full p-2 mb-2">
                  <span className="text-green-500 text-xl">
                    <MessageCircle />
                  </span>
                </div>
                <h4 className="font-bold mb-1 text-gray-900">
                  Conseils d’experts en carrière
                </h4>
                <p className="text-gray-500 text-sm text-center">
                  Échangez avec des conseillers en carrière et des professionnels du secteur pour obtenir des conseils.
                </p>
              </div>
            </div>
          </Container>
        </section>
        {/* Section Témoignages */}
        <Container className="w-full mt-16 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
            Ce que disent nos utilisateurs
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Témoignage 1 */}
            <div className="bg-white rounded-xl shadow p-6 flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 rounded-full p-2 text-blue-500 text-xl">
                  👨‍💻
                </span>
                <div>
                  <div className="font-bold text-sm text-gray-900">Michael Johnson</div>
                  <div className="text-xs text-gray-500">
                    Développeur logiciel
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                « SmartEdu m’a aidé à trouver à la fois un bootcamp de programmation et un emploi dans l’industrie tech en quelques mois. Les conseils de carrière ont été inestimables. »
              </p>
            </div>
            {/* Témoignage 2 */}
            <div className="bg-white rounded-xl shadow p-6 flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-yellow-100 rounded-full p-2 text-yellow-500 text-xl">
                  👩‍💼
                </span>
                <div>
                  <div className="font-bold text-sm text-gray-900">Sarah Williams</div>
                  <div className="text-xs text-gray-500">
                    Spécialiste marketing
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                « Les recommandations de formations universitaires étaient parfaites. J’ai terminé mon certificat en marketing digital et trouvé un emploi grâce à la plateforme. »
              </p>
            </div>
            {/* Témoignage 3 */}
            <div className="bg-white rounded-xl shadow p-6 flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-green-100 rounded-full p-2 text-green-500 text-xl">
                  🧑‍💼
                </span>
                <div>
                  <div className="font-bold text-sm text-gray-900">David Chen</div>
                  <div className="text-xs text-gray-500">Analyste d’affaires</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                « Les outils de guidance de carrière m’ont aidé à passer de la finance à l’analytique de données. La feuille de route fournie a rendu la transition beaucoup plus fluide. »
              </p>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
