export const mapFulfilledValues = (promises: any[]) =>
  promises.filter((promise) => promise.status === "fulfilled").map((promise: any) => promise.value);
