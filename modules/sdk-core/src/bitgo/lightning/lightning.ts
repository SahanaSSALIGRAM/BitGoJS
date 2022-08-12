import {
  ILightning,
  CreateInvoiceParams,
  PayInvoiceParams,
  LightningWithdrawalParams,
  LightningDepositParams,
  CreateInvoiceResponse,
  CreateDepositAddressResponse,
  PayInvoiceResponse,
  GetBalanceResponse,
  WithdrawResponse,
  DepositResponse,
} from './iLightning';
import { BitGoBase } from '../bitgoBase';
import { decodeOrElse } from '../utils/decode';

export class Lightning implements ILightning {
  private readonly bitgo: BitGoBase;
  private readonly url: string;

  constructor(bitgo: BitGoBase, walletId: string) {
    this.bitgo = bitgo;
    this.url = this.bitgo.url(`/wallet/${walletId}/lightning`, 2);
  }

  public async createInvoice(params: CreateInvoiceParams): Promise<CreateInvoiceResponse> {
    const body = await this.bitgo
      .post(this.url + '/invoice')
      .send(params)
      .result();

    return decodeOrElse(CreateInvoiceResponse.name, CreateInvoiceResponse, body, (errors) => {
      throw new Error(`error(s) parsing response body: ${errors}`);
    });
  }

  public async createDepositAddress(): Promise<CreateDepositAddressResponse> {
    const body = await this.bitgo.post(this.url + '/address').result();
    return decodeOrElse(CreateDepositAddressResponse.name, CreateDepositAddressResponse, body, (errors) => {
      throw new Error(`error(s) parsing response body: ${errors}`);
    });
  }

  public async payInvoice(params: PayInvoiceParams): Promise<PayInvoiceResponse> {
    const body = await this.bitgo
      .post(this.url + '/payment')
      .send(params)
      .result();

    return decodeOrElse(PayInvoiceResponse.name, PayInvoiceResponse, body, (errors) => {
      throw new Error(`error(s) parsing response body: ${errors}`);
    });
  }

  public async getBalance(): Promise<GetBalanceResponse> {
    const body = await this.bitgo.get(this.url + '/balance').result();
    return decodeOrElse(GetBalanceResponse.name, GetBalanceResponse, body, (errors) => {
      throw new Error(`error(s) parsing response body: ${errors}`);
    });
  }

  public async withdraw(params?: LightningWithdrawalParams): Promise<WithdrawResponse> {
    throw new Error('method not implemented');
  }

  public async deposit(params?: LightningDepositParams): Promise<DepositResponse> {
    throw new Error('method not implemented');
  }
}
