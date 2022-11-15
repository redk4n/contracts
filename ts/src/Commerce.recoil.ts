/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.19.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { selectorFamily } from "recoil";
import { cosmWasmClient } from "./chain";
import { InstantiateMsg, ExecuteMsg, Uint128, Network, OrderStatus, Binary, Marketing, Listing, Attributes, ListingOption, ListingOptionItem, Cw20Coin, Social, TrackingInfo, OrderItem, OrderOption, Cw20ReceiveMsg, QueryMsg, AdminListResponse, CanExecuteResponse, Addr, ConfigResponse, Config, ListingResponse, ListingsResponse, BalanceResponse, MarketingResponse, OrderResponse, Order, OrdersResponse } from "./Commerce.types";
import { CommerceQueryClient } from "./Commerce.client";
type QueryClientParams = {
  contractAddress: string;
};
export const queryClient = selectorFamily<CommerceQueryClient, QueryClientParams>({
  key: "commerceQueryClient",
  get: ({
    contractAddress
  }) => ({
    get
  }) => {
    const client = get(cosmWasmClient);
    return new CommerceQueryClient(client, contractAddress);
  }
});
export const configSelector = selectorFamily<ConfigResponse, QueryClientParams & {
  params: Parameters<CommerceQueryClient["config"]>;
}>({
  key: "commerceConfig",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.config(...params);
  }
});
export const adminListSelector = selectorFamily<AdminListResponse, QueryClientParams & {
  params: Parameters<CommerceQueryClient["adminList"]>;
}>({
  key: "commerceAdminList",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.adminList(...params);
  }
});
export const canExecuteSelector = selectorFamily<CanExecuteResponse, QueryClientParams & {
  params: Parameters<CommerceQueryClient["canExecute"]>;
}>({
  key: "commerceCanExecute",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.canExecute(...params);
  }
});
export const withdrawableBalanceSelector = selectorFamily<BalanceResponse, QueryClientParams & {
  params: Parameters<CommerceQueryClient["withdrawableBalance"]>;
}>({
  key: "commerceWithdrawableBalance",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.withdrawableBalance(...params);
  }
});
export const lockedBalanceSelector = selectorFamily<BalanceResponse, QueryClientParams & {
  params: Parameters<CommerceQueryClient["lockedBalance"]>;
}>({
  key: "commerceLockedBalance",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.lockedBalance(...params);
  }
});
export const marketingSelector = selectorFamily<MarketingResponse, QueryClientParams & {
  params: Parameters<CommerceQueryClient["marketing"]>;
}>({
  key: "commerceMarketing",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.marketing(...params);
  }
});
export const ordersSelector = selectorFamily<OrdersResponse, QueryClientParams & {
  params: Parameters<CommerceQueryClient["orders"]>;
}>({
  key: "commerceOrders",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.orders(...params);
  }
});
export const orderSelector = selectorFamily<OrderResponse, QueryClientParams & {
  params: Parameters<CommerceQueryClient["order"]>;
}>({
  key: "commerceOrder",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.order(...params);
  }
});
export const listingsSelector = selectorFamily<ListingsResponse, QueryClientParams & {
  params: Parameters<CommerceQueryClient["listings"]>;
}>({
  key: "commerceListings",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.listings(...params);
  }
});
export const listingSelector = selectorFamily<ListingResponse, QueryClientParams & {
  params: Parameters<CommerceQueryClient["listing"]>;
}>({
  key: "commerceListing",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.listing(...params);
  }
});