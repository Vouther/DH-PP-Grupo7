import { useState,useEffect } from "react";
import { getApplicants } from "../apiController/applicantsApi";

const products = [
  /*{
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },*/
  // More products...
]

export default function listCantidate() {
  const [applicants,setApplicants] = useState([]);

  useEffect(() => {
    console.log("Se monto el componente");
    getApplicants().then(res => {
      setApplicants(res.aspirantes);
    })
  },[]);

  console.log(applicants);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-7 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Aspirantes</h2>
        <p className="mt-4 text-xl text-gray-500">Aquí podrás encontrar a algunos de los candidatos que buscan formar parte de una organización. Nos enorgullece presentar a individuos talentosos y motivados que desean contribuir con su experiencia y habilidades.</p>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {applicants.map((aspi) => (
            <div key={"k"+aspi.id} className="group relative">
              <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 h-40 sm:h-48 md:h-64 lg:h-80">
                  <img
                      alt={aspi.detail}
                      src={aspi.avatar}
                      className="h-full w-full object-cover object-center"
                  />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="/detail">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {aspi.name+" "+aspi.lastName}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{aspi.profession}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{aspi.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}