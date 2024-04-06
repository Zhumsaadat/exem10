import Layout from './components/Layout/Layout';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home';
import NewPost from "./containers/NewPost";
import SinglePost from "./containers/SinglePost";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new-post" element={<NewPost/>}/>
        <Route path="/posts/:id" element={<SinglePost />}/>
      </Routes>
    </Layout>
  )
}

export default App;
