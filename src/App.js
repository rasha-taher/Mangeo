import PageContent from './components/PageContent';
import SideMenuBar from './components/SideMenuBar'
import "./style/style.scss";
function App() {
  return (
    <div className="App">
      <div className='container'>
      <SideMenuBar />
      <PageContent/>
      </div>
    </div>
  );
}

export default App;
