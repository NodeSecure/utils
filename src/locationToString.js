export function locationToString(location) {
  const start = `${location[0][0]}:${location[0][1]}`;
  const end = `${location[1][0]}:${location[1][1]}`;

  return `[${start}] - [${end}]`;
}
