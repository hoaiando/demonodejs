exports.getInforUser = async (req, res, next) => {
  let body = req.body;
  const account = body["account"];
  console.log(account);
  let data = {
    firstname: "Tuan",
    age: 23,
  };
  return res.status(200).json({ status: true, message: "OK", data: data });
};
