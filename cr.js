const hearingList = ["Shree Ninaidevi Multi Specialty Cooperative Hospital and Research Center Ltd.,MAHARASHTRA", "Global Federation of Natural Farming Cooperative Ltd.,UTTAR PRADESH", "Tamil Nadu Multi State Societies Cooperative Housing Federation Ltd.,TAMIL NADU"];
const orderSheetList = ["Home Multi State Cooperative Housing Society Ltd", "Lokmanya Multipurpose Cooperative Society Limited, Belgaum, Karnataka: Order Sheet of Hearing held on 14.02.2022"];
const certificatesList = ["Mahesh Multi State Cooperative Credit Society Ltd.,MAHARASHTRA", "Chambal Agriculture Marketing Cooperative Ltd,MADHYA PRADESH","Heaven Multi State Agro Cooperative Society Ltd,UTTAR PRADESH"];


const hearingListElement = document.getElementById("hearingList");
const orderSheetListElement = document.getElementById("orderSheetList");
const certificatesListElement = document.getElementById("certificatesList");

function populateList(list, element) {
  list.forEach((point) => {
    const li = document.createElement("li");
    li.textContent = point;
    element.appendChild(li);
  });
}

populateList(hearingList, hearingListElement);
populateList(orderSheetList, orderSheetListElement);
populateList(certificatesList, certificatesListElement);