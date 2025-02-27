/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
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
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface SonneStakedSonneInterface extends utils.Interface {
  functions: {
    'addReward(address,uint256)': FunctionFragment;
    'addToken(address)': FunctionFragment;
    'allowance(address,address)': FunctionFragment;
    'approve(address,uint256)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'burn(uint256)': FunctionFragment;
    'claim(address)': FunctionFragment;
    'claimAll()': FunctionFragment;
    'decimals()': FunctionFragment;
    'decreaseAllowance(address,uint256)': FunctionFragment;
    'getClaimable(address,address)': FunctionFragment;
    'increaseAllowance(address,uint256)': FunctionFragment;
    'mint(uint256)': FunctionFragment;
    'name()': FunctionFragment;
    'owner()': FunctionFragment;
    'recipients(address,address)': FunctionFragment;
    'removeToken(address)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setWithdrawalPendingTime(uint256)': FunctionFragment;
    'shareIndex(address)': FunctionFragment;
    'shares(address)': FunctionFragment;
    'sonne()': FunctionFragment;
    'symbol()': FunctionFragment;
    'tokenIndexes(address)': FunctionFragment;
    'tokens(uint256)': FunctionFragment;
    'totalShares()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transfer(address,uint256)': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'updateCredit(address,address)': FunctionFragment;
    'withdraw()': FunctionFragment;
    'withdrawal(address)': FunctionFragment;
    'withdrawalPendingTime()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'addReward'
      | 'addToken'
      | 'allowance'
      | 'approve'
      | 'balanceOf'
      | 'burn'
      | 'claim'
      | 'claimAll'
      | 'decimals'
      | 'decreaseAllowance'
      | 'getClaimable'
      | 'increaseAllowance'
      | 'mint'
      | 'name'
      | 'owner'
      | 'recipients'
      | 'removeToken'
      | 'renounceOwnership'
      | 'setWithdrawalPendingTime'
      | 'shareIndex'
      | 'shares'
      | 'sonne'
      | 'symbol'
      | 'tokenIndexes'
      | 'tokens'
      | 'totalShares'
      | 'totalSupply'
      | 'transfer'
      | 'transferFrom'
      | 'transferOwnership'
      | 'updateCredit'
      | 'withdraw'
      | 'withdrawal'
      | 'withdrawalPendingTime',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'addReward',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'addToken', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'allowance', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'approve',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'burn', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'claim', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'claimAll', values?: undefined): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'decreaseAllowance',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getClaimable',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'increaseAllowance',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'mint', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'recipients', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'removeToken', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setWithdrawalPendingTime', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'shareIndex', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'shares', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'sonne', values?: undefined): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'tokenIndexes', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'tokens', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'totalShares', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'updateCredit',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'withdraw', values?: undefined): string;
  encodeFunctionData(functionFragment: 'withdrawal', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'withdrawalPendingTime', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'addReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claim', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decreaseAllowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getClaimable', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'increaseAllowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'recipients', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'removeToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setWithdrawalPendingTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'shareIndex', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'shares', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sonne', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokenIndexes', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokens', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalShares', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateCredit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawal', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawalPendingTime', data: BytesLike): Result;

  events: {
    'AddReward(address,uint256,uint256)': EventFragment;
    'Approval(address,address,uint256)': EventFragment;
    'Claim(address,address,uint256)': EventFragment;
    'EditRecipient(address,uint256,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
    'UpdateCredit(address,address,uint256,uint256)': EventFragment;
    'Withdraw(address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AddReward'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Claim'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'EditRecipient'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UpdateCredit'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdraw'): EventFragment;
}

export interface AddRewardEventObject {
  token: string;
  amount: BigNumber;
  newShareIndex: BigNumber;
}
export type AddRewardEvent = TypedEvent<[string, BigNumber, BigNumber], AddRewardEventObject>;

export type AddRewardEventFilter = TypedEventFilter<AddRewardEvent>;

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface ClaimEventObject {
  token: string;
  account: string;
  amount: BigNumber;
}
export type ClaimEvent = TypedEvent<[string, string, BigNumber], ClaimEventObject>;

export type ClaimEventFilter = TypedEventFilter<ClaimEvent>;

export interface EditRecipientEventObject {
  account: string;
  shares: BigNumber;
  totalShares: BigNumber;
}
export type EditRecipientEvent = TypedEvent<[string, BigNumber, BigNumber], EditRecipientEventObject>;

export type EditRecipientEventFilter = TypedEventFilter<EditRecipientEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface UpdateCreditEventObject {
  token: string;
  account: string;
  lastShareIndex: BigNumber;
  credit: BigNumber;
}
export type UpdateCreditEvent = TypedEvent<[string, string, BigNumber, BigNumber], UpdateCreditEventObject>;

export type UpdateCreditEventFilter = TypedEventFilter<UpdateCreditEvent>;

export interface WithdrawEventObject {
  user: string;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<[string, BigNumber], WithdrawEventObject>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface SonneStakedSonne extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SonneStakedSonneInterface;

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
    addReward(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    addToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    burn(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    claim(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    claimAll(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getClaimable(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    mint(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    recipients(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { lastShareIndex: BigNumber; credit: BigNumber }>;

    removeToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    setWithdrawalPendingTime(
      withdrawalPendingTime_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    shareIndex(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    shares(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    sonne(overrides?: CallOverrides): Promise<[string]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tokenIndexes(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    tokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    totalShares(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    updateCredit(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    withdrawal(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; releaseTime: BigNumber }>;

    withdrawalPendingTime(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  addReward(
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  addToken(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  allowance(
    owner: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  approve(
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  claim(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  claimAll(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: PromiseOrValue<string>,
    subtractedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getClaimable(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  increaseAllowance(
    spender: PromiseOrValue<string>,
    addedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  mint(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  recipients(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber] & { lastShareIndex: BigNumber; credit: BigNumber }>;

  removeToken(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  setWithdrawalPendingTime(
    withdrawalPendingTime_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  shareIndex(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  shares(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  sonne(overrides?: CallOverrides): Promise<string>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tokenIndexes(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  tokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  totalShares(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  updateCredit(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  withdrawal(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; releaseTime: BigNumber }>;

  withdrawalPendingTime(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    addReward(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    addToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    burn(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    claim(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    claimAll(overrides?: CallOverrides): Promise<BigNumber[]>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    getClaimable(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    mint(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    recipients(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { lastShareIndex: BigNumber; credit: BigNumber }>;

    removeToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setWithdrawalPendingTime(
      withdrawalPendingTime_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    shareIndex(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    shares(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    sonne(overrides?: CallOverrides): Promise<string>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenIndexes(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    tokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    updateCredit(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    withdraw(overrides?: CallOverrides): Promise<void>;

    withdrawal(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; releaseTime: BigNumber }>;

    withdrawalPendingTime(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    'AddReward(address,uint256,uint256)'(
      token?: PromiseOrValue<string> | null,
      amount?: null,
      newShareIndex?: null,
    ): AddRewardEventFilter;
    AddReward(token?: PromiseOrValue<string> | null, amount?: null, newShareIndex?: null): AddRewardEventFilter;

    'Approval(address,address,uint256)'(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null,
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null,
    ): ApprovalEventFilter;

    'Claim(address,address,uint256)'(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null,
      amount?: null,
    ): ClaimEventFilter;
    Claim(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null,
      amount?: null,
    ): ClaimEventFilter;

    'EditRecipient(address,uint256,uint256)'(
      account?: PromiseOrValue<string> | null,
      shares?: null,
      totalShares?: null,
    ): EditRecipientEventFilter;
    EditRecipient(account?: PromiseOrValue<string> | null, shares?: null, totalShares?: null): EditRecipientEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;

    'Transfer(address,address,uint256)'(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
    ): TransferEventFilter;

    'UpdateCredit(address,address,uint256,uint256)'(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null,
      lastShareIndex?: null,
      credit?: null,
    ): UpdateCreditEventFilter;
    UpdateCredit(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null,
      lastShareIndex?: null,
      credit?: null,
    ): UpdateCreditEventFilter;

    'Withdraw(address,uint256)'(user?: PromiseOrValue<string> | null, amount?: null): WithdrawEventFilter;
    Withdraw(user?: PromiseOrValue<string> | null, amount?: null): WithdrawEventFilter;
  };

  estimateGas: {
    addReward(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    addToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    claim(token: PromiseOrValue<string>, overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    claimAll(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getClaimable(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    mint(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    recipients(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    removeToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    setWithdrawalPendingTime(
      withdrawalPendingTime_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    shareIndex(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    shares(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    sonne(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tokenIndexes(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    tokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    updateCredit(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    withdrawal(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    withdrawalPendingTime(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addReward(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    addToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burn(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    claim(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    claimAll(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getClaimable(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    mint(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recipients(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    removeToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    setWithdrawalPendingTime(
      withdrawalPendingTime_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    shareIndex(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    shares(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sonne(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenIndexes(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    updateCredit(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    withdrawal(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawalPendingTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
