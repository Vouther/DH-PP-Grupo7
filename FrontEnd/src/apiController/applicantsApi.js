//Acceso a api aspirantes desde frontend.
export async function getApplicants() {
    let getData;
    await fetch('http://localhost:3001/applicants')
        .then(response => response.json())
        .then(data => {
            getData = data;
        })
        .catch(err => {
            console.log(err);
        });
    return getData;
}

export async function getApplicantById(id) {
    let getData;
    await fetch(`http://localhost:3001/applicants/${id}`)
        .then(response => response.json())
        .then(data => {
            getData = data;
        })
        .catch(err => {
            console.log(err);
        });
    return getData;
}