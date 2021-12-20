const candidateGalleryDiv = document.getElementById("create-candidate-card");
let candidates;
let filteredCandidates;

fetch(baseURL + "/candidates")
    .then(response => response.json()
        .then(data => {
            candidates = data
            filteredCandidates = candidates;
            candidates.map(candidate => createCandidateCard(candidate))

        }));


function createCandidateCard(candidate) {
    const candidateElement = document.createElement("div");
    candidateElement.innerHTML = `
        <p>${escapeHTML(candidate.first_name)} ${escapeHTML(candidate.last_name)} </p> 
        <p>${escapeHTML(candidate.membership)}</p>
     
           
    `;
    candidateGalleryDiv.appendChild(candidateElement);
}


function searchcandidates() {
    const selectedStatus = document.getElementById("status-dropdown").value;
    candidateGalleryDiv.innerHTML = "";

    if (selectedStatus === "All") {
        filteredCandidates = candidates;
        candidates.map(createCandidateCard);
    } else {
        filteredCandidates = candidates.filter(candidate => candidate.membership === selectedStatus);
        filteredCandidates.map(createCandidateCard);
    }
}

function handleSearchName(event) {
    candidateGalleryDiv.innerHTML = "";
    const searchTerm = event.target.value.toLowerCase();
    filteredCandidates.filter(candidate => candidate.first_name.toLowerCase().includes(searchTerm))
        .map(createCandidateCard);
}



document.getElementById("search").addEventListener("click", searchcandidates);
document.getElementById("name-search").addEventListener("input", handleSearchName);