import React from "react";
import useRequest from "../hooks/useRequest";
import { renderHook } from "@testing-library/react-hooks";

import "whatwg-fetch";
import fetchMock from "fetch-mock";
import { act } from "react-test-renderer";

describe("useRequest", () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterAll(() => {
    fetchMock.restore();
  });

  it("should return data with a successful request", async () => {
    const { result } = renderHook(() => useRequest());
    fetchMock.mock("http://localhost:8080", {
      tickets: [
        {
          id: 1,
          subject: "first ticket",
          priority: "normal",
          requester_id: "361112156076",
          created_at: "2021-05-05T08:46:24Z",
        },
      ],
    });
    await act(async () => {
      result.current.setApiUrl("test.com");
    });

    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toStrictEqual({
      tickets: [
        {
          id: 1,
          subject: "first ticket",
          priority: "normal",
          requester_id: "361112156076",
          created_at: "2021-05-05T08:46:24Z",
        },
      ],
    });
  });
});
