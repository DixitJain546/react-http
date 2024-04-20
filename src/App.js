import logo from './logo.svg';
import './App.css';
import PostsListGet from './components/PostsListGet';
import PostForm from './components/PostForm';
import FetchSinglePost from './components/FetchSinglePost';
import FetchDataReducer from './components/FetchDataReducer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* <PostsListGet /> */}
          {/* <PostForm /> */}
          {/* <FetchSinglePost /> */}
          <FetchDataReducer />
        </p>
      </header>
    </div>
  );
}

export default App;
