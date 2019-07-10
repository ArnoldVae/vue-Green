module.exports = {
  getProducts: {
    resMessage: "success",
    code: 200,
    data: {
      productList: [
            {
                caseTitle: "1", //1 在库 2 已出库
                caseState: "1",
                personnel: "刘某某违反组织纪律",
                number: "320123455677672",
                registrationTime: "2019-02-25",
                term: "XXXXXX总政机关",
                termState: "1"
            },
            {
               caseTitle: "1",
                caseState: "1",
                personnel: "李某某违反组织纪律",
                number: "320123455677672",
                registrationTime: "2019-02-25",
                term: "XXXXXX总政机关",
                termState: "1"
            },
            {
                caseTitle: "2",
                caseState: "1",
                personnel: "张某某违反组织纪律",
                number: "320123455677672",
                registrationTime: "2019-02-25",
                term: "XXXXXX总政机关",
                termState: "1"
            },
             {
                caseTitle: "2",
                caseState: "1",
                personnel: "某某某违反组织纪律",
                number: "320123455677672",
                registrationTime: "2019-02-25",
                term: "XXXXXX总政机关",
                termState: "1"
            }
        ]
    }
  }
};
