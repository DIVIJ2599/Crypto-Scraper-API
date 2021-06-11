const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');


async function getPrice(){
    try{
        //Scraping the data from coinmarketcap.com

        const siteUrl ='https://https://coinmarketcap.com/';
        
        const { data } = await axios({
            method:"GET",
            url: siteUrl,
        })

        //Load cheerio

        const $ = cheerio.load(data);
        const selector = '#__next > div > div.main-content > div.sc-57oli2-0.dEqHl.cmc-body-wrapper > div > div > div.tableWrapper___3utdq.cmc-table-homepage-wrapper___22rL4 > table > tbody > tr'
    
        //Makes an object containing following things 
        
        const keys = [
            'rank',
            'name',
            'price',
            'change',
            'marketCap',
            'volume'
        ]
        
        //Creates an empty array for coins

        let coinArray=[]

        //Selects the Coin from the url

        $(selector).each((parentIdx,parentElem)=>{
            let keyIdx=0;
            let coinObj={}
            
            if(parentIdx<=9){
                
                //Selects the info seperately

                $(parentElem).children().each((childIdx,childElm)=>{
                    const coin=($(childElm).text())
                })
                coinObj[keys[keyIdx]];
                keyIdx++;
                coinArray.push(coinObj);
            }})
            console.log(coinArray);
    }

    catch(err){
        console.log(err);
    }
}

getPrice();