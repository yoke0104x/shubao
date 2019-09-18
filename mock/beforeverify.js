import Mock from 'mockjs';
const getVerfitydata = Mock.mock({
  'cartList|100': [{
    //数组有3个值
    'id|+1': 1,
    className: '@cname',
    updataTime: '@now()',
    Type: '@cname',
    classPrice: /\d{5,10}\-/,
    teach: "TradeCode 9217"
  }, ],
})

export default getVerfitydata;
