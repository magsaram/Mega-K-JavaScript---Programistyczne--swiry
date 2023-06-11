const obj = {
  id: 1,
  name: `Tester Testowy`,
  pwdHash: `abcdef1749cdf9278ac98d7492affff9c729accccf`,
  idAdmin: true,
  hasAvatar: true,
};
const obj2 = {
  id: 2,
  name: `Testowa Testerska`,
  pwdHash: `lksajfvcm541gdr4g124sdfwetdfg`,
  idAdmin: false,
  hasAvatar: false,
};
function filter(object) {
  const { id, name, hasAvatar } = object;
  const objectFiltr = {
    id,
    name,
    hasAvatar,
  };
  return objectFiltr;
}
console.log(filter(obj));
console.log(filter(obj2));
