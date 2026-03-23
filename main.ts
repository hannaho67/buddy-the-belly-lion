input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    num2 = randint(1, 6)
    basic.showNumber(num2)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    num3 = randint(1, 12)
    basic.showNumber(num3)
    basic.pause(1000)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    num2 = randint(1, 6)
    basic.showNumber(num2)
    basic.pause(1000)
})
let tilt = 0
let num3 = 0
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
