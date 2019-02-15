const smashApp = {};

smashApp.init = () => {
    $('form').on('submit', function (e) {
        e.preventDefault();

        smashApp.userInput();
        smashApp.characters();
    })
}

const characters = [
    {   name: 'Mario',
        gender: 'male',
        archetype: 'hero',
        range: 'closeRange',
        weapon: 'physical'
    },
    {   name: 'Donkey Kong',
        gender: 'nonHuman',
        archetype:   'badAss',
        range:  'closeRange',
        weapon: 'physical',
    },
    {   name: 'Link',
        gender: 'male',
        archetype: 'hero',
        range: 'longRange',
        weapon: 'armed',
    },
    {   name: 'Samus',
        gender: 'female',
        archetype: 'hero',
        range: 'longRange',
        weapon: 'armed',
    },
    {   name: 'Dark Samus',
        gender: 'female',
        archetype: 'badAss',
        range: 'long',
        weapon: 'armed',
    },
    {   name: 'Yoshi',
        gender: 'nonHuman',
        archetype: 'cute',
        range: 'midRange',
        weapon: 'physical',
    },
    {   name: 'Kirby',
        gender: 'nonHuman',
        archetype: 'cute',
        range: 'close',
        weapon: 'physical',
    },
    {   name: 'Fox',
        gender: 'nonHuman',
        archetype: 'hero',
        range: 'midRange',
        weapon: 'physical',
    },
    {   name: 'Pikachu',
        gender: 'nonHuman',
        archetype: 'cute',
        range: 'longRange',
        weapon: 'magical',
    },
    {   name: 'Luigi',
        gender: 'male',
        archetype: 'cute',
        range: 'closeRange',
        weapon: 'physical',
    },
    {   name: 'Ness',
        gender: 'male',
        archetype: 'cute',
        range: 'longRange',
        weapon: 'magical',
    },
    {   name: 'Captain Falcon',
        gender: 'male',
        archetype: 'hero',
        range: 'close',
        weapon: 'magical',
    },
    {   name: 'Jigglypuff',
        gender: 'nonHuman',
        archetype: 'cute',
        range: 'close',
        weapon: 'physical',
    },
    {   name: 'Peach',
        gender: 'female',
        archetype: 'cute',
        range: 'midRange',
        weapon: 'physical',
    },
    {   name: 'Daisy',
        gender: 'female',
        archetype: 'cute',
        range: 'midRange',
        weapon: 'physical',
    },
    {   name: 'Bowser',
        gender: 'nonHuman',
        archetype: 'badAss',
        range: 'closeRange',
        weapon: 'physical',
    }, 
    {   name: 'Ice Climbers',
        gender: 'nonHuman',
        archetype: 'cute',
        range: 'midRange',
        weapon: 'magical',
    }, 
    {   name: 'Sheik',
        gender: 'female',
        archetype: 'heroic',
        range: 'closeRange',
        weapon: 'physical',
    }, 
    {   name: 'Zelda',
        gender: 'female',
        archetype: 'cute',
        range: 'longRange',
        weapon: 'magical',
    }, 
    {   name: 'Dr. Mario',
        gender: 'male',
        archetype: 'cute',
        range: 'midRange',
        weapon: 'physical',
    }, 
    {   name: 'Pichu',
        gender: 'nonHuman',
        archetype: 'cute',
        range: 'midRange',
        weapon: 'magical',
    }, 
    {   name: 'Falco',
        gender: 'nonHuman',
        archetype: 'hero',
        range: 'midRange',
        weapon: 'physical',
    }, 
    {   name: 'Marth',
        gender: 'male',
        archetype: 'hero',
        range: 'close',
        weapon: 'armed',
    }, 
    {   name: 'Lucina',
        gender: 'female',
        archetype: 'cute',
        range: 'close',
        weapon: 'armed',
    }, 
    {   name: 'Young Link',
        gender: 'male',
        archetype: 'cute',
        range: 'long',
        weapon: 'armed',
    }, 
    {   name: 'Ganondorf',
        gender: 'nonHuman',
        archetype: 'badAss',
        range: 'close',
        weapon: 'armed',
    }, 
    {   name: 'Mewtwo',
        gender: 'nonHuman',
        archetype: 'badAss',
        range: 'long',
        weapon: 'magical',
    }, 
    {   name: 'Roy',
        gender: 'male',
        archetype: 'hero',
        range: 'close',
        weapon: 'armed',
    }, 
    {   name: 'Chrom',
        gender: 'male',
        archetype: 'badAss',
        range: 'close',
        weapon: 'armed',
    }, 
    {   name: 'Mr. Game & Watch',
        gender: 'nonHuman',
        archetype: 'cute',
        range: 'midRange',
        weapon: 'magical',
    }, 
    {   name: 'Meta Knight',
        gender: 'nonHuman',
        archetype: 'badAss',
        range: 'close',
        weapon: 'magical',
    }, 
    {   name: 'Pit',
        gender: 'male',
        archetype: 'hero',
        range: 'long',
        weapon: 'magical',
    }, 
    {   name: 'Dark Pit',
        gender: 'male',
        archetype: 'badAss',
        range: 'long',
        weapon: 'magical',
    },
    {   name: 'Zero Suit Samus',
        gender: 'female',
        archetype:   'cute',
        range:  'midRange',
        weapon: 'armed',
    },
]


smashApp.characters = () => {
     smashApp.finalChoice = characters.filter((index) => {
        return index.gender === smashApp.genderChoice
    })
}
smashApp.characters = () => {
    smashApp.finalChoice = characters.filter((index) => {
        return index.archetype === smashApp.archetypeChoice
    })
}
smashApp.characters = () => {
    smashApp.finalChoice = characters.filter((index) => {
        return index.range === smashApp.rangeChoice
    })
}
smashApp.characters = () => {
    smashApp.finalChoice = characters.filter((index) => {
        return index.weapon === smashApp.weaponChoice
    })
    console.log(smashApp.finalChoice)
}

smashApp.userInput = () => {
    smashApp.genderChoice = $('input[name=gender]:checked').val();
    smashApp.archetypeChoice = $('input[name=type]:checked').val();
    smashApp.rangeChoice = $('input[name=range]:checked').val();
    smashApp.weaponChoice = $('input[name=weapon]:checked').val();
}

$(function(){
    smashApp.init();
});