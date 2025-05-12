document.getElementById('lookup-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const serial = document.getElementById('serial').value.toUpperCase();
  const data = JSON.parse(localStorage.getItem(serial));

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  if (data) {
    resultDiv.innerHTML = `
      <p><strong>メッセージ:</strong> ${data.message}</p>
      <p><strong>有効期限:</strong> ${data.expires}</p>
    `;
  } else {
    resultDiv.innerHTML = '<p style="color:red;">シリアル番号が見つかりません。</p>';
  }
});
