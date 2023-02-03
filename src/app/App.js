import { Routes, Route, Link } from "react-router-dom";
import HomeV1 from "../pages/homeV1";

import Collections from "../pages/collections";

import MintPageOne from "../pages/mint-1";

import NFT from "../pages/NFT";
import Account from "../pages/account";

function App() {
  // toast.success("jurray")
  
  return (
    <>
<Routes>
       <Route path="/" element={<HomeV1 />} exact />
      <Route path="/collections" element={<Collections />} />
      <Route path="/mint-1" element={<MintPageOne />} />
      <Route path="/NFT/:product" element={<NFT />} />
      <Route path="/Account" element={<Account />} />
    </Routes>
    </>
    
  );
}

export default App;
