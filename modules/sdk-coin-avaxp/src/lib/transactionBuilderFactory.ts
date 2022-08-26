import { BaseCoin as CoinConfig } from '@bitgo/statics';
import { BaseTransactionBuilderFactory, NotSupported } from '@bitgo/sdk-core';
import { TransactionBuilder } from './transactionBuilder';
import { ValidatorTxBuilder } from './validatorTxBuilder';
import { Tx as PVMTx } from 'avalanche/dist/apis/platformvm';
import { Tx as EVMTx } from 'avalanche/dist/apis/evm';
import { Buffer as BufferAvax } from 'avalanche';
import utils from './utils';
import { ExportTxBuilder } from './exportTxBuilder';
import { ImportTxBuilder } from './importTxBuilder';
import { DelegatorTxBuilder } from './delegatorTxBuilder';
import { ImportInCTxBuilder } from './importInCTxBuilder';
import { Tx } from './iface';

export class TransactionBuilderFactory extends BaseTransactionBuilderFactory {
  protected recoverSigner = false;
  constructor(_coinConfig: Readonly<CoinConfig>) {
    super(_coinConfig);
  }

  /** @inheritdoc */
  from(raw: string): TransactionBuilder {
    utils.validateRawTransaction(raw);
    let tx: Tx;
    tx = new PVMTx();
    tx.fromBuffer(BufferAvax.from(raw, 'hex'));
    let transactionBuilder: TransactionBuilder;
    switch (tx.getUnsignedTx().getTransaction().getTypeID()) {
      case ValidatorTxBuilder.txType:
        transactionBuilder = this.getValidatorBuilder();
        break;
      case DelegatorTxBuilder.txType:
        transactionBuilder = this.getDelegatorBuilder();
        break;
      case ExportTxBuilder.txType:
        transactionBuilder = this.getExportBuilder();
        break;
      case ImportTxBuilder.txType:
        transactionBuilder = this.getImportBuilder();
        break;
      default:
        tx = new EVMTx();
        tx.fromBuffer(BufferAvax.from(raw, 'hex'));
        if (tx.getUnsignedTx().getTransaction().getTypeID() === ImportInCTxBuilder.txType) {
          transactionBuilder = this.getImportInCBuilder();
        } else {
          throw new NotSupported('Transaction cannot be parsed or has an unsupported transaction type');
        }
    }
    transactionBuilder.initBuilder(tx);
    return transactionBuilder;
  }

  /** @inheritdoc */
  getTransferBuilder(): TransactionBuilder {
    throw new NotSupported('Transfer is not supported in P Chain');
  }

  /**
   * Initialize Validator builder
   *
   * @returns {ValidatorTxBuilder} the builder initialized
   */
  getValidatorBuilder(): ValidatorTxBuilder {
    return new ValidatorTxBuilder(this._coinConfig);
  }

  /**
   * Export Cross chain transfer
   *
   * @returns {ExportTxBuilder} the builder initialized
   */
  getExportBuilder(): ExportTxBuilder {
    return new ExportTxBuilder(this._coinConfig);
  }

  /**
   * Export Cross chain transfer
   *
   * @returns {ExportTxBuilder} the builder initialized
   */
  getImportBuilder(): ImportTxBuilder {
    return new ImportTxBuilder(this._coinConfig);
  }

  /**
   * Export Cross chain transfer
   *
   * @returns {ExportTxBuilder} the builder initialized
   */
  getImportInCBuilder(): ImportInCTxBuilder {
    return new ImportInCTxBuilder(this._coinConfig);
  }
  /**
   * Initialize staking delegation builder
   *
   * @returns {DelegatorTxBuilder} the builder initialized
   */
  getDelegatorBuilder(): DelegatorTxBuilder {
    return new DelegatorTxBuilder(this._coinConfig);
  }

  getWalletInitializationBuilder(): TransactionBuilder {
    throw new NotSupported('Wallet initialization is not needed');
  }
}
