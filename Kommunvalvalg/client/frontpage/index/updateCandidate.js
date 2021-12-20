

function updateCandidate(candidate) {
    const tableRowToUpdate = document.getElementById(candidate.id);

    tableRowToUpdate.innerHTML = `
            <td>
            <input id="update-candidate-firstName-${candidate.id}" value="${escapeHTML(candidate.first_name)}">
            </td>
            
            <td>
            <input id="update-candidate-lastName-${candidate.id}" value="${escapeHTML(candidate.last_name)}">
            </td>
             
        <td>
        <select id="update-candidate-membership-${candidate.id}">
        <option value="">Vælg parti</option>
        <option value="Socialdemokratiet">Socialdemokratet</option>
        <option value="Dansk Folkeparti">Dansk Folkeparti</option>
        <option value="Det konservative Folkeparti">Det konservatie Folkeparti</option>
        <option value="Socialistisk Folkeparti">Socialistisk Folkeparti</option>
        <option value="Venstre">Venstre</option>
        <option value="Enhedslisten">Enhedslisten + De Rød Grønne</option>
        </select>
        </td>
            
        
       <td>
       <button onclick="updateCandidateInBackend(${candidate.id})">✅</button>
       </td>
      
     
    `;


}

function updateCandidateInBackend(candidateId) {

    const tableRowToUpdate = document.getElementById(candidateId);

    const candidateToUpdate = {
        id: candidateId,
        first_name:document.getElementById(`update-candidate-firstName-${candidateId}`).value,
        last_name:document.getElementById(`update-candidate-lastName-${candidateId}`).value,
        membership:document.getElementById(`update-candidate-membership-${candidateId}`).value,
    };

    fetch(baseURL + "/candidates/" + candidateId, {
        method: "PATCH",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(candidateToUpdate)
    }).then(response => {
        if (response.status === 200) {
            constructCandidateTableRow(tableRowToUpdate, candidateToUpdate);
        }
    });

}

