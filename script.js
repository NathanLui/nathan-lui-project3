const characters = [
    {   
        name: 'Mario',
        origin: 'Donkey Kong (1981)',
        image: 'assets/mario.jpg',
        gender: 'male',
        archetype: 'hero',
        weapon: 'physical'

    },
    {   
        name: 'Donkey Kong',
        origin: 'Donkey Kong (1981)',
        image: 'assets/donkeykong.jpg',
        gender: 'nonHuman',
        archetype: 'badAss',
        weapon: 'physical'
    },
    {   
        name: 'Link',
        origin: 'Zelda: Breath of the Wild (2018)',
        image: 'assets/link.jpg',
        gender: 'male',
        archetype: 'hero',
        weapon: 'physical'
    },
    {   
        name: 'Samus',
        origin: 'Metroid (1986)',
        image: 'assets/samus.jpg',
        gender: 'female',
        archetype: 'hero',
        weapon: 'physical'
    },
    {   
        name: 'Dark Samus',
        origin: 'Metroid Prime 2: Echoes (2004)',
        image: 'assets/darksamus.jpg',
        gender: 'female',
        archetype: 'badAss',
        weapon: 'physical'
    },
    {   
        name: 'Yoshi',
        origin: 'Super Mario World (1990)',
        image: 'assets/yoshi.jpg',
        gender: 'nonHuman',
        archetype: 'cute',
        weapon: 'physical'
    },
    {   
        name: 'Kirby',
        origin: 'Kirby\'s Dream Land (1992)',
        image: 'assets/kirby.jpg',
        gender: 'nonHuman',
        archetype: 'cute',
        weapon: 'physical'
    },
    {   
        name: 'Fox McCloud',
        origin: 'Star Fox (1993)',
        image: 'assets/fox.jpg',
        gender: 'nonHuman',
        archetype: 'hero',
        weapon: 'physical'
    },
    {   
        name: 'Pikachu',
        origin: 'Pokémon Red and Blue (1996)',
        image: 'assets/pikachu.jpg',
        gender: 'nonHuman',
        archetype: 'cute',
        weapon: 'magical'
    },
    {   
        name: 'Luigi',
        origin: 'Mario Bros. (1983)',
        image: 'assets/luigi.jpg',
        gender: 'male',
        archetype: 'cute',
        weapon: 'physical'
    },
    {   
        name: 'Ness',
        origin: 'Earthbound (1994)',
        image: 'assets/ness.jpg',
        gender: 'male',
        archetype: 'cute',
        weapon: 'magical'
    },
    {   
        name: 'Captain Falcon',
        origin: 'F-Zero (1990)',
        image: 'assets/captainfalcon.jpg',
        gender: 'male',
        archetype: 'hero',
        weapon: 'magical'
    },
    {   
        name: 'Jigglypuff',
        origin: 'Pokemon Red and Blue (1998)',
        image: 'assets/jigglypuff.jpg',
        gender: 'nonHuman',
        archetype: 'cute',
        weapon: 'physical'
    },
    {   
        name: 'Peach',
        origin: 'Super Mario Bros. (1985)',
        image: 'assets/peach.jpg',
        gender: 'female',
        archetype: 'hero',
        weapon: 'physical'
    },
    {   
        name: 'Daisy',
        origin: 'Super Mario Land (1989)',
        image: 'assets/daisy.jpg',
        gender: 'female',
        archetype: 'cute',
        weapon: 'physical'
    },
    {   
        name: 'Bowser',
        origin: 'Mario Bros. (1983)',
        image: 'assets/bowser.jpg',
        gender: 'nonHuman',
        archetype: 'badAss',
        weapon: 'physical'
    }, 
    {   
        name: 'Ice Climbers',
        origin: 'Ice Climber (1985)',
        image: 'assets/iceclimbers.jpg',
        gender: 'female',
        archetype: 'cute',
        weapon: 'magical'
    }, 
    {   
        name: 'Sheik',
        origin: 'The Legend of Zelda: Ocarina of Time (1998)',
        image: 'assets/sheik.jpg',
        gender: 'female',
        archetype: 'hero',
        weapon: 'physical'
    }, 
    {   
        name: 'Princess Zelda',
        origin: 'The Legend of Zelda (1986)',
        image: 'assets/zelda.jpg',
        gender: 'female',
        archetype: 'cute',
        weapon: 'magical'
    }, 
    {   
        name: 'Dr. Mario',
        origin: 'Dr.Mario (1990)',
        image: 'assets/drmario.jpg',
        gender: 'male',
        archetype: 'cute',
        weapon: 'physical'
    }, 
    {   
        name: 'Pichu',
        origin: 'Pokemon Gold and Silver (1999)',
        image: 'assets/pichu.jpg',
        gender: 'nonHuman',
        archetype: 'cute',
        weapon: 'magical'
    }, 
    {   
        name: 'Falco',
        origin: 'Star Fox (1993)',
        image: 'assets/falco.jpg',
        gender: 'nonHuman',
        archetype: 'hero',
        weapon: 'magical'
    }, 
    {   
        name: 'Marth',
        origin: 'Fire Emblem (1992)',
        image: 'assets/marth.jpg',
        gender: 'male',
        archetype: 'hero',
        weapon: 'physical'
    }, 
    {   
        name: 'Lucina',
        origin: 'Fire Emblem: Awakening (2012)',
        image: 'assets/lucina.jpg',
        gender: 'female',
        archetype: 'hero',
        weapon: 'physical'
    }, 
    {   
        name: 'Young Link',
        origin: 'The Legend of Zelda (1986)',
        image: 'assets/younglink.jpg',
        gender: 'male',
        archetype: 'cute',
        weapon: 'physical'
    }, 
    {   
        name: 'Ganondorf',
        origin: 'The Legend of Zelda (1986)',
        image: 'assets/ganondorf.jpg',
        gender: 'nonHuman',
        archetype: 'badAss',
        weapon: 'physical'
    }, 
    {   
        name: 'Mewtwo',
        origin: 'Pokemon: Red and Blue (1996)',
        image: 'assets/mewtwo.jpg',
        gender: 'nonHuman',
        archetype: 'badAss',
        weapon: 'magical'
    }, 
    {   
        name: 'Roy',
        origin: 'Fire Emblem: The Binding Blade (2002)',
        image: 'assets/roy.jpg',
        gender: 'male',
        archetype: 'hero',
        weapon: 'magical'
    }, 
    {   
        name: 'Chrom',
        origin: 'Fire Emblem: Awakening (2012)',
        image: 'assets/chrom.jpg',
        gender: 'male',
        archetype: 'badAss',
        weapon: 'physical'
    }, 
    {   
        name: 'Mr. Game & Watch',
        origin: 'Ball (1980)',
        image: 'assets/gameandwatch.jpg',
        gender: 'nonHuman',
        archetype: 'cute',
        weapon: 'magical'
    }, 
    {   
        name: 'Meta Knight',
        origin: 'Kirby\'s Adventure (1993)',
        image: 'assets/metaknight.jpg',
        gender: 'nonHuman',
        archetype: 'badAss',
        weapon: 'magical'
    }, 
    {   
        name: 'Pit',
        origin: 'Kid Icarus (1986)',
        image: 'assets/pit.jpg',
        gender: 'male',
        archetype: 'hero',
        weapon: 'magical'
    }, 
    {   
        name: 'Dark Pit',
        origin: 'Kid Icarus: Uprising (2012)',
        image: 'assets/darkpit.jpg',
        gender: 'male',
        archetype: 'badAss',
        weapon: 'physical'
    },
    {   
        name: 'Zero Suit Samus',
        origin: 'Metroid: Zero Mission (2004)',
        image: 'assets/zerosuitsamus.jpg',
        gender: 'female',
        archetype: 'badAss',
        weapon: 'physical'
    },
    {   
        name: 'Wario',
        origin: 'Super Mario Land 2 (1992)',
        image: 'assets/wario.jpg',
        gender: 'male',
        archetype: 'badAss',
        weapon: 'physical'
    },
    {
        name: 'Snake',
        origin: 'Metal Gear (1987)',
        image: 'assets/snake.jpg',
        gender: 'male',
        archetype: 'badAss',
        weapon: 'physical'
    },
    {
        name: 'Ike',
        origin: 'Fire Emblem: Path of Radiance (2005)',
        image: 'assets/Ike.jpg',
        gender: 'male',
        archetype: 'hero',
        weapon: 'physical'
    },
    {
        name: 'Pokemon Trainer',
        origin: 'Pokemon: Red and Blue (1996)',
        image: 'assets/pokemontrainer.jpg',
        gender: 'male',
        archetype: 'badAss',
        weapon: 'magical'
    },
    {
        name: 'Diddy Kong',
        origin: 'Donkey Kong Country (1994)',
        image: 'assets/diddykong.jpg',
        gender: 'nonHuman',
        archetype: 'cute',
        weapon: 'physical'
    },
    {
        name: 'Lucas',
        origin: 'Earthbound/Mother 3 (2006)',
        image: 'assets/lucas.jpg',
        gender: 'male',
        archetype: 'cute',
        weapon: 'magical'
    },
    {
        name: 'Sonic',
        origin: 'Sonic the Hedgehog (1991)',
        image: 'assets/sonic.jpg',
        gender: 'nonHuman',
        archetype: 'cute',
        weapon: 'magical'
    },
    {
        name: 'King Dedede',
        origin: "Kirby's Dream Land (1992)",
        image: 'assets/kingdedede.jpg',
        gender: 'nonHuman',
        archetype: 'badAss',
        weapon: 'physical'
    },
    {
        name: 'Olimar',
        origin: 'Pikmin (2001)',
        image: 'assets/olimar.jpg',
        gender: 'male',
        archetype: 'cute',
        weapon: 'magical'
    },
    {
        name: 'Lucario',
        origin: 'Pokemon: Diamond and Pearl (2006)',
        image: 'assets/lucario.jpg',
        gender: 'nonHuman',
        archetype: 'hero',
        weapon: 'physical'
    },
    {
        name: 'R.O.B.',
        origin: 'Stack-Up (1985)',
        image: 'assets/rob.jpg',
        gender: 'nonHuman',
        archetype: 'hero',
        weapon: 'magical'
    },
    {
        name: 'Toon Link',
        origin: 'The Legend of Zelda: The Wind Waker (2002)',
        image: 'assets/toonlink.jpg',
        gender: 'male',
        archetype: 'cute',
        weapon: 'physical'
    },
    {
        name: 'Wolf O\'Donnel',
        origin: 'Star Fox 64 (1997)',
        image: 'assets/wolf.jpg',
        gender: 'nonHuman',
        archetype: 'badAss',
        weapon: 'physical'
    },
    {
        name: 'Villager',
        origin: 'Animal Crossing (2001)',
        image: 'assets/villager.jpg',
        gender: 'male',
        archetype: 'cute',
        weapon: 'magical'
    },
    {
        name: 'Mega Man',
        origin: 'Mega Man (1987)',
        image: 'assets/megaman.jpg',
        gender: 'male',
        archetype: 'cute',
        weapon: 'physical'
    },
    {
        name: 'Wii Fit Trainer',
        origin: 'Wii Fit (2007)',
        image: 'assets/trainer.jpg',
        gender: 'female',
        archetype: 'hero',
        weapon: 'magical'
    },
    {
        name: 'Rosalina & Luma',
        origin: 'Super Mario Galaxy (2007)',
        image: 'assets/rosalina.jpg',
        gender: 'female',
        archetype: 'cute',
        weapon: 'magical'
    },
    {
        name: 'Little Mac',
        origin: 'Mike Tyson\'s PunchOut!! (1987)',
        image: 'assets/littlemac.jpg',
        gender: 'male',
        archetype: 'hero',
        weapon: 'physical'
    },
    {
        name: 'Greninja',
        origin: 'Pokemon X and Y (2013)',
        image: 'assets/greninja.jpg',
        gender: 'NH',
        archetype: 'hero',
        weapon: 'magical'
    },
    {
        name: 'Palutena',
        origin: 'Kid Icarus (1986)',
        image: 'assets/palutena.jpg',
        gender: 'female',
        archetype: 'hero',
        weapon: 'physical'
    },
    {
        name: 'Pac-Man',
        origin: 'Pac-man (1980)',
        image: 'assets/pacman.jpg',
        gender: 'nonHuman',
        archetype: 'cute',
        weapon: 'physical'
    },
    {
        name: 'Robin',
        origin: 'Fire Emblem: Awakening (2012)',
        image: 'assets/robin.jpg',
        gender: 'female',
        archetype: 'hero',
        weapon: 'magical'
    },
    {
        name: 'Shulk',
        origin: 'Xenoblade Chronicles (2010)',
        image: 'assets/shulk.jpg',
        gender: 'male',
        archetype: 'hero',
        weapon: 'magical'
    },
    {
        name: 'Bowser Jr.',
        origin: 'Super Mario Sunshine (2002)',
        image: 'assets/bowserjr.jpg',
        gender: 'nonHuman',
        archetype: 'badAss',
        weapon: 'physical'
    },
    {
        name: 'Duck Hunt',
        origin: 'Duck Hunt (1984)',
        image: 'assets/duckhunt.jpg',
        gender: 'nonHuman',
        archetype: 'cute',
        weapon: 'physical'
    },
    {
        name: 'Ryu',
        origin: 'Street Fighter (1987)',
        image: 'assets/ryu.jpg',
        gender: 'male',
        archetype: 'hero',
        weapon: 'physical'
    },
    {
        name: 'Ken Masters',
        origin: 'Street Fighter (1987)',
        image: 'assets/ken.jpg',
        gender: 'male',
        archetype: 'badAss',
        weapon: 'magical'
    },
    {
        name: 'Cloud Strife',
        origin: 'Final Fantasy VII (1997)',
        image: 'assets/cloud.jpg',
        gender: 'male',
        archetype: 'hero',
        weapon: 'physical'
    },
    {
        name: 'Corrin',
        origin: 'Fire Emblem Fates (2015)',
        image: 'assets/corrin.jpg',
        gender: 'female',
        archetype: 'badAss',
        weapon: 'magical'
    },
    {
        name: 'Bayonetta',
        origin: 'Bayonetta (2009)',
        image: 'assets/bayonetta.jpg',
        gender: 'female',
        archetype: 'badAss',
        weapon: 'magical'
    },
    {
        name: 'Inkling',
        origin: 'Splatoon (2015)',
        image: 'assets/inkling.jpg',
        gender: 'female',
        archetype: 'badAss',
        weapon: 'physical'
    },
    {
        name: 'Ridley',
        origin: 'Metroid (1986)',
        image: 'assets/ridley.jpg',
        gender: 'nonHuman',
        archetype: 'badAss',
        weapon: 'physical'
    },
    {
        name: 'Simon Belmont',
        origin: 'Castlevania II: Simon\'s Quest (1987)',
        image: 'assets/simon.jpg',
        gender: 'male',
        archetype: 'hero',
        weapon: 'physical'
    },
    {
        name: 'Richter Belmont',
        origin: 'Castlevania: Rondo of Blood" (1993)',
        image: 'assets/richter.jpg',
        gender: 'male',
        archetype: 'badAss',
        weapon: 'physical'
    },
    {
        name: 'King K. Rool',
        origin: 'Donkey Kong Country (1994)',
        image: 'assets/kingkrool.jpg',
        gender: 'nonHuman',
        archetype: 'badAss',
        weapon: 'magical'
    },
    {
        name: 'Isabelle',
        origin: 'Animal Crossing: New Leaf (2012)',
        image: 'assets/isabella.jpg',
        gender: 'nonHuman',
        archetype: 'cute',
        weapon: 'physical'
    },
    {
        name: 'Incineroar',
        origin: 'Pokemon Sun and Moon (2016)',
        image: 'assets/incineroar.jpg',
        gender: 'nonHuman',
        archetype: 'badAss',
        weapon: 'magical'
    },
    {
        name: 'Piranha Plant',
        origin: 'Super Mario Bros. (1985)',
        image: 'assets/plant.jpg',
        gender: 'nonHuman',
        archetype: 'cute',
        weapon: 'physical'
    },
];

const smashApp = {};

smashApp.init = () => {
    $('form').on('submit',function(e) {
        e.preventDefault();
        $(function () {
            $("#submit").val("Get a different character!");
            $('input[type="radio"]').prop('checked', false);
            $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
            return false;
        });

        smashApp.userInput();
        smashApp.createGenderArray();
        smashApp.createTypeArray();
        smashApp.createWeaponArray();
        smashApp.printFinal();
    })
};

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

smashApp.createWeaponArray = () => {
    smashApp.finalChoice = smashApp.finalChoice.filter((index) => {
        return index.weapon === smashApp.weaponChoice;
    })
};

smashApp.printFinal = () => {
    smashApp.randomChoice = Math.floor(Math.random() * smashApp.finalChoice.length);
        $('.results').html(`<h2 class="userChoice"> ${smashApp.finalChoice[smashApp.randomChoice].name}</h2>`);
        $('.origin').html(`<h3 class="origin"><span>Origin:</span> ${smashApp.finalChoice[smashApp.randomChoice].origin}</h3>`);
        $('.character-image img').attr('src', `${smashApp.finalChoice[smashApp.randomChoice].image}`);
        
};

smashApp.userInput = () => {
    smashApp.genderChoice = $('input[name=gender]:checked').val();
    smashApp.archetypeChoice = $('input[name=type]:checked').val();
    smashApp.weaponChoice = $('input[name=weapon]:checked').val();
};

$(function(){
    smashApp.init();
});