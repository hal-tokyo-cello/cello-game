/**
 * APIサーバーのホストのベースURL。
 */
const ServerHost = process.env.CELLO_API_SERVER;

const defaultValidator = (res: Response): boolean | string =>
  res.status != 200 ? res.statusText : true;

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
  method: "GET" | "POST" | "PUT" = "GET",
  headers: HeadersInit = {},
  respondValidator = defaultValidator
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
  code: number;
  message: string;
  errors: {
    message: string;
    reason: string;
  }[];
}
