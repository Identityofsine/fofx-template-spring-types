export type DateLike = Date | string | number;

export type Timestamped = {
  createdAt?: DateLike
  updatedAt?: DateLike
}

export type OAuth2LoginParams = {
  provider?: AuthenticationMethod;
  redirectUrl?: string;
  idToken?: string;
};

export type OAuth2LoginRequest = {
  idToken: string;
  redirectUrl: string;
};

export type LoginRequest = {
  authenticationMethodLk: AuthenticationMethod;
  specialToken: string;
  username: string; // Will be generated from token
};
export type CreateAccountRequest = Pick<
  LoginRequest,
  "authenticationMethodLk" | "specialToken"
> & {
  username?: string;
};

export type AuthenticationMethod = "GOOGLE" | "INTERNAL";
export const AuthenticationMethodLk = {
  GOOGLE: "GOOGLE",
  INTERNAL: "INTERNAL",
} as const;

export const ApiResponseTypes = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
} as const;

export type ApiResponseType =
  (typeof ApiResponseTypes)[keyof typeof ApiResponseTypes];

export type ApiResponse<T = unknown> = {
  status: number;
  /**
   * @name data
   * @description The data returned from the API over an error 
   */
  data: T | null;
  /**
   * @name payload
   * @description The payload sent to the API over a success
   */
  payload?: T;
  type: ApiResponseType;
  message?: string;
  error?: string;
};
