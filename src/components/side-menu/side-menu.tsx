import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getCountriesAsync,
  selectCountryList,
} from "../../slices/country-slice";
import { useNavigate } from "react-router-dom";
import "./side-menu.css";
import { getNewsAsync } from "../../slices/news-slice";

export const SideMenu: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const dispatch = useAppDispatch();
  const countryList = useAppSelector(selectCountryList);
  const navigate = useNavigate();

  

  const handleOnClick = (cca2: string) => {
    if (selectedCountry !== cca2) {
      setSelectedCountry(cca2);
      navigate(`/country/${cca2.toLocaleLowerCase()}`);
   
    }
  };

  useEffect(() => {
    dispatch(getCountriesAsync());
  }, [dispatch]);

  return (
    <div className="side-menu-container">
      <ul>
        {countryList.map((item) => (
          <li
            key={item.cca2}
            onClick={() => handleOnClick(item.cca2)}
            className={selectedCountry === item.cca2 ? "active" : ""}
          >
            <span className="side-menu-img">
              <img alt={item.flags.alt} src={item.flags.png} />
            </span>
            <span className="side-menu-item">{item.name.common}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};