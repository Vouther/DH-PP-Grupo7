import ListaProfesiones from '../components/ListaProfesiones'
import ListaAspirantes from '../components/ListaAspirantes'
import Search from '../components/SectionSearch'
import Companies from '../components/SectionCompanies'

function PanelGeneral () {
  return (
    <>
      <Search></Search>
      <div>
        <ListaAspirantes></ListaAspirantes>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md custom-link px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Postularme
          </a>
          <a href="/applicants" className="text-sm font-semibold text-gray-900">
            Ver mas aspirantes <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <ListaProfesiones></ListaProfesiones>
      <Companies></Companies>
    </>
  )
}

export default PanelGeneral
