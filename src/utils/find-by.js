export default function (arry, ref, key = 'id') {
  return arry.find(item => item[key] === parseInt(ref, 10));
}
