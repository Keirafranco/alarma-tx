radio.setGroup(1)
music.setVolume(35)
basic.forever(function () {
    if (input.magneticForce(Dimension.X) < 600) {
        radio.sendNumber(0)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    } else {
        radio.sendNumber(0)
        music.stopAllSounds()
        basic.clearScreen()
    }
})
