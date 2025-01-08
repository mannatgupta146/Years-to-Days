/*global console, alert, prompt*/
function yearsToDays() {
    'use strict';
    var
        a = document.getElementById('name').value,
        r = a * 365,
        m = document.getElementById('div');
    if (a === "") {
        m.innerHTML = "Please don't joke around, just write your age.";
    } else if (a === "My dear, thank you") {
        m.innerHTML = "You're welcome, no worries.";
    } else if (a === "Buddy" || a === "My friend" || a === "Chief" || a === "My brother" || a === "Boss") {
        m.innerHTML = "What’s up, boss? What do you need?";
    } else if (a === "I don't want to write, man" || a === "I don't want to write, buddy" || a === "I don't want to write, my friend" || a === "I don't want to write, chief" || a === "I don't want to write" || a === "I don't want to write, boss" || a === "I don't want to write, my brother") {
        m.innerHTML = "Come on, don't make me angry. I'm being nice; don't make me call Madam Afaf, alright?";
    } else if (isNaN(a)) {
        m.innerHTML = "I'm asking for your age, not your name. Please understand.";
    } else if (a < 0) {
        m.innerHTML = "You're not from the past, write your current age.";
    } else if (a == 0) {
        m.innerHTML = "Be born first and then come talk to me.";
    } else if (a >= 100) {
        m.innerHTML = "You should be asking how many hours you'll live. Move on, please.";
    } else if (a <= 9) {
        m.innerHTML = "Go on, kiddo. Your mom is calling you.";
    } else {
        m.innerHTML = "You have lived approximately " + r + " days. Anything else you need?";
    }
}
