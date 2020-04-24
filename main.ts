namespace SpriteKind {
    export const edge = SpriteKind.create()
    export const ball = SpriteKind.create()
    export const top = SpriteKind.create()
    export const brick = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.ball, SpriteKind.brick, function (sprite, otherSprite) {
    info.changeScoreBy(15)
    otherSprite.destroy(effects.ashes, 100)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    numBrick += -1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log(convertToText(numBrick))
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.edge, function (sprite, otherSprite) {
    sprite.setVelocity(-1 * sprite.vx, sprite.vy)
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity((sprite.x - otherSprite.x) * 3, -1 * sprite.vy)
    if (sprite.vy > -150) {
        sprite.vy += -7
    }
})
function buildSetBricks () {
    for (let index = 0; index <= 6; index++) {
        for (let index2 = 0; index2 < 4; index2++) {
            createBrick(index * 16 + 32, colum * 8 + 24)
            colum += 1
        }
        colum = 0
    }
}
function createBrick (x: number, y: number) {
    randNum = Math.randomRange(0, 2)
    if (randNum == 0) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (randNum == 1) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    }
    brick2.setPosition(x, y)
    numBrick += 1
}
sprites.onOverlap(SpriteKind.ball, SpriteKind.top, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
})
let brick2: Sprite = null
let randNum = 0
let colum = 0
let numBrick = 0
info.setScore(0)
info.setLife(3)
let startBallVar = 0
scene.setBackgroundColor(12)
let paddle = sprites.create(img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, SpriteKind.Player)
paddle.setPosition(80, 110)
controller.moveSprite(paddle, 100, 0)
paddle.setFlag(SpriteFlag.StayInScreen, true)
let top = sprites.create(img`
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
`, SpriteKind.top)
top.setPosition(80, 0)
let right = sprites.create(img`
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
`, SpriteKind.edge)
right.setPosition(159, 60)
let left = sprites.create(img`
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
b 
`, SpriteKind.edge)
left.setPosition(0, 60)
let ballVar = sprites.create(img`
. 1 1 . 
1 1 1 1 
1 1 1 1 
. 1 1 . 
`, SpriteKind.ball)
numBrick = 0
colum = 0
buildSetBricks()
game.onUpdate(function () {
    if (startBallVar == 0) {
        ballVar.setPosition(paddle.x, 105)
        ballVar.setVelocity(0, 0)
        if (controller.A.isPressed()) {
            startBallVar = 1
        }
    }
    if (startBallVar == 1) {
        ballVar.setVelocity(Math.randomRange(-30, 30), -50)
        startBallVar = 2
    }
    if (ballVar.y > 115) {
        startBallVar = 0
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (numBrick <= 0) {
        numBrick = 0
        startBallVar = 0
        effects.confetti.startScreenEffect()
        pause(2000)
        effects.confetti.endScreenEffect()
        buildSetBricks()
        info.changeScoreBy(100)
    }
})
