import { useEffect, useState } from "react";
import { Chain, TokenInfo } from "../constants/type";
import { useContractsContext } from "../providers/ContractsContextProvider";
import { useWeb3Context } from "../providers/Web3ContextProvider";
import { useEthBalance } from ".";
import { NETWORKS } from "../constants/network";

export const useNativeETHToken = (srcChain: Chain | undefined, tokenInfo: TokenInfo | undefined) => {
  const [isNativeToken, setIsNativeToken] = useState(false);
  const [tokenDisplayName, setTokenDisplayName] = useState(tokenInfo?.name ?? "");

  const {
    contracts: { bridge },
  } = useContractsContext();
  const { provider, address } = useWeb3Context();
  const [ETHBalance] = useEthBalance(provider, address);

  useEffect(() => {
    if (!srcChain || !tokenInfo || !bridge) {
      return;
    }
    const chainIds = [
      NETWORKS.mainnet.chainId,
      NETWORKS.arbitrum.chainId,
      NETWORKS.Optimism.chainId,
      NETWORKS.goerli.chainId,
      NETWORKS.BoBa.chainId,
    ];
    let nativeETHToken = false;
    if (chainIds.includes(srcChain.id) && tokenInfo.token.display_symbol === "ETH") {
      nativeETHToken = true;
    } else if (srcChain.id === 56 && tokenInfo.token.symbol === "BNB") {
      nativeETHToken = true;
    } else if (srcChain.id === 43114 && tokenInfo.token.symbol === "AVAX") {
      nativeETHToken = true;
    } else if (srcChain.id === 250 && tokenInfo.token.symbol === "FTM") {
      nativeETHToken = true;
    }

    setIsNativeToken(nativeETHToken);

    if (nativeETHToken && tokenInfo.token.display_symbol === "ETH") {
      setTokenDisplayName("Ethereum Token");
    } else {
      setTokenDisplayName(tokenInfo?.name ?? "");
    }
  }, [srcChain, tokenInfo, bridge]);

  return { isNativeToken, ETHBalance, tokenDisplayName };
};
