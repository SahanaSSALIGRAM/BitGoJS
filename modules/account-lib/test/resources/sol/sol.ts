import { PublicKey } from '@solana/web3.js';

export const prvKeys = {
  prvKey1: {
    base58: '5jtsd9SmUH5mFZL7ywNNmqmxxdXw4FQ5GJQprXmrdX4LCuUwMBivCfUX2ar8hGdnLHDGrVKkshW1Ke21vZhPiLyr',
    uint8Array: new Uint8Array([
      237, 14, 247, 66, 157, 192, 51, 38, 195, 13, 42, 77, 45, 233, 52, 72, 234, 225, 160, 174, 127, 74, 31, 90, 101,
      33, 127, 139, 237, 147, 51, 128, 169, 24, 27, 82, 247, 237, 144, 234, 235, 13, 173, 75, 113, 190, 180, 83, 131,
      97, 103, 97, 49, 113, 126, 147, 9, 88, 16, 95, 183, 163, 137, 213,
    ]),
  },
  invalidPrvKeys: [
    'randomstring',
    '5jtsd9SmUH5mFZL7ywNaaaaaxdXw4FQ5GJQprXmrdX4LCuUwMBivCfUX2ar8hGdnLHDGrVKkshW1Ke21vZhPiLyr',
    '5jtsd9SmUH5mFZL7ywNNmqmxxdXw4FQ5GJQprXmrdX4LCuUwMBivCfUX2ar8hGdnLHDGr===hW1Ke21vZhPiLyr',
    new Uint8Array([
      237, 14, 247, 66, 157, 192, 51, 38, 195, 13, 42, 77, 45, 233, 52, 72, 234, 225, 160, 174, 127, 74, 31, 90, 101,
      33, 127, 139, 237, 147, 51, 128, 169, 24, 27, 82, 247, 237, 144, 234, 235, 13, 173, 75, 113, 190, 180, 83, 131,
    ]),
  ],
};

export const pubKeys = {
  validPubKeys: [
    'CP5Dpaa42RtJmMuKqCQsLwma5Yh3knuvKsYDFX85F41S',
    '7Uxci7Cyi3M6utvAFP6uhzkH3yMzhfqshA4Uu4hqBfy8',
    'q4mnAoGvzWJQwzZZtuNxDJ88B55FoLurWvKHbENMmFK',
    'xpub661MyMwAqRbcF1DWtiuV6FPJX6eq9gYspJorAnwSjXFVcJ3E3X7ckgU2iZ2MvEjh58qdEU3VYDgLcZz6SVkB1yGDFguNt1ferkC6p4zxuRY',
  ],
  invalidPubKeys: [
    'randomstring',
    'CP5Dpaa42RtJmMuKqCQsLwma5Yh3knuvKsYDFX85F41S12AF1',
    'CP5Dpaa42R11111KqCQsLwma5Yh3knuvKsYDFX85F41SAVV',
    'CP5Dpaa42RtJmMuKqCQsLwma==h3knuvKsYDFX85F41S',
    'xpub661MyMwAqRbcFjmMuHyjyZsQYGD6m8JZseFXpjAc1djoKvnMiJvqCeGu4cvxDNXstgPTsP1yeXewvUf6rUubvuG8mi9yPEb7hHVVCqRnhu7XYZ',
    'xprv9s21ZrQH143K2J9hbmRNqDXo5aQ3RXvycz8VLchc4dus6r7QekaRWsPT6WPirE67Ps5jae2Ti3webhmFDarJG76h3jFqeg8u3WzeisjS2qw',
  ],
};

export const addresses = {
  validAddresses: [
    'DesU7XscZjng8yj5VX6AZsk3hWSW4sQ3rTG2LuyQ2P4H',
    'Azz9EmNuhtjoYrhWvidWx1Hfd14SNBsYyzXhA9Tnoca8',
    '2n2xqWM9Z18LqxfJzkNrMMFWiDUFYA2k6WSgSnf6EnJs',
    '5ne7phA48Jrvpn39AtupB8ZkCCAy8gLTfpGihZPuDqen',
  ],
  invalidAddresses: [
    'randomstring',
    'aesU7XscZjng8yj5VX6AZsk3hWSW4sQ3rTG2LuyQ2P4H',
    'DesU7XscZjng8yj5VX6AZsk3hWSW4sQ3rTG2LuyQ2P4H1',
    'DesU7XscZjng8yj5VX6AZsk3hWSW4sQ3rTG2LuyQ2P==',
  ],
};

export const blockHashes = {
  validBlockHashes: [
    '5ne7phA48Jrvpn39AtupB8ZkCCAy8gLTfpGihZPuDqen',
    '7afHRHcVbCKd1tbJHrXkDf7PtpNE8dDoP5qPoxPk6v4H',
    'A6GGkqcorKi2oSac7tAEduNUgQKR9tQP11gpmGoGoEU1',
  ],
  invalidBlockHashes: [
    'randomstring',
    'DesU7XscZjng8yj5VX6AZsk3hWSW4sQ3rTG2LuyQ2P4H1',
    '5ne7phA48Jrvpn39AtupB8ZkCCAy8gLTfpGihZP==qen',
  ],
};

export const signatures = {
  validSignatures: [
    'NfcCZq7rrxx8SN23w31Wtd53Bhw5qm6E4GaXfw1sxBEnV3J9MRdHRzwgDEEjTC5WCurvW84bkyDcpCGgGjkhi9A',
    '2SMMaKhXE6PkzyKi8pBDPHKs5FkFuPSC3kfYE4Zt2e62wTop12qMu41E7R4pL9iVVfuCyNufSw9Zwjj383qfQFEY',
    'FrTD1L5nVyFqPmQDFtKX4goWoFtz9iF9bwF27DxfEmBDJ7eiBEr6H4ULPAJ4kNQTCpdQB2RJK2LuT7yUGKnDhty',
  ],
  invalidSignatures: [
    'randomstring',
    '5AePNqh3WbHJhXKAdzhvsV1Yvxa5NH5hGChiZheLPShnNgHEizysio4812r7GDURHp1GNm4k==Lacnbpp4fhSBAj',
    'NfcCZq7rrxx8SN23w31Wtd53Bhw5qm6E4GaXfw1sxBEnV3J9MRdHRzwgDEEjaaaaW84bkyDcpCGgGjkhi9A',
  ],
};

export const accountWithSeed = {
  seed: Buffer.from([
    210, 49, 239, 175, 249, 91, 42, 66, 77, 70, 3, 144, 23, 0, 145, 152, 86, 35, 166, 11, 129, 49, 201, 162, 255, 195,
    94, 229, 98, 78, 76, 38,
  ]),
  publicKey: 'FKjSjCqByQRwSzZoMXA7bKnDbJe41YgJTHFFzBeC42bH',
  privateKey: {
    uint8Array: new Uint8Array([
      210, 49, 239, 175, 249, 91, 42, 66, 77, 70, 3, 144, 23, 0, 145, 152, 86, 35, 166, 11, 129, 49, 201, 162, 255, 195,
      94, 229, 98, 78, 76, 38, 212, 208, 16, 9, 69, 152, 60, 244, 226, 41, 142, 209, 252, 78, 138, 101, 66, 156, 232,
      39, 235, 224, 69, 45, 62, 111, 249, 253, 44, 80, 162, 48,
    ]),
    base58: '5Ck7pzfS8Eaepamy9dxDF7cHkaN7QgXHMRSU2kfeMYngWC6DKcxM3d2v91SyUUxCi3PvBh81TjM62P44z5E7CZTM',
  },
  nonceAccount: {
    publicKey: 'J8TEPFqNJjFTp2NGHuWgijyuF45Lrzo2feZ61kS7yY2q',
    secretKey: new Uint8Array([
      200, 0, 163, 57, 97, 40, 219, 9, 145, 156, 6, 148, 209, 48, 213, 173, 253, 111, 244, 201, 68, 146, 183, 163, 156,
      208, 176, 230, 198, 254, 52, 46, 254, 127, 103, 18, 16, 93, 199, 244, 231, 235, 67, 138, 105, 178, 26, 9, 237,
      215, 61, 45, 27, 138, 41, 29, 36, 118, 47, 97, 165, 51, 161, 70,
    ]),
  },
};

export const INVALID_KEYPAIR_PRV =
  '5jtsd9SmUH5mFZL7ywNaaaaaxdXw4FQ5GJQprXmrdX4LCuUwMBivCfUX2ar8hGdnLHDGrVKkshW1Ke21vZhPiLyr';

export const RAW_TX_UNSIGNED =
  'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAIF1NAQCUWYPPTiKY7R/E6KZUKc6Cfr4EUtPm/5/SxQojD+f2cSEF3H9OfrQ4ppshoJ7dc9LRuKKR0kdi9hpTOhRrv/y/psFLmK9Aw49dx//4htN7xNM3R+NZXfdw7AWWbuBqfVFxksVo7gioRfc9KXiM8DXDFFshqzRNgGLqlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOghhIq8A3U5dDmSv3/3VTX6V+0obalzpFvB2Pemp8/uAgQDAQMABAQAAAAEAgACDAIAAACghgEAAAAAAA==';
export const RAW_TX_SIGNED =
  'AcqLHFVKSox61OIDmmdBB7eL/UhHknawENCEFEv4mv1nVQN9MxzCk5J1k9U1Lm9GNb8mA/RwV8stSGH5HvmZTQIBAAIF1NAQCUWYPPTiKY7R/E6KZUKc6Cfr4EUtPm/5/SxQojD+f2cSEF3H9OfrQ4ppshoJ7dc9LRuKKR0kdi9hpTOhRrv/y/psFLmK9Aw49dx//4htN7xNM3R+NZXfdw7AWWbuBqfVFxksVo7gioRfc9KXiM8DXDFFshqzRNgGLqlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOghhIq8A3U5dDmSv3/3VTX6V+0obalzpFvB2Pemp8/uAgQDAQMABAQAAAAEAgACDAIAAACghgEAAAAAAA==';
export const INVALID_RAW_TX =
  'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAd12d12AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAIF1NAQCUWYPPTiKY7R/d12d1/5/SxQojD+f2cSEF3H9OfrQ4ppshoJ7asdasa2dc9LRuKKR0kdi9hpTOhRrv/y/psFLmK9Aw49dx//4htN7xNM3R+NZXfdw7AWWbuBqfVFxksVo7gioRfc9KXiM8DXasdsaDFFshqzRNgGLqlAAAAAAAAAA11231AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOghhIq8A3U5dDmSv3/3VTX6V+0obalzpFvB2Pemp8/uAgQDAQMABAQAAAAEA123gACDAIAAACghgEAAAAAAA==';

export const authAccount = {
  pub: '5hr5fisPi6DXNuuRpm5XUbzpiEnmdyxXuBDTwzwZj5Pe',
  prv: 'Vd4PFt2YsjZFbyW6ej5bCK46QRptKyBe6Aq2FPxpynBzqXL5RUt3L3Y4FXyKq9igfshKFskv5yGqdrgvRknKbLk',
};

export const nonceAccount = {
  pub: '8Y7RM6JfcX4ASSNBkrkrmSbRu431YVi9Y3oLFnzC2dCh',
  prv: '5qex3gYTcpkpNQYwc8H72tgnrA2bd461TR3ysf2McVQdPbXxnXzEwTEWffeeDmPVpYjxMCqE8YLqHzJv2Z2v6zAh',
};

// #region staking

export const stakeAccount = {
  pub: '3c5emUWjViFqT72LxQYec8gkU8ZtmfKKXHvGgJNUBdYx',
  prv: '4ite94au3Xm6mYSvVYnLR6i6xRhQZxKKwnGwHCff4LABvNrtetGHQB4WgqH3Crmwhg8onYNmvUUPgCx3xei8KXTn',
};

export const validator = {
  pub: 'CyjoLt3kjqB57K7ewCBHmnHq3UgEj3ak6A7m6EsBsuhA',
};

export const STAKING_ACTIVATE_SIGNED_TX =
  'AlnSMI93wD112liTy64Ilbio3197B/2s7RaLH79tcRc9mGPz1hxtR8hur3C76nzcnL9TI6khM0rGA27bLsiuFQKT0WjITzOQC8ZQWx1SBAm7VPy136pNqAMm5R6zFj9lkOqrCntc3JwIqnwiDTqJlEPsXFd2YBFYy9qJCDhbWbEOAgAHCUXlebz5JTz2i0ff8fs6OlwsIbrFsjwJrhKm4FVr8ItBYnsvugEnYfm5Gbz5TLtMncgFHZ8JMpkxTTlJIzJovekGp9UXGSxcUSGMyUw9SvF/WNruCJuh/UTj29mKAAAAALH5eXiaHEfRPEjYei8nFxDrf5MmCVEXMWKQvWwp2vXZBqfVFxjHdMkoVmOYaR1etoteuKObS21cc1VbIQAAAAAGp9UXGTWE0P7tm7NDHRMga+VEKBtXuFZsxTdf9AAAAAah2BelAgULaAeR5s5tuI4eW3FQ9h/GeQpOtNEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGodgXkTdUKpg0N73+KnqyVX9TXIp4citopJ3AAAAAAOMy2vkvq+zotj/3pEAF5f39mvoVh1a2HFqV+QSzuNCBAwcCAAE0AAAAAOCTBAAAAAAAyAAAAAAAAAAGodgXkTdUKpg0N73+KnqyVX9TXIp4citopJ3AAAAAAAgCAQJ0AAAAAEXlebz5JTz2i0ff8fs6OlwsIbrFsjwJrhKm4FVr8ItBReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0EAAAAAAAAAAAAAAAAAAAAAReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0EIBgEDBAUGAAQCAAAA';

export const STAKING_ACTIVATE_SIGNED_TX_WITH_MEMO =
  'AsdGAJ2N6+OmZQqdMYzEJoTA2GiWEAgoK3GzEEpHoWvBjhzq7zlJAw4FsPcLE33II5af6N4QcmS3x4ra1KaOkQ0nBCtiXbpDHYZE42zbcNGsqgv6+skjgwuSX1Q6fbJbJswc3leydkokI2X6AQyV7AZKiCfGB3Vc1uVepOlmbbkNAgAICkXlebz5JTz2i0ff8fs6OlwsIbrFsjwJrhKm4FVr8ItBYnsvugEnYfm5Gbz5TLtMncgFHZ8JMpkxTTlJIzJovekGp9UXGSxcUSGMyUw9SvF/WNruCJuh/UTj29mKAAAAALH5eXiaHEfRPEjYei8nFxDrf5MmCVEXMWKQvWwp2vXZBqfVFxjHdMkoVmOYaR1etoteuKObS21cc1VbIQAAAAAGp9UXGTWE0P7tm7NDHRMga+VEKBtXuFZsxTdf9AAAAAah2BelAgULaAeR5s5tuI4eW3FQ9h/GeQpOtNEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGodgXkTdUKpg0N73+KnqyVX9TXIp4citopJ3AAAAAAAVKU1qZKSEGTSTocWDaOHx8NbXdvJK7geQfqEBBBUSN4zLa+S+r7Oi2P/ekQAXl/f2a+hWHVrYcWpX5BLO40IEEBwIAATQAAAAA4JMEAAAAAADIAAAAAAAAAAah2BeRN1QqmDQ3vf4qerJVf1NcinhyK2ikncAAAAAACAIBAnQAAAAAReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0FF5Xm8+SU89otH3/H7OjpcLCG6xbI8Ca4SpuBVa/CLQQAAAAAAAAAAAAAAAAAAAABF5Xm8+SU89otH3/H7OjpcLCG6xbI8Ca4SpuBVa/CLQQgGAQMEBQYABAIAAAAJAAl0ZXN0IG1lbW8=';

export const STAKING_ACTIVATE_UNSIGNED_TX =
  'AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAHCUXlebz5JTz2i0ff8fs6OlwsIbrFsjwJrhKm4FVr8ItBYnsvugEnYfm5Gbz5TLtMncgFHZ8JMpkxTTlJIzJovekGp9UXGSxcUSGMyUw9SvF/WNruCJuh/UTj29mKAAAAALH5eXiaHEfRPEjYei8nFxDrf5MmCVEXMWKQvWwp2vXZBqfVFxjHdMkoVmOYaR1etoteuKObS21cc1VbIQAAAAAGp9UXGTWE0P7tm7NDHRMga+VEKBtXuFZsxTdf9AAAAAah2BelAgULaAeR5s5tuI4eW3FQ9h/GeQpOtNEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGodgXkTdUKpg0N73+KnqyVX9TXIp4citopJ3AAAAAAOMy2vkvq+zotj/3pEAF5f39mvoVh1a2HFqV+QSzuNCBAwcCAAE0AAAAAOCTBAAAAAAAyAAAAAAAAAAGodgXkTdUKpg0N73+KnqyVX9TXIp4citopJ3AAAAAAAgCAQJ0AAAAAEXlebz5JTz2i0ff8fs6OlwsIbrFsjwJrhKm4FVr8ItBReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0EAAAAAAAAAAAAAAAAAAAAAReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0EIBgEDBAUGAAQCAAAA';

export const STAKING_ACTIVATE_UNSIGNED_TX_WITH_MEMO =
  'AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAICkXlebz5JTz2i0ff8fs6OlwsIbrFsjwJrhKm4FVr8ItBYnsvugEnYfm5Gbz5TLtMncgFHZ8JMpkxTTlJIzJovekGp9UXGSxcUSGMyUw9SvF/WNruCJuh/UTj29mKAAAAALH5eXiaHEfRPEjYei8nFxDrf5MmCVEXMWKQvWwp2vXZBqfVFxjHdMkoVmOYaR1etoteuKObS21cc1VbIQAAAAAGp9UXGTWE0P7tm7NDHRMga+VEKBtXuFZsxTdf9AAAAAah2BelAgULaAeR5s5tuI4eW3FQ9h/GeQpOtNEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGodgXkTdUKpg0N73+KnqyVX9TXIp4citopJ3AAAAAAAVKU1qZKSEGTSTocWDaOHx8NbXdvJK7geQfqEBBBUSN4zLa+S+r7Oi2P/ekQAXl/f2a+hWHVrYcWpX5BLO40IEEBwIAATQAAAAA4JMEAAAAAADIAAAAAAAAAAah2BeRN1QqmDQ3vf4qerJVf1NcinhyK2ikncAAAAAACAIBAnQAAAAAReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0FF5Xm8+SU89otH3/H7OjpcLCG6xbI8Ca4SpuBVa/CLQQAAAAAAAAAAAAAAAAAAAABF5Xm8+SU89otH3/H7OjpcLCG6xbI8Ca4SpuBVa/CLQQgGAQMEBQYABAIAAAAJAAl0ZXN0IG1lbW8=';

export const STAKING_DEACTIVATE_SIGNED_TX =
  'AaLBY785UnEDo+YK6rBB94pQRWWhAO68+4IcS/KFp8DJZiBjEsNQmEYgyeHicRgzhmmDomIp8kvByGmSWHncOwYBAAIEReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0Fiey+6ASdh+bkZvPlMu0ydyAUdnwkymTFNOUkjMmi96Qan1RcYx3TJKFZjmGkdXraLXrijm0ttXHNVWyEAAAAABqHYF5E3VCqYNDe9/ip6slV/U1yKeHIraKSdwAAAAADjMtr5L6vs6LY/96RABeX9/Zr6FYdWthxalfkEs7jQgQEDAwECAAQFAAAA';

export const STAKING_DEACTIVATE_SIGNED_TX_WITH_MEMO =
  'Af2uU7QzoJlGaXTecw48WcZ43Ic5ZMwUPNZWIv16OQEeftu4Yfhr+pwyZ/G7RLVYJvs0PDWHyJjN3h7HUFyZ9AABAAMFReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0Fiey+6ASdh+bkZvPlMu0ydyAUdnwkymTFNOUkjMmi96Qan1RcYx3TJKFZjmGkdXraLXrijm0ttXHNVWyEAAAAABqHYF5E3VCqYNDe9/ip6slV/U1yKeHIraKSdwAAAAAAFSlNamSkhBk0k6HFg2jh8fDW13bySu4HkH6hAQQVEjeMy2vkvq+zotj/3pEAF5f39mvoVh1a2HFqV+QSzuNCBAgMDAQIABAUAAAAEAA9UZXN0IGRlYWN0aXZhdGU=';

export const STAKING_DEACTIVATE_UNSIGNED_TX =
  'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAIEReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0Fiey+6ASdh+bkZvPlMu0ydyAUdnwkymTFNOUkjMmi96Qan1RcYx3TJKFZjmGkdXraLXrijm0ttXHNVWyEAAAAABqHYF5E3VCqYNDe9/ip6slV/U1yKeHIraKSdwAAAAADjMtr5L6vs6LY/96RABeX9/Zr6FYdWthxalfkEs7jQgQEDAwECAAQFAAAA';

export const STAKING_DEACTIVATE_UNSIGNED_TX_WITH_MEMO =
  'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAMFReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0Fiey+6ASdh+bkZvPlMu0ydyAUdnwkymTFNOUkjMmi96Qan1RcYx3TJKFZjmGkdXraLXrijm0ttXHNVWyEAAAAABqHYF5E3VCqYNDe9/ip6slV/U1yKeHIraKSdwAAAAAAFSlNamSkhBk0k6HFg2jh8fDW13bySu4HkH6hAQQVEjeMy2vkvq+zotj/3pEAF5f39mvoVh1a2HFqV+QSzuNCBAgMDAQIABAUAAAAEAA9UZXN0IGRlYWN0aXZhdGU=';

export const STAKING_WITHDRAW_SIGNED_TX =
  'AYunHKVBIH42gaTqENPaSKedOvOqlk3h5JX+qxG1TzGWZI87Ho8zQYZCQXkzH8642FNZvlQyZ7iywv2f0uA4nA0BAAMFReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0Fiey+6ASdh+bkZvPlMu0ydyAUdnwkymTFNOUkjMmi96Qan1RcYx3TJKFZjmGkdXraLXrijm0ttXHNVWyEAAAAABqfVFxk1hND+7ZuzQx0TIGvlRCgbV7hWbMU3X/QAAAAGodgXkTdUKpg0N73+KnqyVX9TXIp4citopJ3AAAAAAOMy2vkvq+zotj/3pEAF5f39mvoVh1a2HFqV+QSzuNCBAQQFAQACAwAMBAAAAOCTBAAAAAAA';

export const STAKING_WITHDRAW_SIGNED_TX_WITH_MEMO =
  'ARhhP9kya7ZCgN6tCuyCZwhGMRXeI7y/dhKNFFKL1A/Tx1qd16EFIQTvVxruQ/5di3y5lAUHSML8Hv7dYVYzHwoBAAQGReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0Fiey+6ASdh+bkZvPlMu0ydyAUdnwkymTFNOUkjMmi96Qan1RcYx3TJKFZjmGkdXraLXrijm0ttXHNVWyEAAAAABqfVFxk1hND+7ZuzQx0TIGvlRCgbV7hWbMU3X/QAAAAGodgXkTdUKpg0N73+KnqyVX9TXIp4citopJ3AAAAAAAVKU1qZKSEGTSTocWDaOHx8NbXdvJK7geQfqEBBBUSN4zLa+S+r7Oi2P/ekQAXl/f2a+hWHVrYcWpX5BLO40IECBAUBAAIDAAwEAAAA4JMEAAAAAAAFAA1UZXN0IHdpdGhkcmF3';

export const STAKING_WITHDRAW_UNSIGNED_TX =
  'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAMFReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0Fiey+6ASdh+bkZvPlMu0ydyAUdnwkymTFNOUkjMmi96Qan1RcYx3TJKFZjmGkdXraLXrijm0ttXHNVWyEAAAAABqfVFxk1hND+7ZuzQx0TIGvlRCgbV7hWbMU3X/QAAAAGodgXkTdUKpg0N73+KnqyVX9TXIp4citopJ3AAAAAAOMy2vkvq+zotj/3pEAF5f39mvoVh1a2HFqV+QSzuNCBAQQFAQACAwAMBAAAAOCTBAAAAAAA';

export const STAKING_WITHDRAW_UNSIGNED_TX_WITH_MEMO =
  'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAQGReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0Fiey+6ASdh+bkZvPlMu0ydyAUdnwkymTFNOUkjMmi96Qan1RcYx3TJKFZjmGkdXraLXrijm0ttXHNVWyEAAAAABqfVFxk1hND+7ZuzQx0TIGvlRCgbV7hWbMU3X/QAAAAGodgXkTdUKpg0N73+KnqyVX9TXIp4citopJ3AAAAAAAVKU1qZKSEGTSTocWDaOHx8NbXdvJK7geQfqEBBBUSN4zLa+S+r7Oi2P/ekQAXl/f2a+hWHVrYcWpX5BLO40IECBAUBAAIDAAwEAAAA4JMEAAAAAAAFAA1UZXN0IHdpdGhkcmF3';

// #endregion staking

export const WALLET_INIT_UNSIGNED_TX =
  'AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgADBUXlebz5JTz2i0ff8fs6OlwsIbrFsjwJrhKm4FVr8ItBb/oSifqcWWi8BxhMpNkr6eT3wAuWRIv8GCNbT0xx4W4Gp9UXGSxWjuCKhF9z0peIzwNcMUWyGrNE2AYuqUAAAAan1RcZLFxRIYzJTD1K8X9Y2u4Im6H9ROPb2YoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjMtr5L6vs6LY/96RABeX9/Zr6FYdWthxalfkEs7jQgQIEAgABNAAAAADgkwQAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAwECAyQGAAAAReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0E=';
export const WALLET_INIT_UNSIGNED_TX_AMOUNT_ZERO =
  'AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgADBUXlebz5JTz2i0ff8fs6OlwsIbrFsjwJrhKm4FVr8ItBb/oSifqcWWi8BxhMpNkr6eT3wAuWRIv8GCNbT0xx4W4Gp9UXGSxWjuCKhF9z0peIzwNcMUWyGrNE2AYuqUAAAAan1RcZLFxRIYzJTD1K8X9Y2u4Im6H9ROPb2YoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjMtr5L6vs6LY/96RABeX9/Zr6FYdWthxalfkEs7jQgQIEAgABNAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAwECAyQGAAAAReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0E=';
export const WALLET_INIT_WITH_MEMO_UNSIGNED_TX =
  'AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAEBkXlebz5JTz2i0ff8fs6OlwsIbrFsjwJrhKm4FVr8ItBb/oSifqcWWi8BxhMpNkr6eT3wAuWRIv8GCNbT0xx4W4Gp9UXGSxWjuCKhF9z0peIzwNcMUWyGrNE2AYuqUAAAAan1RcZLFxRIYzJTD1K8X9Y2u4Im6H9ROPb2YoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFSlNamSkhBk0k6HFg2jh8fDW13bySu4HkH6hAQQVEjeMy2vkvq+zotj/3pEAF5f39mvoVh1a2HFqV+QSzuNCBAwQCAAE0AAAAAOCTBAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQDAQIDJAYAAABF5Xm8+SU89otH3/H7OjpcLCG6xbI8Ca4SpuBVa/CLQQUAF3Rlc3QgbWVtbyBwbGVhc2UgaWdub3Jl';
export const WALLET_INIT_SIGNED_TX =
  'AkZkKE//bWVEejciXEfuP15/Uz+lqrlV2O1okIqJk/H9xFQvD6XzuqLO7rkM0J2JhAL4rbRzPHRgvS5jm2b3nw4ornr5So+zUUzMPYwC3FQLRXkRktIcY3J99SpPs08bpaZH0Rt4jMknSvlXFdq0ZnBIzYTtZc5aTt+qsEtezgIJAgADBUXlebz5JTz2i0ff8fs6OlwsIbrFsjwJrhKm4FVr8ItBb/oSifqcWWi8BxhMpNkr6eT3wAuWRIv8GCNbT0xx4W4Gp9UXGSxWjuCKhF9z0peIzwNcMUWyGrNE2AYuqUAAAAan1RcZLFxRIYzJTD1K8X9Y2u4Im6H9ROPb2YoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjMtr5L6vs6LY/96RABeX9/Zr6FYdWthxalfkEs7jQgQIEAgABNAAAAADgkwQAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAwECAyQGAAAAReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0E=';
export const WALLET_INIT_SIGNED_TX_AMOUNT_ZERO =
  'ArGZTc2bsfX4K9TMFIK4/bpO1yo3JQW3dTn8Vo4c2GyXpGVPrjv2Il7wTpO7xWR8DM46LoRh+yI9wUZDT1cknQx1JwrGiE4R2NviwtOgIHTWkD/P46kRf0MiH2tL0QlBtXeIMQu7Y7wsLqi5yIPFJnR3nFg1HxtLyzUfpN6LsboBAgADBUXlebz5JTz2i0ff8fs6OlwsIbrFsjwJrhKm4FVr8ItBb/oSifqcWWi8BxhMpNkr6eT3wAuWRIv8GCNbT0xx4W4Gp9UXGSxWjuCKhF9z0peIzwNcMUWyGrNE2AYuqUAAAAan1RcZLFxRIYzJTD1K8X9Y2u4Im6H9ROPb2YoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjMtr5L6vs6LY/96RABeX9/Zr6FYdWthxalfkEs7jQgQIEAgABNAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAwECAyQGAAAAReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0E=';
export const WALLET_INIT_WITH_MEMO_SIGNED_TX =
  'Anc4MDZhEUQ+M/2onLVBPzfxg2TQjg83jl6BTs1QZBvY/hjLuRq5sewtSPGQGhfVU+bzuWCKq/RE12WN1eJAkAiE/xOFhzDTXl2jCZumoxKdSz2qJQdnB7lAN6GiyGXacmdWJ0/2o1Mz0esUIN7YPYhVS/7H0t/SHYwqTL4ATF4BAgAEBkXlebz5JTz2i0ff8fs6OlwsIbrFsjwJrhKm4FVr8ItBb/oSifqcWWi8BxhMpNkr6eT3wAuWRIv8GCNbT0xx4W4Gp9UXGSxWjuCKhF9z0peIzwNcMUWyGrNE2AYuqUAAAAan1RcZLFxRIYzJTD1K8X9Y2u4Im6H9ROPb2YoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFSlNamSkhBk0k6HFg2jh8fDW13bySu4HkH6hAQQVEjeMy2vkvq+zotj/3pEAF5f39mvoVh1a2HFqV+QSzuNCBAwQCAAE0AAAAAOCTBAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQDAQIDJAYAAABF5Xm8+SU89otH3/H7OjpcLCG6xbI8Ca4SpuBVa/CLQQUAF3Rlc3QgbWVtbyBwbGVhc2UgaWdub3Jl';

export const TRANSFER_UNSIGNED_TX_WITH_MEMO =
  'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAIEReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0GpGBtS9+2Q6usNrUtxvrRTg2FnYTFxfpMJWBBft6OJ1QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUpTWpkpIQZNJOhxYNo4fHw1td28kruB5B+oQEEFRI3jMtr5L6vs6LY/96RABeX9/Zr6FYdWthxalfkEs7jQgQICAgABDAIAAADgkwQAAAAAAAMACXRlc3QgbWVtbw==';
export const TRANSFER_UNSIGNED_TX_WITHOUT_MEMO =
  'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEDReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0GpGBtS9+2Q6usNrUtxvrRTg2FnYTFxfpMJWBBft6OJ1QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4zLa+S+r7Oi2P/ekQAXl/f2a+hWHVrYcWpX5BLO40IEBAgIAAQwCAAAA4JMEAAAAAAA=';
export const TRANSFER_UNSIGNED_TX_WITH_DURABLE_NONCE =
  'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAIFReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0Fv+hKJ+pxZaLwHGEyk2Svp5PfAC5ZEi/wYI1tPTHHhbqkYG1L37ZDq6w2tS3G+tFODYWdhMXF+kwlYEF+3o4nVBqfVFxksVo7gioRfc9KXiM8DXDFFshqzRNgGLqlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOMy2vkvq+zotj/3pEAF5f39mvoVh1a2HFqV+QSzuNCBAgQDAQMABAQAAAAEAgACDAIAAADgkwQAAAAAAA==';
export const TRANSFER_UNSIGNED_TX_WITH_MEMO_AND_DURABLE_NONCE =
  'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAMGReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0Fv+hKJ+pxZaLwHGEyk2Svp5PfAC5ZEi/wYI1tPTHHhbqkYG1L37ZDq6w2tS3G+tFODYWdhMXF+kwlYEF+3o4nVBqfVFxksVo7gioRfc9KXiM8DXDFFshqzRNgGLqlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVKU1qZKSEGTSTocWDaOHx8NbXdvJK7geQfqEBBBUSN4zLa+S+r7Oi2P/ekQAXl/f2a+hWHVrYcWpX5BLO40IEDBAMBAwAEBAAAAAQCAAIMAgAAAOCTBAAAAAAABQAJdGVzdCBtZW1v';
export const TRANSFER_SIGNED_TX_WITH_MEMO_AND_DURABLE_NONCE =
  'AeY9EhCImaZwL96q6m1UXPaA+jQ6nSgHkqOegJIoGusdoK9X1TLvs/p8d2XXopdiZnrigV6o/eOOEuiBJPU/IAYBAAMGReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0Fv+hKJ+pxZaLwHGEyk2Svp5PfAC5ZEi/wYI1tPTHHhbqkYG1L37ZDq6w2tS3G+tFODYWdhMXF+kwlYEF+3o4nVBqfVFxksVo7gioRfc9KXiM8DXDFFshqzRNgGLqlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVKU1qZKSEGTSTocWDaOHx8NbXdvJK7geQfqEBBBUSN4zLa+S+r7Oi2P/ekQAXl/f2a+hWHVrYcWpX5BLO40IEDBAMBAwAEBAAAAAQCAAIMAgAAAOCTBAAAAAAABQAJdGVzdCBtZW1v';
export const MULTI_TRANSFER_SIGNED =
  'ATSK8GELdcLhPlOj088M5ZDd4wvVuSNx/pUlWtRFQt1CvibyVTx3SWqp8S1HiDZCtochy3LJ6jHgrQgK4QgQRwQBAAMLReV5vPklPPaLR9/x+zo6XCwhusWyPAmuEqbgVWvwi0Fv+hKJ+pxZaLwHGEyk2Svp5PfAC5ZEi/wYI1tPTHHhbqkYG1L37ZDq6w2tS3G+tFODYWdhMXF+kwlYEF+3o4nVTN7ajWa08Nplu4ugENukXhibq406iJdXhn9fMg/aoOKjj+uLLZZjiJkwlHU3Vn15l+FRIC5QMRowGMwKpBrxqa+Z/3SC/6IvIX4xpRUpsHc/EW8GbStZS1PYslY6VK9TS0fRKDi+sKkfLi6Z6tJ8KTR3IXC6gXrURoZu9CQxfvJV9JIdjofHGJF6n5KCAOgVlwmMSlvINuY1ey055UWp6Qan1RcZLFaO4IqEX3PSl4jPA1wxRbIas0TYBi6pQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFSlNamSkhBk0k6HFg2jh8fDW13bySu4HkH6hAQQVEjeMy2vkvq+zotj/3pEAF5f39mvoVh1a2HFqV+QSzuNCBCAkDAQgABAQAAAAJAgACDAIAAADgkwQAAAAAAAkCAAMMAgAAAOCTBAAAAAAACQIABAwCAAAA4JMEAAAAAAAJAgAFDAIAAADgkwQAAAAAAAkCAAYMAgAAAOCTBAAAAAAACQIABwwCAAAA4JMEAAAAAAAKAAl0ZXN0IG1lbW8=';

export const associatedTokenAccounts = {
  mint: 'sol:ORCA',
  mintId: 'orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE',
  accounts: [
    {
      pub: '12f6D3WubGVeQoH2m8kTvvcrasWdXWwtVzUCyRNDZxA2',
      prv: '3d3f9156be6a0a09fb2a8c457b55436d75f1cd15c59a780d75ed05cec760cf84006ca6295a8e24441e9811c7ebbbaef08489578aedc137a32eb8f0ed549e5ba7',
      ata: '6EAcSvLcZYYtsihnU86akhy6UCz4PFBFN6RhEMZ7uSzk',
    },
    {
      pub: 'HYSNuhy219S7bguZwKQRKEZ6j7QawJMDMV2cCwz999LD',
      prv: '06ab8f10b73287c15087b5f37a51374f7ee428dde8483302102fb0c4534bad5cf5c8b0cb3ff9c37e31a6b65de731bea31cdd13236ec38979b93549c55c3309da',
      ata: 'C7XUGfrF26fmGE2VGtVRh5N7FNqWVQy1mkH8CEFxmxEm',
    },
  ],
};

export const ATA_INIT_UNSIGNED_TX =
  'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAUHAGymKVqOJEQemBHH67uu8ISJV4rtwTejLrjw7VSeW6dNqdo+cuWQ+rQ8LcBm6GL6h1EGC0NXmyuOXCBESkJBmQwA0K/rhhTafxmroC1A8YxpJYX2UCDfztPV5fmpwMThAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG3fbh12Whk9nL4UbO63msHLSF7V9bN5E6jPWFfv8AqQan1RcZLFxRIYzJTD1K8X9Y2u4Im6H9ROPb2YoAAAAAjJclj04kifG7PRApFI4NgwtaE5na/xCEBI572Nvp+FnjMtr5L6vs6LY/96RABeX9/Zr6FYdWthxalfkEs7jQgQEGBwABAAIDBAUA';
export const ATA_INIT_UNSIGNED_TX_WITH_MEMO =
  'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAYIAGymKVqOJEQemBHH67uu8ISJV4rtwTejLrjw7VSeW6dNqdo+cuWQ+rQ8LcBm6GL6h1EGC0NXmyuOXCBESkJBmQwA0K/rhhTafxmroC1A8YxpJYX2UCDfztPV5fmpwMThAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG3fbh12Whk9nL4UbO63msHLSF7V9bN5E6jPWFfv8AqQan1RcZLFxRIYzJTD1K8X9Y2u4Im6H9ROPb2YoAAAAAjJclj04kifG7PRApFI4NgwtaE5na/xCEBI572Nvp+FkFSlNamSkhBk0k6HFg2jh8fDW13bySu4HkH6hAQQVEjeMy2vkvq+zotj/3pEAF5f39mvoVh1a2HFqV+QSzuNCBAgYHAAEAAgMEBQAHABd0ZXN0IG1lbW8gcGxlYXNlIGlnbm9yZQ==';
export const ATA_INIT_SIGNED_TX =
  'ASfRe5DuEr3Dak9mDN77iNghCdzdaJwvpmelqoxAjaheKI2YQiLJHOiicBqCsDHLH4pPvtJtpY5lx5xZoKLSdgIBAAUHAGymKVqOJEQemBHH67uu8ISJV4rtwTejLrjw7VSeW6dNqdo+cuWQ+rQ8LcBm6GL6h1EGC0NXmyuOXCBESkJBmQwA0K/rhhTafxmroC1A8YxpJYX2UCDfztPV5fmpwMThAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG3fbh12Whk9nL4UbO63msHLSF7V9bN5E6jPWFfv8AqQan1RcZLFxRIYzJTD1K8X9Y2u4Im6H9ROPb2YoAAAAAjJclj04kifG7PRApFI4NgwtaE5na/xCEBI572Nvp+FnjMtr5L6vs6LY/96RABeX9/Zr6FYdWthxalfkEs7jQgQEGBwABAAIDBAUA';
export const ATA_INIT_SIGNED_TX_WITH_MEMO =
  'AQB6vNNCKha4pL0Chx08W/7pqCRReR90+hA01EIgu5uycs+ZUeZgTrLcPSqaAcHDg4kPnjoAYZ/6+kCNGhFbywIBAAYIAGymKVqOJEQemBHH67uu8ISJV4rtwTejLrjw7VSeW6dNqdo+cuWQ+rQ8LcBm6GL6h1EGC0NXmyuOXCBESkJBmQwA0K/rhhTafxmroC1A8YxpJYX2UCDfztPV5fmpwMThAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG3fbh12Whk9nL4UbO63msHLSF7V9bN5E6jPWFfv8AqQan1RcZLFxRIYzJTD1K8X9Y2u4Im6H9ROPb2YoAAAAAjJclj04kifG7PRApFI4NgwtaE5na/xCEBI572Nvp+FkFSlNamSkhBk0k6HFg2jh8fDW13bySu4HkH6hAQQVEjeMy2vkvq+zotj/3pEAF5f39mvoVh1a2HFqV+QSzuNCBAgYHAAEAAgMEBQAHABd0ZXN0IG1lbW8gcGxlYXNlIGlnbm9yZQ==';

export const tokenTransfers = {
  mint: '9cgpBeNZ2HnLda7NWaaU1i3NyTstk2c4zCMUcoAGsi9C',
  source: 'FQ9UD9fnmbHbVU2QXFnLPCFL4ESDPyWVvjSztFyzF2p5',
  decimals: 6,
  amount: 10000,
  multiSigners: [
    {
      publicKey: new PublicKey('7nLPX6gmwAKrgYtR84qgCLz1f57Y561BceLeqMyy5VmS'),
      secretKey: new Uint8Array([
        38, 90, 246, 51, 191, 183, 241, 253, 50, 222, 191, 210, 214, 96, 141, 220, 199, 218, 142, 120, 156, 86, 84, 82,
        218, 50, 97, 217, 226, 132, 115, 241, 100, 195, 46, 42, 179, 131, 110, 18, 200, 106, 36, 251, 130, 156, 79, 105,
        179, 132, 56, 160, 225, 100, 192, 243, 188, 34, 189, 62, 221, 24, 77, 33,
      ]),
    },
    {
      publicKey: new PublicKey('FFHGKjy4tNMDTujGSAdDzupMvn8FDvZWTfKTob8nGffa'),
      secretKey: new Uint8Array([
        177, 72, 136, 37, 12, 70, 205, 213, 136, 123, 160, 242, 210, 211, 143, 82, 73, 81, 244, 217, 181, 2, 213, 29,
        111, 131, 90, 229, 74, 44, 4, 72, 211, 172, 35, 102, 16, 181, 37, 44, 59, 170, 96, 244, 193, 69, 63, 243, 50,
        123, 104, 76, 94, 160, 152, 33, 8, 214, 195, 194, 80, 102, 165, 29,
      ]),
    },
  ],
};

export const extraAccounts = {
  prv1: '3Ps7RFbm9ittLrqmoPL3dBiZ8B53AGazwwj1boPUzRx9e8pYjwmJKmmicVMy9HPg5hvp2kfSYVPBVDQdsyJEFobP',
  prv1nonce: '22FVRX1hUiWk4hxkV8pZC6zVVHCKGcL655yG6LWFsnXaKtBXZTSsw19VTeBwD1rfzbnSjR72c4QRU6Zv7os2ttsK',
  prv2: '3qzzw5yizqsLyELZWSn2fwH6dFWAsSUFhgBo3W7SBoi64i5ELKtgonW95woRdCvZJRaWUr5jqkPztC3ft3uexhtL',
  prv3: '48xKDrzKBbEKDksUE6ZJagMNR3HXy1cH1EDbSKU6oFnwfCHDENXTXbYEck4Q3VrW1S8cNDPLYDgFYD9SXZWeQBbp',
  prv4: '4Tivu4cjLwhfR3ouKWcR128i3jdLReUPtCMg681F2d6MJR81auhFXNtnwaJJUDAUe3XtjCPPqhYaCjBasnPwmwAH',
  prv5: '461UkCcg4BkzSDRnkZFSrDGZ52Rvoh8uAAxgDqNAbs1qH1rBCRvAyswaCSJLvEHZsV6XfdX3C8arEZokDtqeiVxC',
};

export const SIGNED_MESSAGE_SIGNATURE = new Uint8Array([
  106, 64, 2, 206, 80, 35, 122, 58, 91, 151, 10, 13, 25, 115, 180, 39, 128, 42, 93, 32, 203, 128, 76, 239, 255, 115, 49,
  49, 164, 131, 188, 67, 109, 148, 131, 115, 164, 192, 78, 3, 188, 232, 126, 93, 157, 190, 3, 242, 136, 97, 75, 61, 196,
  36, 205, 232, 207, 94, 134, 10, 210, 220, 134, 1,
]);
