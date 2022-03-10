let pieniondze = 0
input.onButtonPressed(Button.A, function () {
    pieniondze += 1
    basic.showNumber(pieniondze)
})
input.onButtonPressed(Button.B, function () {
    pieniondze += -1
    basic.showNumber(pieniondze)
})
