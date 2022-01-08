import './App.css';
import Body from './Components/Body';
import Resume from './Components/Resume';

function App() {
  return (
    <div>
      <Body/>
      <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>
    </div>
  );
}

export default App;