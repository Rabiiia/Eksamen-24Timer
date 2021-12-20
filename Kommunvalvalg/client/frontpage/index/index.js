
function createCandidate(){
    const candidateToCreate = {
        first_name:document.getElementById("create-candidate-firstName").value,
        last_name:document.getElementById("create-candidate-lastName").value,
        membership:document.getElementById("parti-dropdown").value,
    }

    fetch( baseURL + "/candidates", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(candidateToCreate)
    })
        .then(response => response.json())
        .catch(error => console.log(error));
}

function redirectTolistOfCandidates() {
    location.assign("./list-candidates.html");
}

