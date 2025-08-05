
let Quotes =[
    {quote: '“Be yourself; everyone else is already taken.”',
    auther :' ― Oscar Wilde'
    },
    {quote: '“A person does not stop loving when he is hurt , He just stops showing his feelings..!”',
    auther :' ― Ayesha Osama'
    },
    {quote: '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
    auther :' ― Albert Einstein'
    },
    {quote: '“If you canot explain it to a six year old, you donot understand it yourself.”',
    auther :' ― Albert Einstein'
    },
    {quote: '“Life is like riding a bicycle. To keep your balance, you must keep moving.”',
    auther :' ― Albert Einstein'
    },
    {quote: '“Anyone who has never made a mistake has never tried anything new.”',
    auther :'― Albert Einstein'
    },  
    {quote: '“Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.”',
    auther :'― Albert Einstein'
    },
    {quote: ' “You know you are in love when you canot fall asleep because reality is finally better than your dreams.”',
    auther :'― Dr. Seuss'
    },
    {quote: '“Be the change that you wish to see in the world.”',
    auther :'― Mahatma Gandhi'
    },
    ];

function getQuote(){

let NewIndex =Math.floor( Math.random ()*Quotes.length)

document.getElementById("quote").innerHTML =Quotes[NewIndex].quote;
document.getElementById("auther").innerHTML =Quotes[NewIndex].auther;
}
































