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
      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center px-4">
        {/* Hero Section */}
        <section className="max-w-3xl w-full text-center mt-5">
          <h1 className="font-extrabold text-3xl md:text-5xl text-gray-900 leading-tight md:leading-tight mb-4">
            Explore Jobs. Discover University Courses. Get Career Guidance — All
            in One Place.
          </h1>
          <p className="text-gray-500 text-base md:text-lg mb-8">
            Your comprehensive platform for career development, education
            opportunities, and professional growth.
          </p>
          {/* Feature Cards */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mt-6">
            {[
              {
                icon: <Search />,
                link: "/job",
                title: "Explore Jobs",
                description:
                  "Find opportunities that match your skills and career goals.",
                lable: "Explore Jobs →",
                bgcolor: "bg-blue-100",
                btncolor: "bg-blue-600",
                btncolorHover: "bg-blue-700",
              },
              {
                icon: <GraduationCap className="text-[#D97706]" />,
                link: "/course",
                title: "University & Courses",
                description:
                  "Discover educational pathways to advance your career.",
                lable: "Browse Courses →",
                bgcolor: "bg-yellow-100",
                btncolor: "bg-yellow-500",
                btncolorHover: "bg-yellow-600",
              },
              {
                icon: <ChartLine className="text-[#16A34A]" />,
                link: "/career-guidance",
                title: "Career Guidance",
                description:
                  "Get expert advice and tools to plan your career path.",
                lable: "Get Guidance →",
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
            {/* Why Choose Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
              Why Choose CareerHub?
            </h2>
            <div className="flex flex-col md:flex-row gap-6 ">
              {/* Personalized Recommendations */}
              <div className="bg-white rounded-xl shadow p-6 flex-1 flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-2 mb-2">
                  <span className="text-blue-500 text-xl">
                    <CircleStop />
                  </span>
                </div>
                <h4 className="font-bold mb-1 text-gray-900">
                  Personalized Recommendations
                </h4>
                <p className="text-gray-500 text-sm text-center">
                  Get job and course suggestions tailored to your skills,
                  experience, and career goals.
                </p>
              </div>
              {/* Verified Institutions */}
              <div className="bg-white rounded-xl shadow p-6 flex-1 flex flex-col items-center">
                <div className="bg-yellow-100 rounded-full p-2 mb-2">
                  <span className="text-yellow-500 text-xl">
                    <Landmark />
                  </span>
                </div>
                <h4 className="font-bold mb-1 text-gray-900">
                  Verified Institutions
                </h4>
                <p className="text-gray-500 text-sm text-center">
                  Access courses from accredited universities and educational
                  institutions.
                </p>
              </div>
              {/* Expert Career Advice */}
              <div className="bg-white rounded-xl shadow p-6 flex-1 flex flex-col items-center">
                <div className="bg-green-100 rounded-full p-2 mb-2">
                  <span className="text-green-500 text-xl">
                    <MessageCircle />
                  </span>
                </div>
                <h4 className="font-bold mb-1 text-gray-900">
                  Expert Career Advice
                </h4>
                <p className="text-gray-500 text-sm text-center">
                  Connect with career counselors and industry professionals for
                  guidance.
                </p>
              </div>
            </div>
          </Container>
        </section>
        {/* Testimonials Section */} 
        <Container className="w-full mt-16 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
            What Our Users Say
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow p-6 flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 rounded-full p-2 text-blue-500 text-xl">
                  👨‍💻
                </span>
                <div>
                  <div className="font-bold text-sm text-gray-900">Michael Johnson</div>
                  <div className="text-xs text-gray-500">
                    Software Developer
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                "CareerHub helped me find both a programming bootcamp and a job
                in the tech industry within months. The career guidance was
                invaluable."
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow p-6 flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-yellow-100 rounded-full p-2 text-yellow-500 text-xl">
                  👩‍💼
                </span>
                <div>
                  <div className="font-bold text-sm text-gray-900">Sarah Williams</div>
                  <div className="text-xs text-gray-500">
                    Marketing Specialist
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                "The university course recommendations were spot-on. I completed
                my digital marketing certificate and landed a job through the
                platform."
              </p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow p-6 flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-green-100 rounded-full p-2 text-green-500 text-xl">
                  🧑‍💼
                </span>
                <div>
                  <div className="font-bold text-sm text-gray-900">David Chen</div>
                  <div className="text-xs text-gray-500">Business Analyst</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                "The career guidance tools helped me pivot from finance to data
                analytics. The roadmap they provided made the transition much
                smoother."
              </p>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
