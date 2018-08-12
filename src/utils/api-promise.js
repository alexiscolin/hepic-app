export default function (func, commitDef = null, commit) {
  return new Promise((resolve, reject) => {
    func.then((res) => {
      commitDef && commit(commitDef, res.data);
      resolve(res);
    }).catch((res) => {
      reject(res);
    });
  });
}
