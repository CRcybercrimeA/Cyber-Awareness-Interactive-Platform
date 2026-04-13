function isIpAddress(hostname) {
  const ipv4Regex =
    /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
  return ipv4Regex.test(hostname);
}

function countSubdomains(hostname) {
  const parts = hostname.split(".");
  return parts.length > 2 ? parts.length - 2 : 0;
}

function getTld(hostname) {
  const parts = hostname.split(".");
  return parts[parts.length - 1];
}

module.exports = { isIpAddress, countSubdomains, getTld };