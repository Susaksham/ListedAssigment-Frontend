import axios from "axios";

// fetching all data
export const getTotalData = async () => {
  try {
    const response = await axios.get("https://api.coinranking.com/v2/stats");
    const data = response.data;
    const result = [
      {
        title: "Total Coins",
        value: data["data"]["totalCoins"],
        icon: "",
        color: "DDEFE0",
      },
      {
        title: "Total Exchanges",
        value: data["data"]["totalExchanges"],
        icon: "",
        color: "F4ECDD",
      },
      {
        title: "Total MarketCap",
        value: data["data"]["totalMarketCap"],
        icon: "",
        color: "EFDADA",
      },
      {
        title: "Total Markets",
        value: data["data"]["totalMarkets"],
        icon: "",
        color: "DEE0EF",
      },
    ];
    console.log(data);
    console.log(result);
    return { data: result, statusCode: response.status, error: "" };
  } catch (err) {
    console.log(err);
    return { error: err, statusCode: err.status, data: "" };
  }
};

export const getstockData = async (month, year) => {
  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=USD&apikey=M5J0JTMU4OX9VP5Y`
    );
    console.log(response.data);
    console.log(response.data["Time Series FX (Daily)"]);
    const obj = Object.assign({}, response.data["Time Series FX (Daily)"]);
    console.log(obj);

    const weeksData = [];

    for (const key in obj) {
      weeksData.push({ key: key, data: { ...obj[`${key}`] } });
    }

    console.log(weeksData);
    const result = weeksData.filter((week) => {
      const dataArray = week.key.split("-");
      const currentYear = dataArray[0];
      const currentMonth = dataArray[1];
      const day = dataArray[2];
      if (month == currentMonth && currentYear == year) {
        return true;
      } else {
        return false;
      }
    });
    console.log(result);
    return { data: result, statusCode: response.statusCode, error: "" };
  } catch (err) {
    console.log(err);
    return { data: "", statusCode: response.statusCode, error: err };
  }
};
