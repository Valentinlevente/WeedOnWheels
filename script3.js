var submit = document.getElementById('submit-btn');

submit.addEventListener('click', submitting);

function submitting() {
	submit.innerHTML="Submitted";
	location.href="index2.html";
}