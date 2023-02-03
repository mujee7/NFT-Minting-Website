import Web3 from "web3";
import abi from "./contracts/NFTContract.json" 


export const ContractAddress="0xA5f18Fb04D4CD7F1dd75e680bC4a26418903FCD2";
//old address 0xC26eDeab298725FD6295e92624435cf3886Ba966
//polygon mumbai chainID
const chainId=80001; 
let web3=new Web3("https://polygon-mumbai.g.alchemy.com/v2/MXTlA2FpRDF3lP5pMRFjWA8C-o-Khq8b");


export const ethereum = window.ethereum;
// check if metamask extension is installed on the browser
export const isMetaMaskInstalled = () =>{
    if(ethereum){
        return true;
    }

    return false;
}


// connect to metakmask wallet
export const connectWallet = async () =>{
    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    
    if(await changeChainID()){
    return accounts;
    }
    return accounts
    
}

// connect to metakmask wallet
export const connectAccount = async () =>{
    const accounts = await ethereum.request({method: 'eth_accounts'});
    
    return accounts;
}


// disconnect metamask wallet
export const disconnectWallet = () =>{
    localStorage.removeItem('isWalletConnected');
    isWalletConnected();
    
}

// check metamask on disconnect
export const onMetamaskDisconnect = () =>{
    ethereum.on('disconnect', () =>{
        console.log('Disconnected');
    });
}


// check metamask on connected
export const onMetamaskconnect = async () =>{
    const chainId = await getChainId();
    ethereum.on('connect', () =>{
        console.log(chainId);
    });
}

// on chain change
export const onChainChange = () =>{
    ethereum.on('chainChanged', (_chainId) =>{
        return parseInt(_chainId);
    });
}

export const getChainId = async () =>{
    const chainId = await ethereum.request({ method: 'eth_chainId' });

    return parseInt(chainId);
}


export const isWalletConnected = () => {
    if(localStorage.getItem('isWalletConnected') === 'true'){
        return true
    }

    return false;
}

export const connectWalletLocaly = () => {
    localStorage.setItem('isWalletConnected', true);
}

const changeChainID =async () => {
    let web3;
    web3=new Web3(ethereum);
    const currentChainId = await web3.eth.getChainId();
    if (currentChainId!=chainId){
        try{
            await ethereum.request({
                method:'wallet_addEthereumChain',
                params: [{chainId: Web3.utils.toHex(chainId),chainName:"Mumbai Testnet",rpcUrls:["https://rpc-mumbai.maticvigil.com/"],nativeCurrency:{name:"Mumbai Testnet",symbol:"MATIC",decimals:18},blockExplorerUrls:["https://polygonscan.com/"]}]
            });
            await ethereum.request({
                method:'wallet_switchEthereumChain',
                params: [{chainId: Web3.utils.toHex(chainId)}]
            });
            
            console.log(`switched to chainid : ${chainId} succesfully`);
            return true;

        }catch(err){
            console.log(`cannot connect to this`);
            console.log(err)

        }

    }

}
export const CreateContract=()=>{
    
    const contract=new web3.eth.Contract(abi.abi,ContractAddress);
    return contract
    

}
