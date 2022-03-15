import { Route, Routes } from 'react-router-dom';
import AllMeetupsPage from './Pages/AllMeetups';
import FavoritesPage from './Pages/Favorites';
import NewMeetupsPage from './Pages/NewMeetups';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupsPage />}/> 
        <Route path='/new-meetup' element={<NewMeetupsPage />}/> 
        <Route path='/favorites' element={<FavoritesPage />}/> 
      </Routes>
    </Layout>
  );
}

export default App;
