const features = document.querySelector(".nav-features");
const company = document.querySelector(".nav-company");

const featuresArrow = document.getElementById("features-arrow");
const companyArrow = document.getElementById("company-arrow");

const featuresList = document.getElementById("features-list");
const companyList = document.getElementById("company-list");

//toggling features dropdown
const toggleFeatures = () => {
    features.addEventListener('click', function(e) {
        e.stopPropagation();
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

//closing either toggles by clicking anywhere 
document.documentElement.addEventListener('click', function() {
    if(featuresList.classList.contains("show-features")) {
        featuresList.classList.remove("show-features");
    };
    
    if(featuresArrow.classList.contains("arrow-down-1")) {
        featuresArrow.classList.remove("arrow-down-1");
    };
    //
    if(companyList.classList.contains("show-company-ul")) {
        companyList.classList.remove("show-company-ul");
    };
    
    if(companyArrow.classList.contains("arrow-down-2")) {
        companyArrow.classList.remove("arrow-down-2");
    };
});
