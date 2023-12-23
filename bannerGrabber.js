import net from 'net';

const targetHost = '127.0.0.1'
const targetPort = 3000

const socket = net.connect(targetPort, targetHost, () => {
    console.log('Connected to target');   
    socket.write('GET / HTTP/1.1\r\n');
    socket.write(`Host: ${targetHost}\r\n\r\n`);
})

socket.on('data', (data) => {
    console.log(String(data));
    socket.end();
})

socket.on('end', () => {
    console.log('Disconnected from target');
})

socket.on('error', (err) => {
    console.log(err);
})