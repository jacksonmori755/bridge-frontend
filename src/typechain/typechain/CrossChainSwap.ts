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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace CrossChainSwap {
  export type SwapInfoStruct = {
    wantToken: string;
    user: string;
    sendBack: boolean;
    cbrMaxSlippage: BigNumberish;
  };

  export type SwapInfoStructOutput = [string, string, boolean, number] & {
    wantToken: string;
    user: string;
    sendBack: boolean;
    cbrMaxSlippage: number;
  };
}

export interface CrossChainSwapInterface extends utils.Interface {
  contractName: "CrossChainSwap";
  functions: {
    "dex()": FunctionFragment;
    "executeMessage(address,uint64,bytes,address)": FunctionFragment;
    "executeMessageWithTransfer(address,address,uint256,uint64,bytes,address)": FunctionFragment;
    "executeMessageWithTransferFallback(address,address,uint256,uint64,bytes,address)": FunctionFragment;
    "executeMessageWithTransferRefund(address,uint256,bytes,address)": FunctionFragment;
    "messageBus()": FunctionFragment;
    "owner()": FunctionFragment;
    "setMessageBus(address)": FunctionFragment;
    "startCrossChainSwap(address,address,uint256,uint64,(address,address,bool,uint32))": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "dex", values?: undefined): string;
  encodeFunctionData(functionFragment: "executeMessage", values: [string, BigNumberish, BytesLike, string]): string;
  encodeFunctionData(
    functionFragment: "executeMessageWithTransfer",
    values: [string, string, BigNumberish, BigNumberish, BytesLike, string],
  ): string;
  encodeFunctionData(
    functionFragment: "executeMessageWithTransferFallback",
    values: [string, string, BigNumberish, BigNumberish, BytesLike, string],
  ): string;
  encodeFunctionData(
    functionFragment: "executeMessageWithTransferRefund",
    values: [string, BigNumberish, BytesLike, string],
  ): string;
  encodeFunctionData(functionFragment: "messageBus", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "setMessageBus", values: [string]): string;
  encodeFunctionData(
    functionFragment: "startCrossChainSwap",
    values: [string, string, BigNumberish, BigNumberish, CrossChainSwap.SwapInfoStruct],
  ): string;
  encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;

  decodeFunctionResult(functionFragment: "dex", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "executeMessage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "executeMessageWithTransfer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "executeMessageWithTransferFallback", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "executeMessageWithTransferRefund", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "messageBus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setMessageBus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startCrossChainSwap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;

  events: {
    "MessageBusUpdated(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MessageBusUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type MessageBusUpdatedEvent = TypedEvent<[string], { messageBus: string }>;

export type MessageBusUpdatedEventFilter = TypedEventFilter<MessageBusUpdatedEvent>;

export type OwnershipTransferredEvent = TypedEvent<[string, string], { previousOwner: string; newOwner: string }>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface CrossChainSwap extends BaseContract {
  contractName: "CrossChainSwap";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CrossChainSwapInterface;

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
    dex(overrides?: CallOverrides): Promise<[string]>;

    executeMessage(
      _sender: string,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    executeMessageWithTransfer(
      arg0: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      arg5: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    executeMessageWithTransferFallback(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    executeMessageWithTransferRefund(
      _token: string,
      _amount: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    messageBus(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setMessageBus(
      _messageBus: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    startCrossChainSwap(
      _receiver: string,
      _token: string,
      _amount: BigNumberish,
      _dstChainId: BigNumberish,
      swapInfo: CrossChainSwap.SwapInfoStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  dex(overrides?: CallOverrides): Promise<string>;

  executeMessage(
    _sender: string,
    _srcChainId: BigNumberish,
    _message: BytesLike,
    _executor: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  executeMessageWithTransfer(
    arg0: string,
    _token: string,
    _amount: BigNumberish,
    _srcChainId: BigNumberish,
    _message: BytesLike,
    arg5: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  executeMessageWithTransferFallback(
    _sender: string,
    _token: string,
    _amount: BigNumberish,
    _srcChainId: BigNumberish,
    _message: BytesLike,
    _executor: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  executeMessageWithTransferRefund(
    _token: string,
    _amount: BigNumberish,
    _message: BytesLike,
    _executor: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  messageBus(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  setMessageBus(
    _messageBus: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  startCrossChainSwap(
    _receiver: string,
    _token: string,
    _amount: BigNumberish,
    _dstChainId: BigNumberish,
    swapInfo: CrossChainSwap.SwapInfoStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    dex(overrides?: CallOverrides): Promise<string>;

    executeMessage(
      _sender: string,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: CallOverrides,
    ): Promise<number>;

    executeMessageWithTransfer(
      arg0: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      arg5: string,
      overrides?: CallOverrides,
    ): Promise<number>;

    executeMessageWithTransferFallback(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: CallOverrides,
    ): Promise<number>;

    executeMessageWithTransferRefund(
      _token: string,
      _amount: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: CallOverrides,
    ): Promise<number>;

    messageBus(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    setMessageBus(_messageBus: string, overrides?: CallOverrides): Promise<void>;

    startCrossChainSwap(
      _receiver: string,
      _token: string,
      _amount: BigNumberish,
      _dstChainId: BigNumberish,
      swapInfo: CrossChainSwap.SwapInfoStruct,
      overrides?: CallOverrides,
    ): Promise<void>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "MessageBusUpdated(address)"(messageBus?: null): MessageBusUpdatedEventFilter;
    MessageBusUpdated(messageBus?: null): MessageBusUpdatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    dex(overrides?: CallOverrides): Promise<BigNumber>;

    executeMessage(
      _sender: string,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    executeMessageWithTransfer(
      arg0: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      arg5: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    executeMessageWithTransferFallback(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    executeMessageWithTransferRefund(
      _token: string,
      _amount: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    messageBus(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setMessageBus(_messageBus: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    startCrossChainSwap(
      _receiver: string,
      _token: string,
      _amount: BigNumberish,
      _dstChainId: BigNumberish,
      swapInfo: CrossChainSwap.SwapInfoStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    dex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeMessage(
      _sender: string,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    executeMessageWithTransfer(
      arg0: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      arg5: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    executeMessageWithTransferFallback(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    executeMessageWithTransferRefund(
      _token: string,
      _amount: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    messageBus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMessageBus(
      _messageBus: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    startCrossChainSwap(
      _receiver: string,
      _token: string,
      _amount: BigNumberish,
      _dstChainId: BigNumberish,
      swapInfo: CrossChainSwap.SwapInfoStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
