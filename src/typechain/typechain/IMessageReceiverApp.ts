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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IMessageReceiverAppInterface extends utils.Interface {
  contractName: "IMessageReceiverApp";
  functions: {
    "executeMessage(address,uint64,bytes,address)": FunctionFragment;
    "executeMessageWithTransfer(address,address,uint256,uint64,bytes,address)": FunctionFragment;
    "executeMessageWithTransferFallback(address,address,uint256,uint64,bytes,address)": FunctionFragment;
    "executeMessageWithTransferRefund(address,uint256,bytes,address)": FunctionFragment;
  };

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

  decodeFunctionResult(functionFragment: "executeMessage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "executeMessageWithTransfer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "executeMessageWithTransferFallback", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "executeMessageWithTransferRefund", data: BytesLike): Result;

  events: {};
}

export interface IMessageReceiverApp extends BaseContract {
  contractName: "IMessageReceiverApp";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMessageReceiverAppInterface;

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
    executeMessage(
      _sender: string,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    executeMessageWithTransfer(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
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
  };

  executeMessage(
    _sender: string,
    _srcChainId: BigNumberish,
    _message: BytesLike,
    _executor: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  executeMessageWithTransfer(
    _sender: string,
    _token: string,
    _amount: BigNumberish,
    _srcChainId: BigNumberish,
    _message: BytesLike,
    _executor: string,
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

  callStatic: {
    executeMessage(
      _sender: string,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: CallOverrides,
    ): Promise<number>;

    executeMessageWithTransfer(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
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
  };

  filters: {};

  estimateGas: {
    executeMessage(
      _sender: string,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    executeMessageWithTransfer(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
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
  };

  populateTransaction: {
    executeMessage(
      _sender: string,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    executeMessageWithTransfer(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
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
  };
}
