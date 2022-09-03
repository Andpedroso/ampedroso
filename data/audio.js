const audio = 
{
    Map: new Howl({
        src: 'rpg/audio/map.wav',
        html5: true,
        volume: 0.4
    }),
    initBattle: new Howl({
        src: 'rpg/audio/initBattle.wav',
        html5: true,
        volume: 0.4
    }),
    battle: new Howl({
        src: 'rpg/audio/battle.mp3',
        html5: true,
        volume: 0.6
    }),
    tackleHit: new Howl({
        src: 'rpg/audio/tackleHit.wav',
        html5: true,
        volume: 0.6
    }),
    fireballHit: new Howl({
        src: 'rpg/audio/fireballHit.wav',
        html5: true,
        volume: 0.6
    }),
    initFireball: new Howl({
        src: 'rpg/audio/initFireball.wav',
        html5: true,
        volume: 0.6
    }),
    victory: new Howl({
        src: 'rpg/audio/victory.wav',
        html5: true,
        volume: 0.6
    })
}