let mode = 0
let num = 0
let tilt = 0

input.onButtonPressed(Button.A, function () {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
        let num = randint(1, 12)
        basic.showNumber(num)
        basic.pause(1000)
})
basic.forever(function () {
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
