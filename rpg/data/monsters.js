const monsters = 
{
    Emby: {
        position: {
            x: 280,
            y: 325
        },
        image: {src:'rpg/img/embySprite.png'},
        frames: {
            max: 4,
            hold: 30
        },
        animate: true,
        name: 'Olaf',
        attacks: [attacks.Tackle, attacks.Fireball]
    },
    Draggle: {
        position: {
            x: 800,
            y: 100
        },
        image: {src:'rpg/img/draggleSprite.png'},
        frames: {
            max: 4,
            hold: 30
        },
        animate: true,
        isEnemy: true,
        name: 'Njal Forces',
        attacks: [attacks.Tackle, attacks.Fireball]
    }
}