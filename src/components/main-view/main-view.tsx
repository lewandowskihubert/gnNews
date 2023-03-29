import "./main-view.css"
import WestIcon from '@mui/icons-material/West';

export const MainView: React.FC = () => {

    return <main className="main-view-container">
        <h1 className="h1-main">Welcome to gnNews!</h1>
        <h3 className="h3-main">If u want to check news</h3> 
        <h3 className="h3-main">Choose a country you want news from!</h3>
        <span><WestIcon fontSize="large" /></span>
         </main>

}