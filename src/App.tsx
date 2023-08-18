import Router from "./Router";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App" style={{ outline: 0 }}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </div>
  );
}

export default App;
