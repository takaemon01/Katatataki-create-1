document.getElementById('coupon-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const message = document.getElementById('message').value;
  const days = parseInt(document.getElementById('days').value);

  const serial = generateSerial();

  const expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + days);

  const result = {
    serial: serial,
    message: message,
    expires: expireDate.toISOString().split('T')[0]
  };

  document.getElementById('result').innerText = 
    `シリアル番号: ${result.serial}\nメッセージ: ${result.message}\n有効期限: ${result.expires}`;
});

function generateSerial() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let serial = '';
  for (let i = 0; i < 8; i++) {
    serial += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return serial;
}
