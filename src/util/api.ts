import {
  QuestSummaryListRequest,
  QuestSummaryListResponse,
  QuestSummaryRequest,
  QuestSummaryResponse,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from "cello-core/application";

/**
 * APIサーバーのホストのベースURL。
 */
export const ServerHost = "";

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

// #region クエスト関連
/**
 * クエスト一覧画にクエストの概要を取得する。
 * @param req クエスト概要を取得するためのリクエストbody
 * @returns クエスト概要APIからのレスポンス
 */
export const fetchQuestSummary = (
  req: QuestSummaryRequest
): Promise<QuestSummaryResponse> => accessApi("quests", "GET", req);

/**
 * クエスト一覧画面にクエストの概要リストを取得する。
 * @param req クエスト概要リストを取得するためのリクエストbody
 * @returns クエスト概要リストAPIからのレスポンス
 */
export const fetchQuestSummaryList = (
  req: QuestSummaryListRequest
): Promise<QuestSummaryListResponse> => accessApi("quests", "GET", req);
// #endregion

// #region 認証関連
export const signIn = (req: SignInRequest): Promise<SignInResponse> =>
  accessApi("signin", "POST", req);

export const signUp = (req: SignUpRequest): Promise<SignUpResponse> =>
  accessApi("signup", "POST", req);
// #endregion
