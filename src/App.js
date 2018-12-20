import React, {
  Component
} from 'react';
import './App.css';
import axios from 'axios';
import ProductList from './containers/ProductList';
import ProductView from './components/productView/ProductView';
import Pagation from './containers/Pagation';
import Navigation from './containers/Navigation/Navigation';

class App extends Component {
  state = {
    products: [],
    bgImg: null,
    selectedCard: null,
    pageNum: 1,
    currentLink: null,
    isNavOpen: true,
    searchQuery:null
  }
  navHandler = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  getLinkHandler = (link = 'wallpaper') => {
    if (!this.state.selectedCard) {
      this.setState({
        currentLink: link,
        pageNum: 1,
        products: []
      });
      this.getData(link);
     

    }
  }

  clickedHandler = (id) => {
    this.setState({
      selectedCard: id
    });
  }
  searchHandler = (e) =>{
    const query = e.target.value;
    this.setState({searchQuery:query});
    this.getData(query);
  }
  closecardHandler = () => {
    this.setState({
      selectedCard: null
    });
  }
  rand() {
    return Math.floor((Math.random() * 100) + 1);
  }
  nextPgae = () => {
    this.setState({
      products: []
    })
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {
        pageNum: state.pageNum + 1
      }
    });
    this.getData(this.state.currentLink);
  }

  backPage = () => {
    this.setState({
      products: []
    })
    if (this.state.pageNum > 1) {
      this.setState((state) => {
        return {
          pageNum: state.pageNum - 1
        }
      })
    }
    this.getData(this.setState.currentLink);
  }

  getData = (currentLink = 'wallpaper') => {

    const config = {
      headers: {
        'Authorization': '563492ad6f91700001000001f24573f3b2bb4ec98adb69b46c04f713'
      }
    };
    axios.get(`https://api.pexels.com/v1/search?query=${currentLink}&per_page=12&page=${this.state.pageNum}`, config)
      .then(res => {
        this.setState({
          products: res.data.photos
        })
      }).catch(console.log());


  }

  componentDidMount() {

    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    console.log(w);
    if (w < 728) {
      this.setState({
        isNavOpen: false
      })
    }

    const config = {
      headers: {
        'Authorization': '563492ad6f91700001000001f24573f3b2bb4ec98adb69b46c04f713'
      }
    };
    axios.get('https://api.pexels.com/v1/curated?per_page=1&page=' + this.rand(), config)
      .then(res => {
        this.setState({
          bgImg: res.data.photos[0].src.large
        })
      })

    this.getData()

  }

  render() {
      return (<div className = "App" /*style={{'backgroundImage':'url(' + this.state.bgImg +')','backgroundSize':'cover'}}*/ >
          <header className = "App-header" >
          <nav className = "navBar" > < h1 className = "title" > qS</h1><input onKeyUp={(e)=>this.searchHandler(e)} type="text" className="Search"/><div className="menuToggle" onClick={this.navHandler}><span className="menuDot"></span > < span className = "menuDot" > < /span><span className="menuDot"></span > < /div></nav > {
            this.state.isNavOpen && < Navigation getlink = {
              this.getLinkHandler}/>} 
              {!this.state.products.length ? < div className = "sk-cube-grid" >
                <div className = "sk-cube sk-cube1" > </div> 
                <div className = "sk-cube sk-cube2" > </div> 
                <div className = "sk-cube sk-cube3" > </div> 
                <div className = "sk-cube sk-cube4" > </div> 
                <div className = "sk-cube sk-cube5" > </div> 
                <div className = "sk-cube sk-cube6" > </div> 
                <div className = "sk-cube sk-cube7" > </div>
                 <div className = "sk-cube sk-cube8" > </div> 
                 <div className = "sk-cube sk-cube9" > </div>
                  </div> :
                <React.Fragment > {
                  this.state.selectedCard ? < ProductView className = "selectedCard"
                  selected = {
                    this.state.selectedCard
                  }
                  closed = {
                    this.closecardHandler
                  }
                  />:

                  <ProductList products = {
                    this.state.products
                  }
                  clicked = {
                    this.clickedHandler
                  }
                  />} </React.Fragment>} 
                  
                  </header> 
                  
                  <Pagation next = {
                    this.nextPgae
                  }
                  back = {
                    this.backPage
                  }
                  />
                  </div>
                );
            }
          }
          export default App;