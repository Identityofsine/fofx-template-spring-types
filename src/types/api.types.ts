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
  data: T | null;
  type: ApiResponseType;
  message?: string;
  error?: string;
};
