function showResult() {
    const mood = document.querySelector('input[name="mood"]:checked').value;
    const coffeetype = document.querySelector('input[name="coffeetype"]:checked').value;
    const brew = document.querySelector('input[name="brew"]:checked').value;
    let result = "Based on your mood, coffee type, and brewing method, your perfect coffee match is: ";

    if (mood === 'happy' && coffeetype === 'espresso' && brew === 'espresso-machine') {
        result += "Mocha!";
    } else if (mood === 'relaxed' && coffeetype === 'latte' && brew === 'drip') {
        result += "French Vanilla!";
    } else if (mood === 'energetic' && coffeetype === 'cappuccino' && brew === 'pour-over') {
        result += "Dark Roast!";
    } else if (mood === 'cozy' && coffeetype === 'frenchpress' && brew === 'frenchpress') {
        result += "Cinnamon!";
    } else if (mood === 'adventurous' && coffeetype === 'coldbrew' && brew === 'coldbrew') {
        result += "Hazelnut!";
    } else if (mood === 'classic' && coffeetype === 'espresso' && brew === 'aeropress') {
        result += "Original!";
    } else if (mood === 'spicy' && coffeetype === 'latte' && brew === 'drip') {
        result += "Pumpkin Spice!";
    } else {
        result += "caramel";
    }

    document.getElementById('result').innerHTML = result;
}