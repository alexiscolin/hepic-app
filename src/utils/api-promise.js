export default function (func, commit = null, ...commitDef) {
  return new Promise((resolve, reject) => {
    func.then((res) => {
      commitDef.length > 0 && commitDef.forEach(def => commit(def, res.data));
      resolve(res);
    }).catch((res) => {
      reject(res);
    });
  });
}
