import React, { Component } from "react";
import NewsItem from "./NewsItem";
 // eslint-disable-next-line
 
export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Minneapolis Star Tribune",
      },
      author: "DAMIAN J. TROISE",
      title:
        "Stock market today: Wall Street drifts higher as a strong year for markets winds down",
      description:
        "Wall Street drifted to a slightly higher close as trading remained light on this holiday-shortened week. The S&P 500 edged up 0.1% Wednesday. The Dow rose 0.3% and the Nasdaq rose 0.2%. Markets are holding on to modest gains for the week so far, and the S&P 5…",
      url: "https://www.startribune.com/stock-market-today-wall-street-drifts-higher-as-a-strong-year-for-markets-winds-down/600330818/",
      urlToImage:
        "https://chorus.stimg.co/25188494/merlin_72916133.jpg?h=630&w=1200&fit=crop&bg=999&crop=faces",
      publishedAt: "2023-12-27T21:10:00Z",
      content:
        "NEW YORK Wall Street drifted to a slightly higher close as trading remained light on this holiday-shortened week. The S&amp;P 500 edged up 0.1% Wednesday. The Dow rose 0.3% and the Nasdaq rose 0.2%. … [+3424 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "nytimes.com",
      title: "Tesla Strike in Sweden Highlights a Culture Clash",
      description:
        "Tesla cars charging outside Stockholm. Tesla’s Model Y is the most popular car in Sweden, where registration numbers for new cars so far do not show the strike is denting sales. Workers seeking a collective agreement from the automaker say they are pushing fo…",
      url: "https://biztoc.com/x/04ba681429a8d0ca",
      urlToImage: "https://c.biztoc.com/p/04ba681429a8d0ca/og.webp",
      publishedAt: "2023-12-27T21:08:08Z",
      content:
        "Tesla cars charging outside Stockholm. Teslas Model Y is the most popular car in Sweden, where registration numbers for new cars so far do not show the strike is denting sales.Workers seeking a colle… [+283 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "Cindy Gordon, Contributor, \n Cindy Gordon, Contributor\n https://www.forbes.com/sites/cindygordon/",
      title:
        "How The C-Suite Can Advance Mental Health And Increase Employee Happiness?",
      description:
        "This article discusses how the C-suite can advance mental health and wellness in order to improve employee happiness. A short reflection assessment tool for a C level guided discovery conversation is also provided. #HappinessMatters",
      url: "https://www.forbes.com/sites/cindygordon/2023/12/27/how-the-c-suite-can-advance-mental-health-and-increase-employee-happiness/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/658c804f3da284a84da78778/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      publishedAt: "2023-12-27T21:07:33Z",
      content:
        "Happiness and MentalHealth Really Matter!\r\ngetty\r\nEver since I read the book, Permission to Feel: Unlocking the Power of Emotions to Help Our Kids, Ourselves, and Our Society Thrive by Dr. Mark Brack… [+5844 chars]",
    },
    {
      source: {
        id: null,
        name: "The Boston Globe",
      },
      author: null,
      title: "Shipper says the Red Sea is still too dangerous",
      description: "Stories you may have missed from the world of business.",
      url: "https://www.bostonglobe.com/2023/12/27/business/shipper-says-red-sea-is-still-too-dangerous/",
      urlToImage:
        "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/bligR6bo12eaHIXzzCGTj8gZ8xM=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/LZPQVRF5BWVLF2HPZPP45652WQ.jpg",
      publishedAt: "2023-12-27T21:07:03Z",
      content:
        "AUTOMOTIVE\r\nToyota is poised to keep its title as the worlds best-selling carmaker, beating Volkswagen for the fourth consecutive year after steady demand across North America and Europe helped sales… [+6057 chars]",
    },
    ,
    {
      source: {
        id: "svenska-dagbladet",
        name: "Svenska Dagbladet",
      },
      author: "TT-AP",
      title: "Stilla dag på Wall Street",
      description:
        "New York-börsens tre ledande index flyttade sig inte nämnvärt på onsdagen, även om en markerad nedgång noterades två timmar före stängning. Breda S&P500-index steg 0,1 procent, Dow Jones industriindex gick upp 0,3 procent och tekniktunga Nasdaqs kompositindex…",
      url: "https://www.svd.se/a/onqr5W/stilla-dag-pa-wall-street",
      urlToImage:
        "https://svd.vgc.no/v2/images/91796ab9-6734-4cd9-86db-c4e7dd934b87?h=630&q=80&upscale=true&w=1200&s=ab4bbd3ba94572c3ea8ace4c869103f2a7903c06",
      publishedAt: "2023-12-27T21:04:55Z",
      content:
        "New York-börsens tre ledande index flyttade sig inte nämnvärt på onsdagen, även om en markerad nedgång noterades två timmar före stängning. Breda S&amp;P500-index steg 0,1 procent, Dow Jones industri… [+344 chars]",
    },
    {
      source: {
        id: null,
        name: "Antyweb.pl",
      },
      author: "Kacper Cembrowski",
      title: "Bunt maszyn. Robot zaatakował człowieka",
      description:
        "W fabryce Tesli stało się coś, czego wiele osób się obawiało. Robot zaatakował człowieka.\n \n The post Bunt maszyn. Robot zaatakował człowieka appeared first on AntyWeb.",
      url: "https://antyweb.pl/robot-zaatakowal-czlowieka-fabryka-tesli",
      urlToImage:
        "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2023/12/coifuedhpy/Depositphotos_AI.jpg",
      publishedAt: "2023-12-27T21:00:17Z",
      content:
        "Haso roboty do niedawna kojarzyy si z przyszoci, filmami science fiction i cyberpunkow rzeczywistoci, która jest dopiero przed nami. Jak si jednak okazuje, ju teraz niektórzy pracuj wród robotów, a T… [+3159 chars]",
    },
    {
      source: {
        id: null,
        name: "Drive.com.au",
      },
      author: "Alex Misoyannis",
      title: "2024 Tesla Model Y facelift due mid next year – report",
      description:
        'A major update for the world\'s best-selling new car is around the corner, with "more obvious" exterior and interior upgrades.',
      url: "https://www.drive.com.au/news/tesla-model-y-facelift-due-mid-next-year-report/",
      urlToImage:
        "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:good,w_1200/cms/uploads/m1inaruvuqm3enm1aahw",
      publishedAt: "2023-12-27T21:00:00Z",
      content:
        "It is expected influences will be drawn from the recently introduced Model 3 facelift, which brought restyled front and rear fascias, new seats with ventilation, a brighter touchscreen, retuned suspe… [+82 chars]",
    },
    {
      source: {
        id: null,
        name: "Electrek",
      },
      author: "Fred Lambert",
      title: "Tesla accuses Reuters of manufacturing a story",
      description:
        "Tesla is accusing Reuters of “manufacturing” a story about the automaker lying to customers to make repairs off warranty.\n more…\nThe post Tesla accuses Reuters of manufacturing a story appeared first on Electrek.",
      url: "https://electrek.co/2023/12/27/tesla-accuses-reuters-manufacturing-story/",
      urlToImage:
        "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/05/Tesla-Model-Y-Hero-2023.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-12-27T20:56:50Z",
      content:
        "Tesla is accusing Reuters of “manufacturing” a story about the automaker lying to customers to make repairs off warranty.\r\nLast week, Reuters posted a story titled ‘Tesla blamed drivers for failures … [+3961 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row mt-4 ">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3 my-3" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                ></NewsItem>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
