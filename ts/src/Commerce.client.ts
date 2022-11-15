/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.19.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { InstantiateMsg, ExecuteMsg, Uint128, Network, OrderStatus, Binary, Marketing, Listing, Attributes, ListingOption, ListingOptionItem, Cw20Coin, Social, TrackingInfo, OrderItem, OrderOption, Cw20ReceiveMsg, QueryMsg, AdminListResponse, CanExecuteResponse, Addr, ConfigResponse, Config, ListingResponse, ListingsResponse, BalanceResponse, MarketingResponse, OrderResponse, Order, OrdersResponse } from "./Commerce.types";
export interface CommerceReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  adminList: () => Promise<AdminListResponse>;
  canExecute: ({
    sender
  }: {
    sender: string;
  }) => Promise<CanExecuteResponse>;
  withdrawableBalance: () => Promise<BalanceResponse>;
  lockedBalance: () => Promise<BalanceResponse>;
  marketing: () => Promise<MarketingResponse>;
  orders: () => Promise<OrdersResponse>;
  order: ({
    id
  }: {
    id: number;
  }) => Promise<OrderResponse>;
  listings: () => Promise<ListingsResponse>;
  listing: ({
    id
  }: {
    id: number;
  }) => Promise<ListingResponse>;
}
export class CommerceQueryClient implements CommerceReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.adminList = this.adminList.bind(this);
    this.canExecute = this.canExecute.bind(this);
    this.withdrawableBalance = this.withdrawableBalance.bind(this);
    this.lockedBalance = this.lockedBalance.bind(this);
    this.marketing = this.marketing.bind(this);
    this.orders = this.orders.bind(this);
    this.order = this.order.bind(this);
    this.listings = this.listings.bind(this);
    this.listing = this.listing.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  adminList = async (): Promise<AdminListResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      admin_list: {}
    });
  };
  canExecute = async ({
    sender
  }: {
    sender: string;
  }): Promise<CanExecuteResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      can_execute: {
        sender
      }
    });
  };
  withdrawableBalance = async (): Promise<BalanceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      withdrawable_balance: {}
    });
  };
  lockedBalance = async (): Promise<BalanceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      locked_balance: {}
    });
  };
  marketing = async (): Promise<MarketingResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      marketing: {}
    });
  };
  orders = async (): Promise<OrdersResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      orders: {}
    });
  };
  order = async ({
    id
  }: {
    id: number;
  }): Promise<OrderResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      order: {
        id
      }
    });
  };
  listings = async (): Promise<ListingsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      listings: {}
    });
  };
  listing = async ({
    id
  }: {
    id: number;
  }): Promise<ListingResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      listing: {
        id
      }
    });
  };
}
export interface CommerceInterface extends CommerceReadOnlyInterface {
  contractAddress: string;
  sender: string;
  updateAdmins: ({
    admins
  }: {
    admins: string[];
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateConfig: ({
    denom,
    trustContract,
    withdrawalAddress
  }: {
    denom: string;
    trustContract: string;
    withdrawalAddress: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateMarketing: ({
    marketing
  }: {
    marketing: Marketing;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  withdraw: ({
    amount
  }: {
    amount?: Uint128;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
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
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
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
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  deleteListing: ({
    id
  }: {
    id: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateOrder: ({
    id,
    status,
    tracking
  }: {
    id: number;
    status: OrderStatus;
    tracking?: TrackingInfo;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  completeOrder: ({
    id
  }: {
    id: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  refundOrder: ({
    id
  }: {
    id: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  createOrder: ({
    items
  }: {
    items: OrderItem[];
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  cancelOrder: ({
    id
  }: {
    id: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  receive: ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class CommerceClient extends CommerceQueryClient implements CommerceInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
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

  updateAdmins = async ({
    admins
  }: {
    admins: string[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_admins: {
        admins
      }
    }, fee, memo, funds);
  };
  updateConfig = async ({
    denom,
    trustContract,
    withdrawalAddress
  }: {
    denom: string;
    trustContract: string;
    withdrawalAddress: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        denom,
        trust_contract: trustContract,
        withdrawal_address: withdrawalAddress
      }
    }, fee, memo, funds);
  };
  updateMarketing = async ({
    marketing
  }: {
    marketing: Marketing;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_marketing: {
        marketing
      }
    }, fee, memo, funds);
  };
  withdraw = async ({
    amount
  }: {
    amount?: Uint128;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      withdraw: {
        amount
      }
    }, fee, memo, funds);
  };
  createListing = async ({
    active,
    attributes,
    options,
    price
  }: {
    active: boolean;
    attributes: Attributes;
    options: ListingOption[];
    price: Uint128;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      create_listing: {
        active,
        attributes,
        options,
        price
      }
    }, fee, memo, funds);
  };
  updateListing = async ({
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
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_listing: {
        active,
        attributes,
        id,
        options,
        price
      }
    }, fee, memo, funds);
  };
  deleteListing = async ({
    id
  }: {
    id: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      delete_listing: {
        id
      }
    }, fee, memo, funds);
  };
  updateOrder = async ({
    id,
    status,
    tracking
  }: {
    id: number;
    status: OrderStatus;
    tracking?: TrackingInfo;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_order: {
        id,
        status,
        tracking
      }
    }, fee, memo, funds);
  };
  completeOrder = async ({
    id
  }: {
    id: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      complete_order: {
        id
      }
    }, fee, memo, funds);
  };
  refundOrder = async ({
    id
  }: {
    id: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      refund_order: {
        id
      }
    }, fee, memo, funds);
  };
  createOrder = async ({
    items
  }: {
    items: OrderItem[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      create_order: {
        items
      }
    }, fee, memo, funds);
  };
  cancelOrder = async ({
    id
  }: {
    id: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      cancel_order: {
        id
      }
    }, fee, memo, funds);
  };
  receive = async ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive: {
        amount,
        msg,
        sender
      }
    }, fee, memo, funds);
  };
}