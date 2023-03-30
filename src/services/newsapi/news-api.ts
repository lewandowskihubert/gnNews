import { NewsArticle } from "../../types/news-api"


const newsApiDef = () => {

    const getCountryList = async () => {
        try {
            const url =  `https://restcountries.com/v3.1/alpha?codes=USA,CAN,DEU,FRA,GBR,POL,NLD,LVA,CHE,AUT,TUR,IND,GRC,SWE
            &fields=name,flags,cca2`
            const response = await fetch(url)
            const data = await response.json()
            const countryList = data
           
            
          
            return countryList
        } catch (error) {
            console.log(error)
        }
    }

    const getCountryNews = async (country:string):Promise <NewsArticle[] | undefined> => {
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=${country}&sortBy=popularity&apiKey=4f9e8e4d176848eb84cae95fc1a76316`
            const response = await fetch(url)
            const countrySelect = await response.json();
            return countrySelect.articles as NewsArticle[]
        } catch (error) {
            console.log(error)
            
        }
    }

    return {getCountryList, getCountryNews}
}

export const newsApi = newsApiDef();