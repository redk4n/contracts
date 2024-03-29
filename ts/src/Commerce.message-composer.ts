/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.19.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { InstantiateMsg, ExecuteMsg, Uint128, Network, OrderStatus, Binary, Marketing, Listing, Attributes, ListingOption, ListingOptionItem, Cw20Coin, Social, TrackingInfo, OrderItem, OrderOption, Cw20ReceiveMsg, QueryMsg, AdminListResponse, CanExecuteResponse, Addr, ConfigResponse, Config, ListingResponse, ListingsResponse, BalanceResponse, MarketingResponse, OrderResponse, Order, OrdersResponse } from "./Commerce.types";
export interface CommerceMessage {
  contractAddress: string;
  sender: string;
  updateAdmins: ({
    admins
  }: {
    admins: string[];
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateConfig: ({
    denom,
    trustContract,
    withdrawalAddress
  }: {
    denom: string;
    trustContract: string;
    withdrawalAddress: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateMarketing: ({
    marketing
  }: {
    marketing: Marketing;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  withdraw: ({
    amount
  }: {
    amount?: Uint128;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  createListing: ({
    active,
    attributes,
    options,
    price
  }: {
    active: boolean;
    attributes: Attributes;
    options: ListingOption[];
    price: Uint128;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateListing: ({
    active,
    attributes,
    id,
    options,
    price
  }: {
    active: boolean;
    attributes: Attributes;
    id: number;
    options: ListingOption[];
    price: Uint128;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  deleteListing: ({
    id
  }: {
    id: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateOrder: ({
    id,
    status,
    tracking
  }: {
    id: number;
    status: OrderStatus;
    tracking?: TrackingInfo;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  completeOrder: ({
    id
  }: {
    id: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  refundOrder: ({
    id
  }: {
    id: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  createOrder: ({
    items
  }: {
    items: OrderItem[];
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  cancelOrder: ({
    id
  }: {
    id: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  receive: ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class CommerceMessageComposer implements CommerceMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateAdmins = this.updateAdmins.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.updateMarketing = this.updateMarketing.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.createListing = this.createListing.bind(this);
    this.updateListing = this.updateListing.bind(this);
    this.deleteListing = this.deleteListing.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
    this.completeOrder = this.completeOrder.bind(this);
    this.refundOrder = this.refundOrder.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
    this.receive = this.receive.bind(this);
  }

  updateAdmins = ({
    admins
  }: {
    admins: string[];
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_admins: {
            admins
          }
        })),
        funds
      })
    };
  };
  updateConfig = ({
    denom,
    trustContract,
    withdrawalAddress
  }: {
    denom: string;
    trustContract: string;
    withdrawalAddress: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_config: {
            denom,
            trust_contract: trustContract,
            withdrawal_address: withdrawalAddress
          }
        })),
        funds
      })
    };
  };
  updateMarketing = ({
    marketing
  }: {
    marketing: Marketing;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_marketing: {
            marketing
          }
        })),
        funds
      })
    };
  };
  withdraw = ({
    amount
  }: {
    amount?: Uint128;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          withdraw: {
            amount
          }
        })),
        funds
      })
    };
  };
  createListing = ({
    active,
    attributes,
    options,
    price
  }: {
    active: boolean;
    attributes: Attributes;
    options: ListingOption[];
    price: Uint128;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          create_listing: {
            active,
            attributes,
            options,
            price
          }
        })),
        funds
      })
    };
  };
  updateListing = ({
    active,
    attributes,
    id,
    options,
    price
  }: {
    active: boolean;
    attributes: Attributes;
    id: number;
    options: ListingOption[];
    price: Uint128;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_listing: {
            active,
            attributes,
            id,
            options,
            price
          }
        })),
        funds
      })
    };
  };
  deleteListing = ({
    id
  }: {
    id: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          delete_listing: {
            id
          }
        })),
        funds
      })
    };
  };
  updateOrder = ({
    id,
    status,
    tracking
  }: {
    id: number;
    status: OrderStatus;
    tracking?: TrackingInfo;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_order: {
            id,
            status,
            tracking
          }
        })),
        funds
      })
    };
  };
  completeOrder = ({
    id
  }: {
    id: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          complete_order: {
            id
          }
        })),
        funds
      })
    };
  };
  refundOrder = ({
    id
  }: {
    id: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          refund_order: {
            id
          }
        })),
        funds
      })
    };
  };
  createOrder = ({
    items
  }: {
    items: OrderItem[];
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          create_order: {
            items
          }
        })),
        funds
      })
    };
  };
  cancelOrder = ({
    id
  }: {
    id: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          cancel_order: {
            id
          }
        })),
        funds
      })
    };
  };
  receive = ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          receive: {
            amount,
            msg,
            sender
          }
        })),
        funds
      })
    };
  };
}