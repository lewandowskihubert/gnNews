import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { Header } from "../../components/header/header"
import { SideMenu } from "../../components/side-menu/side-menu"
import { getCountriesAsync } from "../../slices/country-slice";


export const HomeView = () => {
    const dispatch = useAppDispatch();
    const GetCountryList = async ():Promise<void> => {
        dispatch(getCountriesAsync());
      }
      
      useEffect(() => {
        GetCountryList();
      },[])
    return <div>
        <Header />
        <SideMenu />
    </div>
}