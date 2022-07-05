import { accessApi, ServerHost } from "./api";

const mockFetch = (status = 200, json = () => {}) => {
  global.fetch = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(
    (url, init) =>
      Promise.resolve({
        status: status,
        json: json,
      } as Response)
  );
};

describe("test access helper api", () => {
  it("should access server", () => {
    const body = { a: { b: 1, c: true } };
    const endPoint = "mock/1";
    const method = "GET";

    mockFetch(200, () => body);

    accessApi(endPoint, method, body);

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(`${ServerHost}/api/${endPoint}`, {
      method: method,
      body: JSON.stringify(body),
    });
  });

  it("should throw error on non 200 by default", () => {
    mockFetch(404);

    accessApi("/", "GET", {}).catch((err) => expect(err).toBeUndefined());
    expect(global.fetch).toBeCalledTimes(1);
  });

  it("should reject with status text for predicate custom validator", () => {
    mockFetch();
    accessApi("/", "GET", {}, (res) => false).catch((err) =>
      expect(err).toBeUndefined()
    );
    expect(global.fetch).toBeCalledTimes(1);
  });

  it("should reject with custom text for text custom validtor", () => {
    const errMsg = "err msg";

    mockFetch();

    accessApi("/", "GET", {}, (res) => errMsg).catch((err) =>
      expect(err).toBe(errMsg)
    );
    expect(global.fetch).toBeCalledTimes(1);
  });
});
