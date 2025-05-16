let results = [];

for (let page = 1; page < 200; page++) {
  let response = await fetch("https://marketer.modash.io/api/discovery/search/instagram", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-GB,en;q=0.9",
    "content-type": "application/json",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-amzn-trace-id": "Root=1-681b1881-2d75ad6ac138a4be88216357;Parent=a7bea9c03133fc48;Sampled=1"
  },
  "referrer": "https://marketer.modash.io/discovery/instagram",
  "referrerPolicy": "same-origin",
  "body": "{\"page\":0,\"filters\":{\"influencer\":{\"accountTypes\":[],\"location\":[148838],\"hasContactDetails\":[],\"relevance\":{\"usernames\":[],\"hashtags\":[\"mom\",\"momanddaughter\",\"momandson\",\"mummy\"]},\"textTags\":[],\"interests\":[],\"keywords\":\"\",\"brands\":[],\"followers\":{\"min\":35000,\"max\":50000},\"engagementRate\":0.03},\"audience\":{\"location\":[],\"age\":[],\"interests\":[],\"brands\":[]},\"actions\":[],\"options\":{\"showSavedProfiles\":true},\"relevanceType\":\"relevance\"},\"sort\":{}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
let data = (await response.json());

let people = data.lookalikes;
results.push(people);
}


console.log(JSON.stringify(results));
