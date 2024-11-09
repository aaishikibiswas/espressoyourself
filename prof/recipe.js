const coffeeTypes = {
    espresso: { 
        ingredients: ['coffee'], 
        recipe: `
            <ol>
                <li>Grind fresh coffee beans to a fine consistency.</li>
                <li>Pack the coffee grounds into the portafilter.</li>
                <li>Place the portafilter into the espresso machine and start brewing.</li>
                <li>Enjoy your freshly brewed espresso!</li>
            </ol>
        ` 
       
    },
    latte: { 
        ingredients: ['coffee', 'milk'], 
        recipe: `
            <ol>
                <li>Prepare a shot of espresso using your espresso machine.</li>
                <li>Steam the milk until it's hot and frothy.</li>
                <li>Pour the steamed milk over the espresso shot.</li>
                <li>Enjoy your creamy latte!</li>
            </ol>
        ` 
        
    },
    cappuccino: { 
        ingredients: ['coffee', 'milk', 'foam'], 
        recipe: `
            <ol>
                <li>Make a shot of espresso.</li>
                <li>Steam the milk until it's hot and frothy.</li>
                <li>Pour the steamed milk over the espresso shot.</li>
                <li>Top with a thick layer of milk foam.</li>
                <li>Enjoy your cappuccino!</li>
            </ol>
        ` 
    },
    americano: { 
        ingredients: ['coffee', 'water'], 
        recipe: `
            <ol>
                <li>Make a shot of espresso.</li>
                <li>Boil some water.</li>
                <li>Pour the hot water over the espresso shot.</li>
                <li>Enjoy your americano!</li>
            </ol>
        ` 
        
            },
    mocha: { 
        ingredients: ['coffee', 'milk', 'chocolate syrup'], 
        recipe: `
            <ol>
                <li>Prepare a shot of espresso.</li>
                <li>Add a tablespoon of chocolate syrup to the espresso.</li>
                <li>Steam the milk until it's hot and frothy.</li>
                <li>Pour the steamed milk over the espresso and chocolate mixture.</li>
                <li>Stir well and enjoy your mocha!</li>
            </ol>
        ` 
    },
    macchiato: { 
        ingredients: ['coffee', 'milk foam'], 
        recipe: `
            <ol>
                <li>Make a shot of espresso.</li>
                <li>Steam a small amount of milk until it's foamy.</li>
                <li>Add a dollop of milk foam on top of the espresso.</li>
                <li>Enjoy your macchiato!</li>
            </ol>
        ` 
    },
    flatWhite: { 
        ingredients: ['coffee', 'milk'], 
        recipe: `
            <ol>
                <li>Prepare a shot of espresso.</li>
                <li>Steam the milk until it's hot but not frothy.</li>
                <li>Pour the steamed milk over the espresso.</li>
                <li>Enjoy your flat white!</li>
            </ol>
        ` 
    },
    icedCoffee: { 
        ingredients: ['coffee', 'ice', 'milk', 'sugar'], 
        recipe: `
            <ol>
                <li>Brew a strong cup of coffee.</li>
                <li>Let the coffee cool to room temperature.</li>
                <li>Fill a glass with ice cubes.</li>
                <li>Pour the coffee over the ice.</li>
                <li>Add milk and sugar to taste, stir well.</li>
                <li>Enjoy your iced coffee!</li>
            </ol>
        ` 
    },
    frappe: { 
        ingredients: ['coffee', 'ice', 'milk', 'sugar', 'whipped cream'], 
        recipe: `
            <ol>
                <li>Brew a strong cup of coffee and let it cool.</li>
                <li>Add the coffee, ice, milk, and sugar to a blender.</li>
                <li>Blend until smooth.</li>
                <li>Pour into a glass and top with whipped cream.</li>
                <li>Enjoy your frappe!</li>
            </ol>
        ` 
    }
};

function generateCoffee() {
    const ingredients = document.getElementById('ingredients').value.split(',').map(ingredient => ingredient.trim().toLowerCase());
    const coffeeDiv = document.getElementById('coffee');
    let foundCoffee = false;
    let message = '<p>With these ingredients, you can make:</p>';

    for (const [coffee, info] of Object.entries(coffeeTypes)) {
        if (info.ingredients.every(ingredient => ingredients.includes(ingredient))) {
            message += `
                <h2>${coffee.charAt(0).toUpperCase() + coffee.slice(1)}</h2>
                ${info.recipe}
            `;
            foundCoffee = true;
        }
    }

    if (!foundCoffee) {
        message = '<p>No matching coffee recipes found with the entered ingredients.</p>';
    }

    coffeeDiv.innerHTML = message;
}