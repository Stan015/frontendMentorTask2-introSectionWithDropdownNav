const features = document.querySelector(".nav-features");
const company = document.querySelector(".nav-company");

const featuresArrow = document.getElementById("features-arrow");
const companyArrow = document.getElementById("company-arrow");

const featuresList = document.getElementById("features-list");
const companyList = document.getElementById("company-list");

//toggling features dropdown
const toggleFeatures = () => {
    features.addEventListener('click', function() {
        featuresArrow.classList.toggle("arrow-down-1");
        featuresList.classList.toggle("show-features");
    });
};
toggleFeatures();
//

//toggling company dropdown
const toggleCompany = () => {
    company.addEventListener('click', function(e) {
        e.stopPropagation();
        companyArrow.classList.toggle("arrow-down-2");
        companyList.classList.toggle("show-company-ul");
    });
};
toggleCompany();
//

// document.documentElement.addEventListener('click', function() {
//     if(companyList.classList.contains("show-company-ul")) {
//         toggleCompany();
//     };
// });