import React from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Mainfeature from './components/Mainfeature/Mainfeature'



import './App.css';

const sections = [
  { title: 'About', url: '#' },
  { title: 'Contact', url: '#' },
  { title: 'Find Shelter', url: '#' },

];

const mainFeaturedPost = {
  title: 'Shelter Slot',
  description:
    "Find shelters near you",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title="Blog" sections={sections} />
        <Mainfeature post={mainFeaturedPost} />
        <Footer />

      </header>
    </div>
  );
}

export default App;
