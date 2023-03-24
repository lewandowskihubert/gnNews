import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { newsApi } from "../../services/newsapi/news-api";
import {
  getCountriesAsync,
  selectCountryList,
} from "../../slices/country-slice";
import "./side-menu.css"
import { NewsArticle } from "../../types/news-api";

export const SideMenu: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const dispatch = useAppDispatch();
  let countryList = useAppSelector(selectCountryList);

  const GetCountryList = async (): Promise<void> => {
    dispatch(getCountriesAsync());
  };

  useEffect(() => {
    GetCountryList();
  }, []);

  const handleCountry = async (country: string) => {
    setSelectedCountry(country);
    const newsArticles = await newsApi.getCountryNews(country);
    console.log("newsArticles:", newsArticles);
    if (newsArticles) {
      setArticles(newsArticles as NewsArticle[]);
    }
  };

  return (
    <div className="side-menu-container">
      <ul>
        {countryList.map((item) => (
          <li
            onClick={() => handleCountry(item.cca2.toLocaleLowerCase())}
            key={item.cca2}
          >
       
              {" "}
              
            <span className="side-menu-img"> <img alt={item.flags.alt} src={item.flags.png} /></span>
            <span className="side-menu-item">{item.name.common}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
