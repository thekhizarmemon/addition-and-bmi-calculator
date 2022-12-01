const express = require(`express`);
const bodyParser = require(`body-parser`);

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get(`/`, function (req, res) {
  res.sendFile(`${__dirname}/index.html`);
});

app.post(`/`, function (req, res) {
  var num1 = parseInt(req.body.num1);
  var num2 = parseInt(req.body.num2);
  var result = num1 + num2;
  res.send(`Result: ${result}`);
});

app.get(`/bmi-calculator`, function (req, res) {
  res.sendFile(`${__dirname}/bmiCalculator.html`);
});

app.post(`/bmi-calculator`, function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / Math.pow(height, 2);
  res.send(`BMI: ${bmi}`);
});

app.listen(port, function () {
  console.log(`Server started listening...`);
});
