function Applicants({ products }) {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-7 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Aspirantes</h2>
                <p className="mt-4 text-xl text-gray-500">Aquí podrás encontrar a algunos de los candidatos que buscan formar parte de una organización. Nos enorgullece presentar a individuos talentosos y motivados que desean contribuir con su experiencia y habilidades.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={"k"+product.id} className="group relative">
                            <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 h-40 sm:h-48 md:h-64 lg:h-80">
                                <img
                                    alt={product.detail}
                                    src={product.avatar}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="/detail">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name+" "+product.lastName}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.profession}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default Applicants;
