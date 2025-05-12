// フォームの送信イベントをキャッチ
document.getElementById('coupon-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // 入力値を取得
  const message = document.getElementById('message').value;
  const days = parseInt(document.getElementById('days').value);
  
  // シリアル番号生成
  const serial = generateSerial();

  // 有効期限を計算（今日 + 入力の日数）
  const expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + days);

  // 結果オブジェクトにまとめる
  const result = {
    serial: serial,
    message: message,
    expires: expireDate.toISOString().split('T')[0]
  };

  // 結果を画面に表示（改行は pre 要素のように出力するか、<br> タグに変換）
  document.getElementById('result').innerHTML = `
    シリアル番号: ${result.serial}<br>
    メッセージ: ${result.message}<br>
    有効期限: ${result.expires}
  `;

  // localStorage にシリアル番号をキーとして結果オブジェクトを保存
  localStorage.setItem(serial, JSON.stringify(result));
});

// シンプルなランダムシリアル番号を生成する関数（8文字）
function generateSerial() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let serial = '';
  for (let i = 0; i < 8; i++) {
    serial += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return serial;
}
