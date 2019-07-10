const codes = require("./codes.json");
function format(value, codeType) {
  let res = ""
  for (let i = codes.length; i--;) {
    if (codeType === codes[i].codeType) {
      for (let n = codes[i].codes.length; n--;) {
        if (value === codes[i].codes[n].code) {
          return res = codes[i].codes[n].value
        }
      }
    }
  }
}
export function code(value, codeType) {
  return (value == null)
    ? value
    : format(value, codeType)
}
