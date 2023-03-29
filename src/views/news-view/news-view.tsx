import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { useAppSelector } from "../../app/hooks"
import { AppDispatch } from "../../app/store"
import Footer from "../../components/footer/footer"
import { Header } from "../../components/header/header"
import { NewsList } from "../../components/list-news/list-news"
import { NewsComponent } from "../../components/news/news"
import { SideMenu } from "../../components/side-menu/side-menu"
import { getNewsAsync, selectOrder } from "../../slices/news-slice"
import "./news-view.css"

export const NewsView:React.FC = () => {
  const {cca2} = useParams()
  const dispatch: AppDispatch = useDispatch();
  const isGrid = useAppSelector(selectOrder)

  useEffect(() => {
    (async() => {
      if(cca2) {
        dispatch(getNewsAsync(cca2.toLocaleLowerCase()));
      }

    })();
    
  })

 
 
    return <div className="news-view-container">
    <Header />
    <div className="content-news-container">
      <SideMenu />
      {isGrid ? <NewsComponent /> : <NewsList /> } 
    </div>
    <div><Footer /></div>
  </div>
}