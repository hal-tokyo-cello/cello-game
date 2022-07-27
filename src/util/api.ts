/**
 * APIサーバーのホストのベースURL。
 */
export const ServerHost = process.env.CELLO_API_SERVER;

const defaultValidator = (res: Response): boolean | string =>
  res.status != 200 ? res.statusText : true;

/**
 * API問い合わせ用のfetchヘルパー関数。
 * @param endPoint APIエンドのルート
 * @param method リクエストメソッド
 * @param body リクエストのbody部
 * @param respondValidator レスポンスのバリデータ。検証成功の場合はtrue、失敗の場合はfalseか、出力するメッセージを返す。
 * @returns APIからのレスポンス
 */
export const accessApi = <T, U>(
  endPoint: string,
  body?: T,
  method: "GET" | "POST" | "PUT" = "GET",
  respondValidator = defaultValidator
): Promise<U> => {
  return fetch(`${ServerHost}/${endPoint}`, {
    body: body && JSON.stringify(body),
    method: method,
  }).then((res) => {
    const valid = respondValidator(res);

    if (typeof valid === "string") {
      return Promise.reject(valid);
    }
    if (!valid) {
      return Promise.reject(res.statusText);
    }

    return res.json();
  });
};
