const express = require('express');
const path = require('path');
const SerialPort = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const app = express();
const port = 8080;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// เชื่อมต่อกับ ESP32 ที่พอร์ต COM3 (เปลี่ยนถ้าจำเป็น)
const espPort = new SerialPort({ path: 'COM3', baudRate: 115200 });
const parser = espPort.pipe(new ReadlineParser());

parser.on('data', (data) => {
  console.log('📨 จาก ESP32:', data);
});

// เมื่อกดปุ่มในเว็บ เรียก /unlock
app.post('/unlock', (req, res) => {
  console.log('🔓 รับคำสั่งเปิดตู้จากเว็บ');
  espPort.write('UNLOCK\n'); // ส่งคำสั่งไป ESP32
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`📡 Server started at http://localhost:${port}`);
});
