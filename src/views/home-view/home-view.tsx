import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import Footer from "../../components/footer/footer";
import { Header } from "../../components/header/header"
import { MainView } from "../../components/main-view/main-view";
import { SideMenu } from "../../components/side-menu/side-menu"
import { getCountriesAsync } from "../../slices/country-slice";
import "./home-view.css"


export const HomeView = () => {
    const dispatch = useAppDispatch();
    const GetCountryList = async ():Promise<void> => {
        dispatch(getCountriesAsync());
      }
      
      useEffect(() => {
        GetCountryList();
      },[])
    return <div className="home-view-container">
    <Header />
    <div className="content-container">
      <SideMenu />
      <MainView />
    </div>
    <div><Footer /></div>
  </div>
}