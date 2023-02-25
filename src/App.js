import { BrowserRouter,Routes, Route } from "react-router-dom";
import { ChannelDetail } from "./component/ChannelDetail";
import { Feed } from "./component/Feed";
import { NavBar } from "./component/NavBar";
import { SearchFeed } from "./component/SearchFeed";
import { VideoDetail } from "./component/VideoDetail";
function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" exact element={<Feed />}/>  
          <Route path="/video/:id" exact element={<VideoDetail />}/>  
          <Route path="/channel/:id" exact element={<ChannelDetail />}/>  
          <Route path="/search/:searchTerm" exact element={<SearchFeed />}/>  
        </Routes>  
      </BrowserRouter>
    </div>
  );
}
export default App;
