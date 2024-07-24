import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getApplicantById } from "../apiController/applicantsApi";

export default function Example() {
    const { id } = useParams();
    const [applicants,setApplicants] = useState([]);

    useEffect(() => {
      console.log("Se monto el componente");
      getApplicantById(id).then(res => {
        setApplicants(res);
      });
    },[]);

    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-20 sm:py-28 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          {/* <img alt="" src="../../public/cv.png" className="mx-auto h-36" /> */}
          <figure className="mt-10">
            {/* <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                molestiae. Numquam corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote> */}
            <figcaption className="mt-10">
              <img
                alt=""
                src={applicants.avatar}
                className="mx-auto h-40 sm:h-48 md:h-64 lg:h-80 rounded-full"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">{applicants.firstName+" "+applicants.lastName}</div>
                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-gray-600">{applicants.profesion}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }
