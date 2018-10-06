const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline')

var port = new SerialPort('/dev/cu.usbmodem1413', {
  baudRate: 9600
});

const parser = new Readline()
port.pipe(parser)

parser.on('data', function (data) {
  console.log('Recieved:', data);
});

function send(msg) {
  port.write(msg);
}
