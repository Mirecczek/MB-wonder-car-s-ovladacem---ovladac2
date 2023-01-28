input.onButtonPressed(Button.A, function () {
    radio.sendString("HORN")
})
GHBit.onKey(GHBit.enButton.B3, function () {
    if (tlacitka == 0) {
        tlacitka = 1
        stisknuto = 3
    } else if (tlacitka == 1) {
        stisknuto = 3
        tlacitka = 0
        basic.clearScreen()
    }
})
GHBit.onKey(GHBit.enButton.B1, function () {
    if (tlacitka == 0) {
        tlacitka = 1
        stisknuto = 1
    } else if (tlacitka == 1) {
        stisknuto = 0
        tlacitka = 0
        basic.clearScreen()
    }
})
GHBit.onKey(GHBit.enButton.B4, function () {
    if (tlacitka == 0) {
        tlacitka = 1
        stisknuto = 4
    } else if (tlacitka == 1) {
        stisknuto = 4
        tlacitka = 0
        basic.clearScreen()
    }
})
GHBit.onKey(GHBit.enButton.B2, function () {
    if (tlacitka == 0) {
        tlacitka = 1
        stisknuto = 2
    } else if (tlacitka == 1) {
        stisknuto = 2
        tlacitka = 0
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("LIGHT")
})
let stisknuto = 0
let tlacitka = 0
basic.showLeds(`
    . . . . .
    . . # # #
    . # # # #
    # # # # #
    . # . . #
    `)
radio.setGroup(15)
radio.setTransmitPower(7)
tlacitka = 0
basic.forever(function () {
    if (tlacitka == 0) {
        if (GHBit.Rocker(GHBit.enRocker.Up)) {
            radio.sendString("UP")
            basic.showArrow(ArrowNames.North)
        } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
            radio.sendString("DOWN")
            basic.showArrow(ArrowNames.South)
        } else if (GHBit.Rocker(GHBit.enRocker.Left)) {
            radio.sendString("LEFT")
            basic.showArrow(ArrowNames.West)
        } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
            radio.sendString("RIGHT")
            basic.showArrow(ArrowNames.East)
        } else if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
            radio.sendString("0")
        } else if (GHBit.Rocker(GHBit.enRocker.Press)) {
            radio.sendString("PRESS")
        }
    } else if (tlacitka == 1) {
        if (stisknuto == 1) {
            radio.sendString("RED")
            basic.showString("R")
        }
        if (stisknuto == 2) {
            radio.sendString("GREEN")
            basic.showString("G")
        }
        if (stisknuto == 4) {
            radio.sendString("YELLOW")
            basic.showString("Y")
        }
        if (stisknuto == 3) {
            radio.sendString("BLUE")
            basic.showString("B")
        }
    }
})
