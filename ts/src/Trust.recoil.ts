/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.19.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { selectorFamily } from "recoil";
import { cosmWasmClient } from "./chain";
import { Uint128, InstantiateMsg, TrustScoreParams, ExecuteMsg, ReviewResult, QueryMsg, Addr, AccountsResponse, StakeAmountResponse, TrustInfoResponse, TrustInfo, TrustData } from "./Trust.types";
import { TrustQueryClient } from "./Trust.client";
type QueryClientParams = {
  contractAddress: string;
};
export const queryClient = selectorFamily<TrustQueryClient, QueryClientParams>({
  key: "trustQueryClient",
  get: ({
    contractAddress
  }) => ({
    get
  }) => {
    const client = get(cosmWasmClient);
    return new TrustQueryClient(client, contractAddress);
  }
});
export const trustInfoSelector = selectorFamily<TrustInfoResponse, QueryClientParams & {
  params: Parameters<TrustQueryClient["trustInfo"]>;
}>({
  key: "trustTrustInfo",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.trustInfo(...params);
  }
});
export const stakeAmountSelector = selectorFamily<StakeAmountResponse, QueryClientParams & {
  params: Parameters<TrustQueryClient["stakeAmount"]>;
}>({
  key: "trustStakeAmount",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.stakeAmount(...params);
  }
});
export const accountsSelector = selectorFamily<AccountsResponse, QueryClientParams & {
  params: Parameters<TrustQueryClient["accounts"]>;
}>({
  key: "trustAccounts",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.accounts(...params);
  }
});