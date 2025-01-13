import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useItems } from "../src/hooks/useItems";

describe("useItems hook", () => {
  it("should add and remove items", () => {
    const { result } = renderHook(() => useItems());

    expect(result.current.items.length).toBe(0);

    act(() => {
      result.current.addItem("Walk with Bas");
      result.current.addItem("Kiss to Rocío");
    });

    expect(result.current.items.length).toBe(2);

    act(() => {
      result.current.removeItem(result.current.items[0].id);
    });

    expect(result.current.items.length).toBe(1);
  });
});