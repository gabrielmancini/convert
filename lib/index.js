function convert (line) {
  let pattern = /(\d+)\|(\d+)\|(\w+)\|"(\w+)\s(\/[\w|.|-]+)\s([\w|.|/]+)"\|(\d+)/
  let groups = pattern.exec(line)
  const obj = {
    provider: 'MINHA CDN',
    'response-size': groups[1],
    'status-code': groups[2],
    'cache-status': groups[3],
    'http-method': groups[4],
    'uri-path': groups[5],
    'time-taken': groups[7]
  }

  return `"${obj.provider}" ${obj['http-method']} ${obj['status-code']} ${obj['uri-path']} ${obj['time-taken']} ${obj['response-size']} ${obj['cache-status']}`
}

module.exports = convert
