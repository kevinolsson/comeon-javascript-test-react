/* eslint-disable */
export function truncate(string) {
  let length = 90;
  if(string.length>length)
    return string.substring(0, length) + '...';
  else
    return string;
}