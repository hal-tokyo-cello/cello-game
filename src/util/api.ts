import axios, { AxiosResponse } from "axios";
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
export const ServerHost =
  "https://3421802a-d0a1-4d8d-84e3-9f215c177961.mock.pstmn.io";

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
  respondValidator?: (res: AxiosResponse<U>) => boolean | string
): Promise<U> => {
  return axios({
    method: method,
    url: `${ServerHost}/api/${endPoint}`,
    data: body,
  }).then((res: AxiosResponse<U>) => {
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

    return res.data;
  });
};

// #region クエスト関連
/**
 * クエスト一覧画にクエストの概要を取得する。
 * @param id クエストのID
 * @param req クエスト概要を取得するためのリクエストbody
 * @returns クエスト概要APIからのレスポンス、あるいは失敗理由のエラーの文字列。
 */
export const fetchQuestSummary = (
  id: string | number,
  req: QuestSummaryRequest
): Promise<QuestSummaryResponse> => accessApi(`quests/${id}`, "GET", req);

/**
 * クエスト一覧画面にクエストの概要リストを取得する。
 * @param req クエスト概要リストを取得するためのリクエストbody
 * @returns クエスト概要リストAPIからのレスポンス、あるいは失敗理由のエラーの文字列。
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
