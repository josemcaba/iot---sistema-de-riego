pins.servoWritePin(AnalogPin.P13, 0)
OLED.init(128, 64)
basic.forever(function () {
    if (Environment.ReadWaterLevel(AnalogPin.P1) < 10) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
    if (Environment.ReadSoilHumidity(AnalogPin.P2) < 50) {
        pins.servoWritePin(AnalogPin.P13, 90)
    } else {
        pins.servoWritePin(AnalogPin.P13, 0)
    }
    OLED.clear()
    OLED.writeString("Nivel agua: ")
    OLED.writeNumNewLine(Environment.ReadWaterLevel(AnalogPin.P1))
    OLED.writeString("Humedad suelo: ")
    OLED.writeNumNewLine(Environment.ReadSoilHumidity(AnalogPin.P2))
})
