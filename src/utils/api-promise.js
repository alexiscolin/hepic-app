export default function (func, commitDef, commit) {
  return new Promise((resolve, reject) => {
    func.then((res) => {
      commit(commitDef, res.data);
      resolve(res);
    }).catch((res) => {
      reject(res);
    });
  });
}
