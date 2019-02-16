const smashApp = {};

smashApp.init = () => {
    $('form').on('submit', function (e) {
        e.preventDefault();

        smashApp.userInput();
        smashApp.createGenderArray();
        smashApp.createTypeArray();
        smashApp.createRangeArray();
        smashApp.createWeaponArray();
    })
}
const characters = [
    {   
        name: 'Mario',
        gender: 'male',
        archetype: 'hero',
        range: 'closeRange',
        weapon: 'physical'
    },
    {   
        name: 'Donkey Kong',
        gender: 'nonHuman',
        archetype: 'badAss',
        range:  'closeRange',
        weapon: 'physical'
    },
    {   
        name: 'Link',
        gender: 'male',
        archetype: 'hero',
        range: 'longRange',
        weapon: 'physical'
    },
    {   
        name: 'Samus',
        gender: 'female',
        archetype: 'hero',
        range: 'longRange',
        weapon: 'physical'
    },
    {   
        name: 'Dark Samus',
        gender: 'female',
        archetype: 'badAss',
        range: 'longRange',
        weapon: 'physical'
    },
    {   
        name: 'Yoshi',
        gender: 'nonHuman',
        archetype: 'cute',
        range: 'closeRange',
        weapon: 'physical'
    },
    {   
        name: 'Kirby',
        gender: 'nonHuman',
        archetype: 'cute',
        range: 'closeRange',
        weapon: 'physical'
    },
    {   
        name: 'Fox',
        gender: 'nonHuman',
        archetype: 'hero',
        range: 'longRange',
        weapon: 'physical'
    },
    {   
        name: 'Pikachu',
        gender: 'nonHuman',
        archetype: 'cute',
        range: 'closeRange',
        weapon: 'magical'
    },
    {   
        name: 'Luigi',
        gender: 'male',
        archetype: 'cute',
        range: 'closeRange',
        weapon: 'physical'
    },
    {   
        name: 'Ness',
        gender: 'male',
        archetype: 'cute',
        range: 'longRange',
        weapon: 'magical'
    },
    {   
        name: 'Captain Falcon',
        gender: 'male',
        archetype: 'hero',
        range: 'closeRange',
        weapon: 'magical'
    },
    {   
        name: 'Jigglypuff',
        gender: 'nonHuman',
        archetype: 'cute',
        range: 'closeRange',
        weapon: 'physical'
    },
    {   
        name: 'Peach',
        gender: 'female',
        archetype: 'hero',
        range: 'closeRange',
        weapon: 'physical'
    },
    {   
        name: 'Daisy',
        gender: 'female',
        archetype: 'cute',
        range: 'longRange',
        weapon: 'physical'
    },
    {   
        name: 'Bowser',
        gender: 'nonHuman',
        archetype: 'badAss',
        range: 'closeRange',
        weapon: 'physical'
    }, 
    {   
        name: 'Ice Climbers',
        gender: 'female',
        archetype: 'cute',
        range: 'closeRange',
        weapon: 'magical'
    }, 
    {   
        name: 'Sheik',
        gender: 'female',
        archetype: 'hero',
        range: 'longRange',
        weapon: 'physical'
    }, 
    {   
        name: 'Zelda',
        gender: 'female',
        archetype: 'cute',
        range: 'longRange',
        weapon: 'magical'
    }, 
    {   
        name: 'Dr. Mario',
        gender: 'male',
        archetype: 'cute',
        range: 'longRange',
        weapon: 'physical'
    }, 
    {   
        name: 'Pichu',
        gender: 'nonHuman',
        archetype: 'cute',
        range: 'longRange',
        weapon: 'magical'
    }, 
    {   
        name: 'Falco',
        gender: 'nonHuman',
        archetype: 'hero',
        range: 'closeRange',
        weapon: 'magical'
    }, 
    {   
        name: 'Marth',
        gender: 'male',
        archetype: 'hero',
        range: 'closeRange',
        weapon: 'physical'
    }, 
    {   
        name: 'Lucina',
        gender: 'female',
        archetype: 'hero',
        range: 'closeRange',
        weapon: 'physical'
    }, 
    {   
        name: 'Young Link',
        gender: 'male',
        archetype: 'cute',
        range: 'longRange',
        weapon: 'physical'
    }, 
    {   
        name: 'Ganondorf',
        gender: 'nonHuman',
        archetype: 'badAss',
        range: 'closeRange',
        weapon: 'physical'
    }, 
    {   
        name: 'Mewtwo',
        gender: 'nonHuman',
        archetype: 'badAss',
        range: 'longRange',
        weapon: 'magical'
    }, 
    {   
        name: 'Roy',
        gender: 'male',
        archetype: 'hero',
        range: 'closeRange',
        weapon: 'magical'
    }, 
    {   
        name: 'Chrom',
        gender: 'male',
        archetype: 'badAss',
        range: 'closeRange',
        weapon: 'physical'
    }, 
    {   
        name: 'Mr. Game & Watch',
        gender: 'nonHuman',
        archetype: 'cute',
        range: 'longRange',
        weapon: 'magical'
    }, 
    {   
        name: 'Meta Knight',
        gender: 'nonHuman',
        archetype: 'badAss',
        range: 'closeRange',
        weapon: 'magical'
    }, 
    {   
        name: 'Pit',
        gender: 'male',
        archetype: 'hero',
        range: 'longRange',
        weapon: 'magical'
    }, 
    {   
        name: 'Dark Pit',
        gender: 'male',
        archetype: 'badAss',
        range: 'longRange',
        weapon: 'physical'
    },
    {   
        name: 'Zero Suit Samus',
        gender: 'female',
        archetype: 'badAss',
        range:  'closeRange',
        weapon: 'physical'
    },
    {   
        name: 'Wario',
        gender: 'male',
        archetype: 'badAss',
        range: 'closeRange',
        weapon: 'physical'
    },
    {
        name: 'Snake',
        gender: 'male',
        archetype: 'badAss',
        range: 'longRange',
        weapon: 'physical'
    },
    {
        name: 'Ike',
        gender: 'male',
        archetype: 'hero',
        range: 'closeRange',
        weapon: 'physical'
    },
    {
        name: 'Pokemon Trainer',
        gender: 'female',
        archetype: 'badAss',
        range: 'longRange',
        weapon: 'magical'
    },
    {
        name: 'Diddy Kong',
        gender: 'nonHuman',
        archetype: 'cute',
        range: 'closeRange',
        weapon: 'physical'
    },
    {
        name: 'Lucas',
        gender: 'male',
        archetype: 'cute',
        range: 'closeRange',
        weapon: 'magical'
    },
    {
        name: 'Sonic',
        gender: 'nonHuman',
        archetype: 'cute',
        range: 'closeRange',
        weapon: 'magical'
    },
    {
        name: 'King Dedede',
        gender: 'nonHuman',
        archetype: 'badAss',
        range: 'closeRange',
        weapon: 'physical'
    },
    {
        name: 'Olimar',
        gender: 'male',
        archetype: 'cute',
        range: 'longRange',
        weapon: 'magical'
    },
    {
        name: 'Lucario',
        gender: 'nonHuman',
        archetype: 'hero',
        range: 'closeRange',
        weapon: 'physical'
    },
    {
        name: 'R.O.B.',
        gender: 'nonHuman',
        archetype: 'hero',
        range: 'longRange',
        weapon: 'magical'
    },
    {
        name: 'Toon Link',
        gender: 'male',
        archetype: 'cute',
        range: 'longRange',
        weapon: 'physical'
    },
    {
        name: 'Wolf',
        gender: 'nonHuman',
        archetype: 'badAss',
        range: 'longRange',
        weapon: 'physical'
    },
    {
        name: 'Villager',
        gender: 'male',
        archetype: 'cute',
        range: 'longRange',
        weapon: 'magical'
    },
    {
        name: 'Mega Man',
        gender: 'male',
        archetype: 'cute',
        range: 'longRange',
        weapon: 'magical'
    },
    {
        name: 'Wii Fit Trainer',
        gender: 'female',
        archetype: 'hero',
        range: 'closeRange',
        weapon: 'magical'
    },
    {
        name: 'Rosalina & Luma',
        gender: 'female',
        archetype: 'cute',
        range: 'closeRange',
        weapon: 'magical'
    },
    {
        name: 'Little Mac',
        gender: 'male',
        archetype: 'hero',
        range: 'closeRange',
        weapon: 'physical'
    },
    {
        name: 'Greninja',
        gender: 'NH',
        archetype: 'hero',
        range: 'longRange',
        weapon: 'magical'
    },
    {
        name: 'Palutena',
        gender: 'female',
        archetype: 'hero',
        range: 'longRange',
        weapon: 'physical'
    },
    {
        name: 'Pac-Man',
        gender: 'nonHuman',
        archetype: 'cute',
        range: 'longRange',
        weapon: 'physical'
    },
    {
        name: 'Robin',
        gender: 'female',
        archetype: 'hero',
        range: 'longRange',
        weapon: 'magical'
    },
    {
        name: 'Shulk',
        gender: 'male',
        archetype: 'hero',
        range: 'closeRange',
        weapon: 'magical'
    },
    {
        name: 'Bowser Jr.',
        gender: 'nonHuman',
        archetype: 'badAss',
        range: 'longRange',
        weapon: 'physical'
    },
    {
        name: 'Duck Hunt',
        gender: 'nonHuman',
        archetype: 'cute',
        range: 'longRange',
        weapon: 'physical'
    },
    {
        name: 'Ryu',
        gender: 'male',
        archetype: 'badAss',
        range: 'closeRange',
        weapon: 'physical'
    },
    {
        name: 'Ken',
        gender: 'male',
        archetype: 'hero',
        range: 'closeRange',
        weapon: 'physical'
    },
    {
        name: 'Cloud',
        gender: 'male',
        archetype: 'hero',
        range: 'closeRange',
        weapon: 'physical'
    },
    {
        name: 'Corrin',
        gender: 'female',
        archetype: 'badAss',
        range: 'closeRange',
        weapon: 'magical'
    },
    {
        name: 'Bayonetta',
        gender: 'female',
        archetype: 'badAss',
        range: 'longRange',
        weapon: 'magical'
    },
    {
        name: 'Inkling',
        gender: 'female',
        archetype: 'badAss',
        range: 'closeRange',
        weapon: 'physical'
    },
    {
        name: 'Ridley',
        gender: 'nonHuman',
        archetype: 'badAss',
        range: 'closeRange',
        weapon: 'physical'
    },
    {
        name: 'Simon',
        gender: 'male',
        archetype: 'hero',
        range: 'longRange',
        weapon: 'physical'
    },
    {
        name: 'Richter',
        gender: 'male',
        archetype: 'badAss',
        range: 'longRange',
        weapon: 'physical'
    },
    {
        name: 'King K. Rool',
        gender: 'nonHuman',
        archetype: 'badAss',
        range: 'longRange',
        weapon: 'magical'
    },
    {
        name: 'Isabelle',
        gender: 'female',
        archetype: 'cute',
        range: 'closeRange',
        weapon: 'physical'
    },
    {
        name: 'Incineroar',
        gender: 'nonHuman',
        archetype: 'badAss',
        range: 'closeRange',
        weapon: 'magical'
    },
    {
        name: 'Piranha Plant',
        gender: 'nonHuman',
        archetype: 'cute',
        range: 'longRange',
        weapon: 'physical'
    },
]

smashApp.createGenderArray = () => {
     smashApp.finalChoice = characters.filter((index) => {
        return index.gender === smashApp.genderChoice;
    })
};

smashApp.createTypeArray = () => {
    smashApp.finalChoice = smashApp.finalChoice.filter((index) => {
        return index.archetype === smashApp.archetypeChoice;
    })
};

smashApp.createRangeArray = () => {
    smashApp.finalChoice = smashApp.finalChoice.filter((index) => {
        return index.range === smashApp.rangeChoice;
    })
};

smashApp.createWeaponArray = () => {
    smashApp.finalChoice = smashApp.finalChoice.filter((index) => {
        return index.weapon === smashApp.weaponChoice;
    })
    let randomChoice = Math.floor(Math.random() * smashApp.finalChoice.length);
    $('.results').html(`<h2 class="userChoice">${smashApp.finalChoice[randomChoice].name}</h2>`)
};


smashApp.userInput = () => {
    smashApp.genderChoice = $('input[name=gender]:checked').val();
    smashApp.archetypeChoice = $('input[name=type]:checked').val();
    smashApp.rangeChoice = $('input[name=range]:checked').val();
    smashApp.weaponChoice = $('input[name=weapon]:checked').val();
}



// $('.results').text(`<h2 class="choice">${smashApp.finalChoice[randomChoice].name}</h2>`)


$(function(){
    smashApp.init();
});