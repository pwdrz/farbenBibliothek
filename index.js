// API fetchen und anzeigen lassen

fetch("https://api.sampleapis.com/csscolornames/colors")
   
    // Daten in JSON konvertieren
    .then(response => response.json())
    .then(json => {
  
        // Variable für oberste Tablerow
        let li = `<tr><th>Name</th><th>Hex</th></tr>`;
       
        // Loop durch alle Datensätze, Hinzufügen von Tablerows
        json.forEach(color => {
            li += `<tr>
                <td>${color.name}</td>
                <td>${color.hex}</td>        
            </tr>`;
            
        });
  
    // Ergebnis anzeigen lassen
    document.getElementById("colorTable").innerHTML = li;
    
    // HEX-Code in Farbe anzeigen & ersten Buchstaben groß schreiben 
    const tbl = document.querySelector("table");

    for(let row of tbl.rows) {
        var firstRow = row.cells[0];
        var secondRow = row.cells[1];

        // Ersten Buchstaben Uppercase
        var firstLetter = firstRow.innerHTML.slice(0,1);
        var firstLetterUpper = firstLetter.toUpperCase();
        var remainingLetters = firstRow.innerHTML.slice(1,firstRow.length);

        firstRow.innerHTML = firstLetterUpper + remainingLetters;

        // Farbe dynamisch geben
        secondRow.style.color = secondRow.innerHTML;
    }
});


// Suchleiste für Datensätze

function tableSearch() {
    let input, filter, table, tr, td, txtValue;

    // Variablen mit DOM befüllen
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("colorTable");
    tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if(td) {
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}



    
