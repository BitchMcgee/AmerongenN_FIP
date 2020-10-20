// import Selection from "./modules/DataModule.json";
(() => {
// begin with AJAX request to DataModule.json
fetch('.DataModule.json')
    .then(res =>res.json) 
    .then(data => {
     console.log(data);
    function handleDataSet(data) {
        let myData = JSON.parse(data),
            contentViewer = document.querySelector(".viewer"),
            selectionTemplate = document.querySelector("#selection-template").content;

        for (let user in myData) {
            let currentSelection = selectionTemplate.cloneNode(true),
                currentSelectionContent = currentSelection.querySelector('.user').children;

                currentSelectionContent[1].textContent = Selection[user].title;
                currentSelectionContent[2].imageContent = Selection[user].image;
                currentSelectionContent[2].imageContent = Selection[user].description;

                contentViewer.appendChild(currentSelection);
        }
    }
 })

let myReq = new XMLHttpRequest;

})();