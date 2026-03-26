input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    num2 = randint(1, 6)
    basic.showNumber(num2)
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    num3 = randint(6, 12)
    basic.showNumber(num3)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
    basic.pause(500)
    if (num3 == 6) {
        basic.showString("DINNER")
    }
    if (num3 == 7) {
        basic.showString("PJ")
    }
    if (num3 == 8) {
        basic.showString("BRUSH")
    }
    if (num3 == 9) {
        basic.showString("STORY")
    }
    if (num3 == 10) {
        basic.showString("BEDTIME")
    }
    if (num3 == 11) {
        basic.showString("SLEEP")
    }
    if (num3 == 12) {
        basic.showString("DREAM")
    }
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
    }
})
