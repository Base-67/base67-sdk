export interface RequestAdminLoginPayload {
  email: string;
}

export interface VerifyAdminLoginPayload {
  email: string;
  code: string;
}

export interface AdminAuthResponse {
  success?: boolean;
  token?: string;
  message?: string;
  [key: string]: any;
}
