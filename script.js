function yearsToDays() {
    'use strict';
    
    var age = document.getElementById('name').value.trim(),
        days = age * 365,
        messageDiv = document.getElementById('div');
    
    if (age === "") {
        messageDiv.innerHTML = "Come on, don’t be shy! Just tell me your age.";
    } else if (isNaN(age)) {
        messageDiv.innerHTML = "I asked for your age, not your life story! Enter a number.";
    } else if (age < 0) {
        messageDiv.innerHTML = "Negative age? Are you a time traveler?";
    } else if (age == 0) {
        messageDiv.innerHTML = "You need to be born first, buddy. Try again later.";
    } else if (age <= 15) {
        messageDiv.innerHTML = days + " days, kiddo? Go back to your cartoons. This is for grown-ups.";
    } else if (age >= 16 && age <= 30) {
        messageDiv.innerHTML = days + " days? So it’s time to do something in your life! Go for it!";
    } else if (age >= 31 && age <= 49) {
        messageDiv.innerHTML = days + " days? Aha, married? How’s that going? Life in full swing!";
    } else if (age == 50) {
        messageDiv.innerHTML = "Wow, half a century lived! That's a lot of wisdom!";
    } else if (age >= 51 && age <= 70) {
        messageDiv.innerHTML = days + " days? Just getting old, huh? So yeah, survive more!";
    } else if (age >= 71 && age <= 99) {
        messageDiv.innerHTML = days + " days? You're alive! Still not dead? Shocked!";
    } else if (age == 100) {
        messageDiv.innerHTML = "A century! Are you serious? Is this real?";
    } else if (age > 100) {
        messageDiv.innerHTML = "Wow! " + days + " days, Are you a vampire or something? That’s ancient!";
    }
}
