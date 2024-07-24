import { PaperClipIcon } from '@heroicons/react/20/solid'
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
    <div className="mx-auto max-w-2xl px-4 lg:max-w-4xl">
      <h1 className="text-xl pb-4 font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">Información del Aspirante</h1>
      <div className="px-4 sm:px-0">
        <p className="text-center text-base font-semibold leading-7 text-gray-900">Datos personales</p>
      </div>
      <div className="mt-6 border-t border-gray-400">
          <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">DNI</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{applicants.dni}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Nombre y Apellido</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{applicants.firstName+" "+applicants.lastName}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Fecha de nacimiento</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{applicants.birthdate}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Sexo</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{applicants.gender}</dd>
              </div>
          </dl>
      </div>
      <div className="px-4 sm:px-0">
          <p className="text-center text-base font-semibold leading-7 text-gray-900">Detalles de la postulación</p>
      </div>
      <div className="mt-6 border-t border-gray-400">
          <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Profesión</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{applicants.profesion}</dd>
              </div>
              {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Expectativa salarial</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
              </div> */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Estado de la postulación</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{applicants.estado}</dd>
              </div>
          </dl>
      </div>
      <div className="px-4 sm:px-0">
          <p className="text-center text-base font-semibold leading-7 text-gray-900">Datos de contacto</p>
      </div>
      <div className="mt-6 border-t border-gray-400">
          <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Teléfono</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{applicants.phone}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Dirección de correo electrónico</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{applicants.email}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">LinkedIn URL</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{applicants.linkedin}</dd>
              </div>
          </dl>
      </div>
      {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
            <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
              <div className="flex w-0 flex-1 items-center">
                <PaperClipIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                  <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                  <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                </div>
              </div>
              <div className="ml-4 flex-shrink-0">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Descargar
                </a>
              </div>
            </li>
            <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
              <div className="flex w-0 flex-1 items-center">
                <PaperClipIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                  <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                  <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                </div>
              </div>
              <div className="ml-4 flex-shrink-0">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Descargar
                </a>
              </div>
            </li>
          </ul>
        </dd>
      </div> */}
    </div>
  )
}