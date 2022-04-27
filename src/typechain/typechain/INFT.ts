/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface INFTInterface extends utils.Interface {
  contractName: "INFT";
  functions: {
    "burn(uint256)": FunctionFragment;
    "mint(address,uint256,string)": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish, string]): string;
  encodeFunctionData(functionFragment: "ownerOf", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "tokenURI", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;

  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;

  events: {};
}

export interface INFT extends BaseContract {
  contractName: "INFT";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: INFTInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    burn(id: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    mint(
      to: string,
      id: BigNumberish,
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string] & { owner: string }>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  burn(id: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  mint(
    to: string,
    id: BigNumberish,
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    burn(id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    mint(to: string, id: BigNumberish, uri: string, overrides?: CallOverrides): Promise<void>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    burn(id: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    mint(
      to: string,
      id: BigNumberish,
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    burn(id: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    mint(
      to: string,
      id: BigNumberish,
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
