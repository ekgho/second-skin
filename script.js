const form = document.getElementById("incidentForm");

if (form) {

form.addEventListener("submit", function(e) {

e.preventDefault();

const caseNumber =
"SS-" +
Math.floor(
100000 + Math.random() * 900000
);

document.getElementById("result").innerHTML =

`
<h3>Report Submitted</h3>
<p>Your Case Number:</p>
<h2>${caseNumber}</h2>
`;

});

}