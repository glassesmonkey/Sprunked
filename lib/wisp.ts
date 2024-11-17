

let wispClient: any = null;

async function getWispClient() {
  if (!wispClient) {
    const { buildWispClient } = await import('@wisp-cms/client');
    wispClient = buildWispClient({
      baseUrl: "https://www.wisp.blog",
      blogId: "cm3l5rr050000ygl7j0hv59qh", // 请替换为您的实际 Blog ID
    });
  }
  return wispClient;
}

export { getWispClient };