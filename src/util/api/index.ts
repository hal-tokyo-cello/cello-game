/**
 * APIサーバーのホストのベースURL。
 */
const ServerHost = process.env.CELLO_API_SERVER;

/**
 * API問い合わせ用のfetchヘルパー関数。
 * @param endPoint APIエンドのルート
 * @param method リクエストメソッド
 * @param body リクエストのbody部
 * @param headers リクエストのヘッダー部
 * @param respondValidator レスポンスのバリデータ。検証成功の場合はtrue、失敗の場合はfalseか、出力するメッセージを返す。
 * @returns APIからのレスポンス
 */
export const accessApi = <T, U>(
  endPoint: string,
  body?: T,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  headers: HeadersInit = {},
  respondValidator = (res: Response) => res.status == 200
) =>
  fetch(`${ServerHost}/${endPoint}`, {
    body: body && JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    method: method,
  }).then<U>((res) => {
    const valid = respondValidator(res);

    if (typeof valid === "string") {
      return Promise.reject(valid);
    }

    return valid ? res.json() : Promise.reject<ApiError>(res.json());
  });

export interface ApiError {
  error: {
    code: number;
    message: string;
    errors: {
      message: string;
      reason: string;
    }[];
  };
}

export const isApiError = (value: any): value is ApiError =>
  value.error.errors != undefined;

export interface User {
  accountId: string;
  name: string;
  email: string;
  avatar: Avatar;
  createDate?: number;
  updateDate?: number;
  leaveDate?: number;
  lastLogin?: number;
}

export interface Avatar {
  race: number;
  totalExp: number;
  evolved: boolean;
  iconUrl?: string;
}

export * from "./auth";
export * from "./mypage";
