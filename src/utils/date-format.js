export default function (date) {
  function ret(r) { return (r < 10) ? `0${r}` : r; }
  const d = new Date(date);
  return [ret(d.getDate()), ret(d.getMonth() + 1), d.getFullYear().toString().substr(-2)].join('/');
}
