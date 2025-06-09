const express - require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/convert', (req, res) => {
  const { value, type } = req.body;
  const num = parseFloat(value);
  let result;

  if (isNaN(num)) {
    return res.send('Invalid input. Please enter a number.');
  }

  switch (type) {
    case 'c-to-f':
      result = `${num}°C = ${(num * 9/5 + 32).toFixed(2)}°F`;
      break;
    case 'f-to-c':
      result = `${num}°F = ${((num - 32) * 5/9).toFixed(2)}°C`;
      break;
    case 'kg-to-lb':
      result = `${num} kg = ${(num * 2.20462).toFixed(2)} lb`;
      break;
    case 'lb-to-kg':
      result = `${num} lb = ${(num / 2.20462).toFixed(2)} kg`;
      break;
    default:
      result = 'Invalid conversion type.';
  }

  res.send(`<p>${result}</p>`);
});

app.listen(3000, () => {
  console.log('Converter app running on http://localhost:3000');
});
