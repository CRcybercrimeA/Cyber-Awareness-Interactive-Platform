function parseAndNormalizeUrl(inputUrl) {
  let workingUrl = inputUrl.trim();

  if (!workingUrl.startsWith("http://") && !workingUrl.startsWith("https://")) {
    workingUrl = `https://${workingUrl}`;
  }

  try {
    const parsed = new URL(workingUrl);

    return {
      isValid: true,
      normalizedUrl: parsed.toString(),
      hostname: parsed.hostname.toLowerCase(),
      pathname: parsed.pathname,
      search: parsed.search,
      protocol: parsed.protocol,
      port: parsed.port
    };
  } catch (error) {
    return {
      isValid: false,
      message: "Invalid URL format"
    };
  }
}

module.exports = { parseAndNormalizeUrl };