const candidateTableBody = document.getElementById("candidate-tbody");

fetch(baseURL + "/candidates")
    .then(response => response.json())
    .then(candidates => {
        console.log(candidates)
        candidates.map(createCandidatesTableRow);
    });

function createCandidatesTableRow(candidate){
    const candidateTableRow = document.createElement("tr");
    candidateTableRow.id = candidate.id;

    candidateTableBody.appendChild(candidateTableRow);
    constructCandidateTableRow(candidateTableRow, candidate);
}

function constructCandidateTableRow(candidateTableRow, candidate) {
    candidateTableRow.innerHTML = `
   
    <td>
   
   <p class="row-candidate-firstName">${escapeHTML(candidate.first_name)}</p>
   </td>
    
    
    <td>
    <p class="row-candidate-lastName">${escapeHTML(candidate.last_name)} </p>
    </td>
    
    <td>
     <p class="row-candidate-membership">${(candidate.membership)} </p>
     </td>
    
    <td>
           
            <button id="update-button-${candidate.id}">🖊️</button>
    </td>
    
     <td>
            <button onclick="deleteCandidate(${candidate.id})">❌</button>
     </td>
    

        
    `;


    document.getElementById(`update-button-${candidate.id}`)
        .addEventListener("click", () => updateCandidate(candidate));

}


function deleteCandidate(candidateId) {
    fetch(baseURL + "/candidates/" + candidateId, {
        method: "DELETE"
    }).then(response => {
        if (response.status === 200) {
            document.getElementById(candidateId).remove();
        } else {
            console.log(response.status);
        }
    });
}



