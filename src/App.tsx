import Router from "./Router";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";


function App() {
  return (
    <div className="App" style={{ outline: 0 }}>
      <CookiesProvider>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </CookiesProvider>
    </div>
  );
}

export default App;
