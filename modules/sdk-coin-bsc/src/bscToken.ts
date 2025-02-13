/**
 * @prettier
 */

import { EthLikeTokenConfig } from '@bitgo/statics';
import { BitGoBase, CoinConstructor, MPCAlgorithm, NamedCoinConstructor } from '@bitgo/sdk-core';
import { CoinNames, EthLikeToken } from '@bitgo/abstract-eth';

export { EthLikeTokenConfig };

export class BscToken extends EthLikeToken {
  public readonly tokenConfig: EthLikeTokenConfig;
  static coinNames: CoinNames = {
    Mainnet: 'bsc',
    Testnet: 'tbsc',
  };
  constructor(bitgo: BitGoBase, tokenConfig: EthLikeTokenConfig) {
    super(bitgo, tokenConfig, BscToken.coinNames);
  }
  static createTokenConstructor(config: EthLikeTokenConfig): CoinConstructor {
    return super.createTokenConstructor(config, BscToken.coinNames);
  }

  static createTokenConstructors(): NamedCoinConstructor[] {
    return super.createTokenConstructors(BscToken.coinNames);
  }

  getFullName(): string {
    return 'Bsc Token';
  }

  supportsTss(): boolean {
    return true;
  }

  getMPCAlgorithm(): MPCAlgorithm {
    return 'ecdsa';
  }
}
