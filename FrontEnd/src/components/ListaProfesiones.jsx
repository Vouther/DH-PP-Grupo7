import { useState,useEffect } from "react";
import { getProfessions } from "../apiController/professionApi";

export default function listProfesion() {
  const [professions,setProfessions] = useState([]);

  useEffect(() => {
    console.log("Se monto el componente");
    getProfessions().then(res => {
      setProfessions(res);
    })
  },[]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-7 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Profesiones</h2>
      <p className="mt-4 text-xl text-gray-500">En esta sección, encontrarás una amplia variedad de profesiones disponibles en nuestra plataforma. Desde roles técnicos hasta creativos, ofrecemos un abanico de oportunidades para que encuentres el puesto ideal que se alinee con tus habilidades e intereses.</p>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <ul role="list" className="divide-y divide-gray-400 mt-4">
          {professions.map((prof) => (
            <li key={"k"+prof.id} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img alt="" src={prof.img} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{prof.name}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{prof.descripcion}</p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{"Cantidad de aspirantes: "+prof.applicantsCount}</p>
                {/* {person.lastSeen ? (
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                  </p>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-gray-500">Online</p>
                  </div>
                )} */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
