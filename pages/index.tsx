import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Copyright from '../src/Copyright';
import MenuAppBar from '../src/Menu';
import SimpleCard from '../src/Card';
import Link from '../src/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: "100%",
  },
  media: {
    height: 140,
  },
  body: {},
  actions: {}
});

export default function Index() {
  const styles = useStyles();
  return (
    <Container maxWidth="xl">
      <MenuAppBar/>
      <Box my={10}>
        <Box my={3}>
          <Typography variant="h5" component="h1" gutterBottom>
            Examples from Arduino Libraries
          </Typography>
        </Box>
        <Grid container spacing={2} direction="row" justify="center" alignItems="stretch">
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="FastLED"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/neopixel-matrix.png"
              link="https://wokwi.com/arduino/libraries/FastLED">
              Multi-platform library for controlling dozens of different types of LEDs along with optimized math, effect, and noise functions.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="Servo"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/servo.png"
              link="https://wokwi.com/arduino/libraries/Servo">
              Allows Arduino/Genuino boards to control a variety of servo motors.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="Adafruit SSD1306"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/ssd1306.png"
              link="https://wokwi.com/arduino/libraries/ssd1306">
              Provides API for working with monochrome and color oled/lcd displays over i2c/spi, and VGA monitor.
            </SimpleCard>
          </Grid>
        </Grid>
        <Box my={3}>
          <Typography variant="h5" component="h1" gutterBottom>
            Arduino Code Playgrounds
          </Typography>
        </Box>
        <Grid container spacing={3} direction="row" justify="center" alignItems="stretch">
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="Alarm Clock"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/alarm-clock.png"
              link="https://wokwi.com/playground/alarm-clock">
              Digital Alarm Clock with RTC and Snooze function.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="Blink"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/blink.png"
              link="https://wokwi.com/playground/blink">
              The "Hello World" Arduino code example: Blinking an LED.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="Blink without Delay"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/blink-without-delay-3-leds.png"
              link="https://wokwi.com/playground/blink-without-delay-3-leds">
              This is the sample code from Dan Hoover's article Understanding Blink Without Delay.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="Calculator"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/calculator.png"
              link="https://wokwi.com/playground/calculator">
              For more information, check out the&nbsp;
              <Link
                href="https://goodarduinocode.com/?utm_source=wokwi&utm_medium=site&utm_campaign=calculator"
                color="inherit">Calculator Project Page</Link>.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="Charlieplexing"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/charlieplexing.png"
              link="https://wokwi.com/playground/charlieplexing">
              Charlieplexing is a technique that lets you control a large number of LEDs using just a few Arduino pins.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="Game Dice"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/dice-roller.png"
              link="https://wokwi.com/playground/dice-roller">
              Write your code in the editor on the right.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="Electronic Safe"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/electronic-safe.png"
              link="https://wokwi.com/playground/electronic-safe">
              For more information, check out the Electronic Safe Project Page.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="FastLED Color Palette"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/fastled.png"
              link="https://wokwi.com/playground/fastled">
              The NeoPixel strip is connected to Arduino pin 5. Click the "Run Code" to see it in action.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="I²C Scanner"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/i2c-scanner.png"
              link="https://wokwi.com/playground/i2c-scanner">
              This sample shows how to scan the I2C bus and detect the devices attached to it.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="Keypad"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/keypad.png"
              link="https://wokwi.com/playground/keypad">
              The rows of the keypad are connected to arduino pins.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="LCD1602 Playground"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/lcd1602-i2c.png"
              link="https://wokwi.com/playground/lcd1602-i2c">
              The LCD1602 is connected at I²C address 0x27.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="Serial Monitor"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/serial.png"
              link="https://wokwi.com/playground/serial">
              This is the perfect place to paste some Arduino code, run it and see the output.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="7 Segment Clock"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/seven-segment-clock.png"
              link="https://wokwi.com/playground/seven-segment-clock">
              A simple 7-segment clock/stopwatch that counts minutes and seconds.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="NeoPixel Matrix"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/neopixel-matrix.png"
              link="https://wokwi.com/playground/neopixel-matrix">
              This 16x16 NeoPixel matrix connected to Arduino.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="NeoPixel Strip"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/neopixel-strip.png"
              link="https://wokwi.com/playground/neopixel-strip">
              The NeoPixel strip connected to Arduino.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="Potentiometer"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/potentiometer.png"
              link="https://wokwi.com/playground/potentiometer">
              Rotating the potentiometer will change the blink rate of the LED.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="Rotary Dialer"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/rotary-dialer.png"
              link="https://wokwi.com/playground/rotary-dialer">
              Vintage dial phone for arduino.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="Simon Game"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/simon-game.png"
              link="https://wokwi.com/playground/simon-game">
              Simon Memory Game for Arduino with Sound.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="Spaceship Game"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/spaceship-game.png"
              link="https://wokwi.com/playground/spaceship-game">
              Spaceship Game from Volos Projects.
            </SimpleCard>
          </Grid>
          <Grid item xs={6} sm={4} lg={3} xl={2}>
            <SimpleCard
              title="Traffic Light"
              classes={styles}
              image="https://wokwi.com/images/playgrounds/traffic-light.png"
              link="https://wokwi.com/playground/traffic-light">
              This sketch implements a simple traffic light.
            </SimpleCard>
          </Grid>
        </Grid>
        <Copyright />
      </Box>
    </Container>
  );
}
