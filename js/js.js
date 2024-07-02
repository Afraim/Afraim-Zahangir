function toggleNav() {
    var navToggle = document.getElementById('nav-toggle');
    var nav = document.querySelector('nav');

    navToggle.classList.toggle('open');
    nav.classList.toggle('open');
}
var exp = document.querySelectorAll("experience");


function experience(startYear, endYear) {
    var currentDate = new Date();
    var startDate = new Date(startYear, 0); // Assuming start date is always January 1st of the given year
    var endDate;

    if (endYear.toLowerCase() === 'present') {
        endDate = currentDate;
    } else {
        endDate = new Date(endYear, 0);
    }

    var months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();

    return months;
}


// Function to calculate experience in months
function experience(startYear, endYear) {
    var currentDate = new Date();
    var startDate = new Date(startYear, 0); // Assuming start date is always January 1st of the given year
    var endDate;

    if (endYear.toLowerCase() === 'present') {
        endDate = currentDate;
    } else {
        endDate = new Date(endYear, 0);
    }

    var months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();

    return months;
}

// Function to update experience for work experiences
function experience(startYear, endYear) {
    var currentDate = new Date();
    var startDate = new Date(startYear, 0); // Assuming start date is always January 1st of the given year
    var endDate;

    if (endYear && endYear.toLowerCase() === 'present') {
        endDate = currentDate;
    } else {
        endDate = new Date(endYear, 11, 31);
    }

    var months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();

    return months;
}

// Call updateExperience when the HTML loads
window.addEventListener('DOMContentLoaded', function(){
    var workingyears = document.querySelectorAll(".workingyears");
    var experiences = document.querySelectorAll(".experience");
    workingyears.forEach(function(exp, index) {
        var years = exp.textContent.trim().split(" - "); // Splitting the text content by ' - '
        var startYear = parseInt(years[0]); // First part is the start year
        var endYear = years[1]; // Second part is the end year or "Present"
        experiences[index].textContent = experience(startYear, endYear) + " months";
    });
});


