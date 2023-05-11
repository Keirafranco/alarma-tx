radio.setGroup(115)
music.setVolume(35)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 600) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            # # . . .
            . . . . .
            `)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    } else {
        radio.sendNumber(0)
        music.stopAllSounds()
        basic.clearScreen()
    }
})
