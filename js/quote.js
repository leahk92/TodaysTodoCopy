const quotes = [
    {
        quote: "Life is full of possibilities. You just need to know where to look.",
        author: "- <Soul>",
    },
    {
        quote: "Everything we know is stardust. So don't forget you are stardust.",
        author: "- <Before Sunrise>",
    },
    {
        quote: "We should replace vague ideas with clear images.",
        author: "- <La Chinoise>",
    },
    {
        quote: "Belfast will still be here when you get back.",
        author: "- <Belfast>",
    },
    {
        quote: "Babies, excuse me Jinny, Martha, babies get born every day in extremely large numbers to the point of endangering the planet and all our futures.\nYou told me you loved *me*. Me! Traitor.",
        author: "- <The Party>",
    },
    {
        quote: "Mountains are old, but they're still green.",
        author: "- <Roma>",
    },
    {
        quote: "Reserving judgements is matter of infinite hope.",
        author: "- 《 The Great Gatsby 》",
    },
    {
        quote: "It's easy to know what you're against, but quite another to know what you're for.",
        author: "- <보리밭을 흔드는 바람>",
    },
    {
        quote:  "My name is Barry Allen and I'm the fastest man alive.",
        author: "- The CW <The Flash>",
    },
    {
        quote: "We have our whole lives to get it right.",
        author: "- <Mood Indigo>",
    },
    {
        quote: "What do you see?",
        author: "- John Logan 《 RED 》",
    },
    {
        quote: "The only way to learn is to live.",
        author: "- 《 The Midnight Library 》",
    },
    {
        quote: "Sometimes just to say your own truth out loud is enough to find others like you.",
        author: "- 《 The Midnight Library 》",
    },
    {
        quote: "미래를 신뢰하지 마라, 죽은 과거는 묻어버려라, 그리고 살아있는 현재에 행동하라.",
        author: "- 롱펠로",
    },
    {
        quote: "진보를 믿지 않음으로써 그들이 비난하는 것은 미래가 아니라 그들 자신이다.",
        author: "- 빅토르 위고 《 레 미제라블 》",
    },
    {
        quote: "먼 곳에 있는 희미한 것을 바라보지 말고 당장 눈앞에 분명하게 보이는 것을 실천하라.",
        author: "- 토마스 칼라일",
    },
    {
        quote: "어느 날 한 권의 책을 읽었다. 그리고 나의 인생은 송두리째 바뀌었다.",
        author: "- 오르한 파묵 《 새로운 인생 》",
    },
    {
        quote: "What's past is prologue.",
        author: "- William Shakespeare 《 The Tempest 》",
    },
    {
        quote: "In three words I can sum up everything I've learned about life: It goes on.",
        author: "- Robert Frost",
    },
    {
        quote: "I never found the companion that was so companionable as solitude.",
        author: "- Henry David Thoreau",
    },
  ];

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;