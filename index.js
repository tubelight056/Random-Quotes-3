function RandomQuoteGenerator(){
    let data,index=0;
    let quoteQuery=document.querySelector('.quote');
    let authorQuery=document.querySelector('.author');
    fetch('https://type.fit/api/quotes').then(async (res)=>{
        data= await res.json();
    }).catch((err)=>{
        if(err){
            console.log(err);
        }
    }),
    this.setQuote=()=>{
        quoteQuery.innerHTML=`" ${data[index].text} "`;
        if(data[index].author){
        authorQuery.innerHTML=`--${data[index].author}`;
        }else{
            authorQuery.innerHTML=`--Anonymous`;
        }
    }
    this.newQuote=()=>{
        index=Math.floor(Math.random()*data.length);
        this.setQuote();
    }
}
const randomQuoteGenerator=new RandomQuoteGenerator();