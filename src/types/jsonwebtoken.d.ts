declare module 'jsonwebtoken' {
  type Secret = string | Buffer;

  interface SignOptions {
    algorithm?: string;
    expiresIn?: string | number;
    [key: string]: any;
  }

  interface VerifyOptions {
    algorithms?: string[];
    [key: string]: any;
  }

  function sign(
    payload: string | object | Buffer,
    secretOrPrivateKey: Secret,
    options?: SignOptions
  ): string;

  function sign(
    payload: string | object | Buffer,
    secretOrPrivateKey: Secret,
    callback: (err: Error | null, token: string) => void
  ): void;

  function verify(
    token: string,
    secretOrPublicKey: Secret,
    options?: VerifyOptions
  ): object | string;

  function verify(
    token: string,
    secretOrPublicKey: Secret,
    callback: (err: Error | null, decoded: any) => void
  ): void;

  const jwt: {
    sign: typeof sign;
    verify: typeof verify;
    decode(token: string): null | { [key: string]: any } | string;
    [key: string]: any;
  };

  export = jwt;
}
