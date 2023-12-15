const superhero = {
    name: ['Quantum Blaze', 'Solar Sentinel', 'Thunderstrike', 'Shadow Seraph', 'Velocity Vortex', 'Nebula Nova', 'Frostbite Fury', 'Iron Phoenix', 'Echo Enigma', 'Radiant Ronin', 'Mystic Mirage', 'Celestial Cyclone'],
    superpower: [
        'Chronokinesis - the ability to manipulate and control time.', 
        "Telepathic Camouflage - the skill to blend into surroundings by manipulating others' perceptions.", 
        'Gravitational Manipulation - control over gravitational forces, enabling you to manipulate gravity in various ways.', 
        'Biokinetic Healing - the power to rapidly heal oneself and others by manipulating biological processes at the cellular level.', 
        'Dimensional Phasing - the ability to pass through solid objects by temporarily shifting into another dimension.', 
        'Sonic Resonance - the power to generate and manipulate powerful sound waves for various effects, such as stunning enemies or creating protective barriers.', 
        'Holographic Projection - the capability to create realistic holographic illusions for purposes of disguise or distraction.',
        'Psychometric Sensing - the skill to gain information about a person or an event by touching objects associated with them, essentially reading the history and emotions tied to the objects.',
        'Quantum Blinking - the ability to instantly teleport short distances by briefly phasing out of the current dimension and reappearing in another, making the superhero appear to "blink" from one place to another.',
        "Elasticity Adaptation - the power to stretch and deform one's body at will, allowing for increased flexibility and resilience.",
        'Empathic Teleportation - the ability to teleport to a location based on the strong emotional connections or desires of oneself or others.',
        'Dreamwalking - the ability to enter and manipulate the dreams of oneself or others, exploring the dream world and influencing dream scenarios.'],
    planet: ['Astraloria', 'Nebulon Prime', 'Solaris Alpha', 'Galactara', 'Arcanis Major', 'Nova Luna', 'Vortexia', 'Stellaris Omega', 'Ecliptus Zeta', 'Aetherion Theta', 'Orionis Borealis']
}

function getRandomIndex(prop) {
    let randomIndex = Math.floor(Math.random() * prop.length);
    return randomIndex;
}

function randomizeMySuperhero() {
    const nameIndex = getRandomIndex(superhero.name);
    const powerIndex = getRandomIndex(superhero.superpower);
    const planetIndex = getRandomIndex(superhero.planet);

    const mySuperhero = {
        name: superhero.name[nameIndex],
        superpower: superhero.superpower[powerIndex],
        planet: superhero.planet[planetIndex]
    };

    return mySuperhero;
}