require('dotenv').config();

const { Backtest } = require('@fugle/backtest');
const { getData } = require('./data');
const { SmaCross } = require('./strategy');

async function main() {
  try {
    const data = await getData();
    const backtest = new Backtest(data, SmaCross, {
      cash: 1000000,
      tradeOnClose: true,
    });
    const results = await backtest.run();
    results.print();
    results.plot();
  } catch (e) {
    console.log(e)
  }
}

main();
