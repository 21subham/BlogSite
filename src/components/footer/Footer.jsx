import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap text-center">
          {/* Logo and Description */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between items-center">
              <div className="inline-flex items-center">
                <Logo width="50px" />
              </div>
              <div>
                <p className="text-lg text-gray-600">
                  Still more work to be done
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <Link to="https://github.com/21subham">
                <h1 className="tracking-px mb-4 text-base font-semibold uppercase text-gray-700">
                  Github
                </h1>
              </Link>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h1 className="tracking-px mb-4 text-base font-semibold uppercase text-gray-700">
                Support
              </h1>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h1 className="tracking-px mb-4 text-base font-semibold uppercase text-gray-700">
                Legals
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
