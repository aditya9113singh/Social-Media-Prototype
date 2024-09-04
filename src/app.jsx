
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";




export default function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  
//const [a,seta]=useState(0);
  return (
    <PostListProvider>
<div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
<div className="content">
        
        <Header></Header>
        
        
        {selectedTab === "Home" ? (
              <PostList ></PostList>
            ) :(
              <CreatePost></CreatePost>
            )}
        
            <Footer></Footer>
        </div>
      
        
      </div>
      
    </PostListProvider>
  );
}
