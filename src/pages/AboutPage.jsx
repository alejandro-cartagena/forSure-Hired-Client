import renmy from "../assets/images/renmy.jpg";
import shamil from "../assets/images/shamil.jpg";
import alejandro from "../assets/images/alejandro.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
const AboutPage = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex flex-col py-10 px-4 md:px-32 items-center">
        <h1 className="text-5xl font-semibold text-slate-600 text-center mb-10">
          What is our Mission?
        </h1>
        <p className="md:w-[50vw] text-center text-slate-500 font-semibold">
          At forSure Hired, our mission is to empower job seekers with an
          intuitive and efficient tool to manage their job applications. We
          understand that the job search process can be overwhelming, with
          multiple positions, interviews, and communications to handle. Our goal
          is to simplify and organize this process, allowing you to focus on
          what matters most: finding the right job for you. With forSure Hired,
          you can track the status of your applications, schedule interviews,
          and receive reminders, all from a centralized and user-friendly
          platform.
        </p>
      </div>
      <div className="flex flex-col py-10 px-4 md:px-32">
        <h1 className="text-5xl font-semibold text-slate-600 text-center mb-10">
          Meet Our Team
        </h1>
        <div className="flex gap-10 justify-evenly items-center flex-col lg:flex-row flex-wrap">
          <div className="flex flex-col justify-evenly items-center gap-4 bg-slate-50 rounded-md md:w-[20vw] p-4 shadow-md  md:min-w-[300px]">
            <img
              src={shamil}
              alt="renmy profile"
              className="h-36 m-6 rounded-full  shadow-slate-600 shadow-md"
            />
            <hr className="h-1 w-full bg-slate-600" />
            <h2 className="text-2xl font-semibold text-slate-600">
              Shamil Mubarakshin
            </h2>
            <p className="px-3 text-sm text-slate-500">
              Experienced Quality Assurance Analyst with a demonstrated history
              of working in the financial services industry. Skilled in
              Analytical and Problem Solving Skills, OOP languages and
              frameworks.
            </p>
            <div className="flex justify-center items-center gap-8">
              <a
                href="https://www.linkedin.com/in/shamil-mubarakshin-9170425/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-8 text-slate-700 hover:scale-110 transition-all"
                />
              </a>
              <a href="https://github.com/smubarakshin/" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="h-8 text-slate-700 hover:scale-110 transition-all"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-evenly items-center gap-4  bg-slate-50 rounded-md md:w-[20vw] p-4 shadow-md md:min-w-[300px]">
            <img
              src={alejandro}
              alt="renmy profile"
              className="h-36 m-6 rounded-full  shadow-slate-600 shadow-md"
            />
            <hr className="h-1 w-full bg-slate-600" />
            <h2 className="text-2xl font-semibold text-slate-600">
              Alejandro Cartagena
            </h2>
            <p className="px-3 text-sm text-slate-500">
              Software Developer with a Computer Science degree and track record
              of crafting seamless and user-friendly websites and web
              applications. Proficient in React.js and experienced in MERN apps.
            </p>
            <div className="flex justify-center items-center gap-8">
              <a
                href="https://www.linkedin.com/in/alejandro-cartagena/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-8 text-slate-700 hover:scale-110 transition-all"
                />
              </a>
              <a href="https://github.com/alejandro-cartagena" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="h-8 text-slate-700 hover:scale-110 transition-all"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-evenly items-center gap-4  bg-slate-50 rounded-md md:w-[20vw] p-4 shadow-md md:min-w-[300px]">
            <img
              src={renmy}
              alt="renmy profile"
              className="h-36 m-6 rounded-full  shadow-slate-600 shadow-md"
            />
            <hr className="h-1 w-full bg-slate-600" />
            <h2 className="text-2xl font-semibold text-slate-600">
              Renmy Enriquez
            </h2>
            <p className="px-3 text-sm text-slate-500">
              Front-End Developer focused on building high-quality and engaging
              web applications, with a solid background in HTML, CSS, JavaScript
              and frameworks like React and Astro. Actually deeping into MERN
              Stack
            </p>
            <div className="flex justify-center items-center gap-8">
              <a href="https://www.linkedin.com/in/renmye/" target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-8 text-slate-700 hover:scale-110 transition-all"
                />
              </a>
              <a href="https://github.com/Renmy/" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="h-8 text-slate-700 hover:scale-110 transition-all"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
