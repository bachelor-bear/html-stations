async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
  ];
  const result = await test(userList)
  return await result
}

function test(userList1) {
  return new Promise((resolve)  => {
    setTimeout(() => {
      // フルネーム表示処理(mapを使った処理)
      userList1.map((data) => {
        const fullName = data.family_name + ' ' + data.first_name ;
        data['full_name'] = fullName ;
        });
        resolve(userList1);
    }, 3000);
  
  });
}

// [1,2,3].map(function( value ) {
 
//   console.log( value );

// });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => { 
//       console.log('hello');
//       resolve();
//   }, 500);
// });