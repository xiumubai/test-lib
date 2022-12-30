import React from "react";
import {
  render,
  screen,
  waitFor
} from "@testing-library/react";
import { DomAsync } from "../components/DomAsync";

describe("async", () => {
  test("for jest", async () => {
    const fetchData = async () => {
      const res = new Promise((resolve) => {
        resolve('success');
      })
      return res
    }
    const data = await fetchData()
    expect(data).toBe('success')
    await expect(fetchData()).resolves.toBe('success')
  })

  test("for react testing library", async () => {
    render(<DomAsync />)
    const testDom = await screen.findByText('a demo for async test') 
    expect(testDom).toBeInTheDocument()

    // 使用waitfor实现
    await waitFor(
      () => {
        const waitTestDom = screen.getByText("a demo for async test");
        expect(waitTestDom).toBeInTheDocument();
      },
      {
        timeout: 1000,
        interval: 100,
      }
    );
  })
})
