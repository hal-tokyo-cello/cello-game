/**
 * APIサーバーのホストのベースURL。
 */
export const ServerHost = process.env.CELLO_API_SERVER;

/**
 * API問い合わせ用のfetchヘルパー関数。
 * @param endPoint APIエンドのルート
 * @param method リクエストメソッド
 * @param body リクエストのbody部
 * @param respondValidator レスポンスのバリデータ。検証成功の場合はtrue、失敗の場合はfalseか、出力するメッセージをreturn。
 * @returns APIからのレスポンス
 */
export const accessApi = <T, U>(
  endPoint: string,
  method: "GET" | "POST",
  body: T,
  respondValidator?: (res: Response) => boolean | string
): Promise<U> => {
  return fetch(`${ServerHost}/api/${endPoint}`, {
    body: JSON.stringify(body),
    method: method,
  }).then((res) => {
    if (respondValidator === undefined) {
      if (res.status != 200) {
        return Promise.reject(res.statusText);
      }
    } else {
      const valid = respondValidator(res);
      if (typeof valid === "string") {
        return Promise.reject(valid);
      } else if (!valid) {
        return Promise.reject(res.statusText);
      }
    }

    return res.json();
  });
};
