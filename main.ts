input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    num2 = randint(1, 12)
    basic.showNumber(num2)
    basic.pause(1000)
})
let tilt = 0
let num2 = 0
let num = 0
basic.forever(function () {
    let mode = 0
    if (mode == 0) {
        basic.showIcon(IconNames.Happy)
    }
    if (mode == 2) {
        tilt = input.rotation(Rotation.Roll)
        if (tilt > 30) {
            basic.showArrow(ArrowNames.East)
        } else if (tilt < -30) {
            basic.showArrow(ArrowNames.West)
        }
    }
})
