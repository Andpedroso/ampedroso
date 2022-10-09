const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 64 * 16
canvas.height = 64 * 9
let parsedCollisions
let collisionBlocks
let background
let doors
const player = new Player
({ 
    imageSrc: './anubis/img/king/idle.png', 
    frameRate: 11,
    animations: 
    {
        idleRight:
        {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: './anubis/img/king/idle.png'
        },
        idleLeft:
        {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: './anubis/img/king/idleLeft.png'
        },
        runRight:
        {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: './anubis/img/king/runRight.png'
        },
        runLeft:
        {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: './anubis/img/king/runLeft.png'
        },
        enterDoor:
        {
            frameRate: 8,
            frameBuffer: 4,
            loop: false,
            imageSrc: './anubis/img/king/enterDoor.png',
            onComplete: () => 
            {
                gsap.to
                (
                    overlay, 
                    {
                        opacity: 1, 
                        onComplete: () => 
                        {
                            level++
                            if(level === 4) level = 1
                            levels[level].init()
                            player.switchSprite('idleRight')
                            player.preventInput = false
                            gsap.to
                            (
                                overlay,
                                {opacity: 0}
                            )
                        }
                    }
                )
            }
        }
    }
})
let level = 1
let levels = 
{
    1: 
    {
        init: () => 
        {
            parsedCollisions = collisionsLevel1.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            if(player.currentAnimation) player.currentAnimation.isActive = false
            background = new Sprite
            ({
                position: 
                {
                    x: 0,
                    y: 0
                },
                imageSrc: './anubis/img/backgroundLevel1.png'
            })
            doors = 
            [
                new Sprite
                ({
                    position: 
                    {
                        x: 768,
                        y: 272
                    },
                    imageSrc: './anubis/img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false
                })
            ]
        }
    },
    2: 
    {
        init: () => 
        {
            parsedCollisions = collisionsLevel2.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            player.position.x = 94
            player.position.y = 157.33
            if(player.currentAnimation) player.currentAnimation.isActive = false
            background = new Sprite
            ({
                position: 
                {
                    x: 0,
                    y: 0
                },
                imageSrc: './anubis/img/backgroundLevel2.png'
            })
            doors = 
            [
                new Sprite
                ({
                    position: 
                    {
                        x: 771,
                        y: 336
                    },
                    imageSrc: './anubis/img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false
                })
            ]
        }
    },
    3: 
    {
        init: () => 
        {
            parsedCollisions = collisionsLevel3.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            player.position.x = 760
            player.position.y = 218
            if(player.currentAnimation) player.currentAnimation.isActive = false
            background = new Sprite
            ({
                position: 
                {
                    x: 0,
                    y: 0
                },
                imageSrc: './anubis/img/backgroundLevel3.png'
            })
            doors = 
            [
                new Sprite
                ({
                    position: 
                    {
                        x: 176,
                        y: 334
                    },
                    imageSrc: './anubis/img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false
                })
            ]
        }
    }
}
const keys =
{
    w: {pressed: false},
    a: {pressed: false},
    d: {pressed: false}
}
const overlay = {opacity: 0}
function animate()
{
    window.requestAnimationFrame(animate)
    background.draw()
    // collisionBlocks.forEach((CollisionBlock) => 
    // {
    //     CollisionBlock.draw()
    // })
    doors.forEach((door) => 
    {
        door.draw()
    })
    player.handleInput(keys)
    player.draw()
    player.update()
    c.save()
    c.globalAlpha = overlay.opacity
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.restore()
}
levels[level].init()
animate()