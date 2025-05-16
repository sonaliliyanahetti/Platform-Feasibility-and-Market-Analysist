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
      "x-amzn-trace-id": "Root=1-67e3c394-2f8120d7fedfce1bf0ab07dc;Parent=2ee79424d2d0b7ce;Sampled=1"
    },
    "referrer": "https://marketer.modash.io/discovery/instagram",
    "referrerPolicy": "same-origin",
    "body": "{\"page\":" +page+",\"filters\":{\"influencer\":{\"accountTypes\":[],\"location\":[148838],\"hasContactDetails\":[{\"contactType\":\"email\",\"filterAction\":\"must\"}],\"relevance\":{\"usernames\":[],\"hashtags\":[\"cooking\",\"cookingathome\",\"cookingtime\",\"cookingwithlove\",\"cookingvideo\",\"cookingclass\"]},\"textTags\":[{\"type\":\"hashtag\",\"value\":\"#cooking\",\"action\":\"should\"},{\"type\":\"hashtag\",\"value\":\"#cook\",\"action\":\"should\"},{\"type\":\"hashtag\",\"value\":\"#chef\",\"action\":\"should\"},{\"type\":\"hashtag\",\"value\":\"#cookingathome\",\"action\":\"should\"},{\"type\":\"hashtag\",\"value\":\"#cookingtime\",\"action\":\"should\"},{\"type\":\"hashtag\",\"value\":\"#cookingvideo\",\"action\":\"should\"},{\"type\":\"hashtag\",\"value\":\"#cookingvideos\",\"action\":\"should\"},{\"type\":\"hashtag\",\"value\":\"#cookingram\",\"action\":\"should\"},{\"type\":\"hashtag\",\"value\":\"#recipes\",\"action\":\"should\"},{\"type\":\"hashtag\",\"value\":\"#recipe\",\"action\":\"should\"}],\"interests\":[],\"keywords\":\"\",\"brands\":[],\"followers\":{\"min\":5000,\"max\":50000},\"engagementRate\":0.03},\"audience\":{\"location\":[],\"age\":[],\"interests\":[],\"brands\":[]},\"actions\":[],\"options\":{\"showSavedProfiles\":true}},\"sort\":{}}",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
  let data = (await response.json());

  let people = data.lookalikes;
  results.push(people);
}


console.log(JSON.stringify(results));