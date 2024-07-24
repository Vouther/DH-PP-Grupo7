import Applicants from "./Applicants";
import { useState,useEffect } from "react";
import { getApplicants } from "../apiController/applicantsApi";

export default function listCantidate({ selectedProfession }) {
  const [applicants,setApplicants] = useState([]);

  useEffect(() => {
    console.log("Se monto el componente");
    getApplicants().then(res => {
      setApplicants(res.aspirantes);
    })
  },[]);

  const filteredApplicant = selectedProfession === 'Todos'
    ? applicants
    : applicants.filter(aspirante => aspirante.profesion === selectedProfession);

  return (
    <Applicants products={filteredApplicant} />
  )
}