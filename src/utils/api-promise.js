export default function (func, commit = null, commitDef = null) {
  return new Promise((resolve, reject) => {
    func.then((res) => {
      commitDef && commit(commitDef, res.data);
      resolve(res);
    }).catch((res) => {
      reject(res);
    });
  });
}
