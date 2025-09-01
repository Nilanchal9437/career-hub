"use client";

import * as React from "react";
import {
  CircleCheck,
  Book,
  GraduationCap,
  Cpu,
  BriefcaseBusiness,
  BookMarked,
} from "lucide-react";
import useCareerGuidance from "@/features/career/api/get";
import { getCookie } from "@/libs/Cookie";
import Container from "@/components/Container";

const universities = [
  {
    id: 1,
    name: "Faculté des Sciences",
    courses: [
      { id: 1, name: "Informatique / Data Science" },
      { id: 2, name: "Informatique" },
    ],
  },
  {
    id: 2,
    name: "ENSA",
    courses: [
      { id: 1, name: "Génie Informatique" },
      { id: 2, name: "Big Data / Cybersécurité" },
      { id: 3, name: "Tronc commun" },
    ],
  },
  {
    id: 3,
    name: "UIR",
    courses: [
      { id: 1, name: "Big Data / SSI / IA" },
      { id: 2, name: "Ingénierie informatique" },
    ],
  },
  {
    id: 4,
    name: "ENSET",
    courses: [
      { id: 1, name: "Systèmes Informatiques Distribués" },
      { id: 2, name: "Métiers du développement logiciel" },
    ],
  },
  {
    id: 5,
    name: "ENSIAS",
    courses: [
      { id: 1, name: "IA, Data, SSI, Génie logiciel" },
      { id: 2, name: "Tronc commun" },
    ],
  },
  {
    id: 6,
    name: "ENSAM",
    courses: [
      { id: 1, name: "Systèmes embarqués / Télécom" },
      { id: 2, name: "Tronc commun" },
    ],
  },
];

function Career() {
  const [load, setLoad] = React.useState<boolean>(true);
  const [store, setStore] = React.useState<any>(null);

  const { getCareerGuidance } = useCareerGuidance();

  const getCareer = async () => {
    setLoad(true);
    const { data } = await getCareerGuidance({
      university: `${decodeURIComponent(
        getCookie("selectedUniversity") ?? universities[0].name
      )}`,
      course: `${decodeURIComponent(
        getCookie("selectedCourse") ?? universities[0].courses[0].name
      )}`,
    });

    if (data.success) {
      setStore(data);
    } else {
      setStore(null);
    }
    setLoad(false);
  };

  React.useEffect(() => {
    getCareer();
  }, []);

  return (
    <Container className="py-0 md:py-8">
      {load ? (
        <div>Chargement...</div>
      ) : (
        <>
          {/* Nom du cours */}
          <section className="mx-auto px-2 md:px-6 pt-8">
            <h2 className="font-bold text-2xl text-gray-900">
              {store?.courseName}
            </h2>
          </section>

          {/* Tronc Commun */}
          <section className="mx-auto px-2 md:px-6 pt-8">
            <div className="flex items-center gap-3 mb-6">
              <Book className="text-green-500" />
              <h2 className="font-bold text-2xl text-gray-900">
                Tronc Commun (Année Fondamentale)
              </h2>
            </div>
          </section>

          {/* Licence */}
          <section className="mx-auto px-2 md:px-6 mt-14">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-blue-500" />
              <h2 className="font-bold text-2xl text-gray-900">Licence</h2>
            </div>
          </section>

          {/* Master */}
          <section className="mx-auto px-2 md:px-6 mt-14">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="text-purple-500" />
              <h2 className="font-bold text-2xl text-gray-900">Niveau Master</h2>
            </div>
            <p className="text-gray-500 mb-6 ml-1">
              Spécialisez-vous dans des compétences à fort impact. Des compétences pour l’avenir.
            </p>
          </section>

          {/* Marché de l'emploi Marocain */}
          <section className="mx-auto px-2 md:px-6 mt-14">
            <div className="flex items-center gap-3 mb-6">
              <BriefcaseBusiness className="text-green-500" />
              <h2 className="font-bold text-2xl text-gray-900">
                Marché de l’emploi au Maroc
              </h2>
            </div>
            <p className="text-gray-500 mb-6 ml-1">
              Aperçu du marché de l’emploi local, opportunités et tendances.
            </p>
          </section>

          {/* Stack technologique */}
          <section className="mx-auto px-2 md:px-6 mt-14">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="text-blue-500" />
              <h2 className="font-bold text-2xl text-gray-900">
                Stack Technologique
              </h2>
            </div>
            <p className="text-gray-500 mb-6 ml-1">
              Technologies essentielles et leur pertinence sur le marché pour votre parcours.
            </p>
          </section>

          {/* Prochaines étapes */}
          <section className="mx-auto px-2 md:px-6 mt-14">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-purple-500" />
              <h2 className="font-bold text-2xl text-gray-900">
                Prochaines Étapes & Actions
              </h2>
            </div>
            <p className="text-gray-500 mb-6 ml-1">
              Étapes concrètes pour progresser dans votre carrière et développer vos compétences.
            </p>
          </section>

          {/* Conseils personnalisés */}
          <section className="mx-auto px-2 md:px-6 mt-14">
            <div className="flex items-center gap-3 mb-6">
              <Book className="text-pink-500" />
              <h2 className="font-bold text-2xl text-gray-900">
                Conseils Personnalisés
              </h2>
            </div>
            <p className="text-gray-500 mb-6 ml-1">
              Recommandations adaptées pour exploiter vos forces et améliorer vos faiblesses.
            </p>
          </section>

          {/* Université vs Marché */}
          <section className="mx-auto px-2 md:px-6 mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <span className="font-semibold text-lg">
                Ce que votre université enseigne
              </span>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <span className="font-semibold text-lg">
                Ce que demande le marché
              </span>
            </div>
          </section>
        </>
      )}
    </Container>
  );
}

export default Career;
