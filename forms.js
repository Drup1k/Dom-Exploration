// Display all childeren in console
document.querySelectorAll('*');
    for (let child of document.body.children) {
    console.log(child);
}
// Synchronize the first input field with the <span> element and -
// show 'firstname' beside the form field
document.getElementById('firstname').addEventListener('keyup', function() {
document.getElementById('display-firstname').textContent = this.value;
})
// Control the visibility of a section based on age input and display certain text
document.getElementById('age').addEventListener('keyup', function() {
    var age = parseInt(this.value, 10);
    document.getElementById('a-hard-truth').style.visibility = age >= 18 ? 'visible' : 'hidden';
})
// Validate password length and match on keyup - highlight in red if pwd is not correct or not matching
function validatePasswords() {
    const pwd = document.getElementById('pwd');
    const pwdConfirm = document.getElementById('pwd-confirm');
    const isValid = pwd.value.length >= 6 && pwd.value === pwdConfirm.value;
        pwd.style.backgroundColor = isValid ? 'white' : 'red';
        pwdConfirm.style.backgroundColor = isValid ? 'white' : 'red';
}
document.getElementById('pwd').addEventListener('keyup', validatePasswords);
document.getElementById('pwd-confirm').addEventListener('keyup', validatePasswords);
// 
// Toggle dark mode using the <select> field
document.getElementById('toggle-darkmode').addEventListener('change', function() {
    const body = document.body;
    if (this.value === 'dark') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
});
