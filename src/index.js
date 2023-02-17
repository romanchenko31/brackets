module.exports = function check(str, bracketsConfig) {
  str = str.split("");
  return del(str, bracketsConfig);

  function del(str, bracketsConfig) {
    // console.log("Оригинальный массив", str);
    str.map((v, i) => {
      // console.log("Скобка для проверки", v, "Ее Индекс", i);
      bracketsConfig.map((value, index) => {
        // console.log("ARRAY FILTER ", value);
        if (value.includes(v)) {
          // console.log("Фильтр Включает в себя скобку", value);
          let arr = [];
          arr.push(v);
          arr.push(str[i + 1]);
          // console.log("Наш новый проверочный массив", arr);
          // console.log(
          //   "Вторая скобка ФИЛЬТРА",
          //   value[1],
          //   "Вторая скобка собранного массива",
          //   arr[1]
          // );
          if (value[1] === arr[1]) {
            str.splice(i, 2);
            // console.log("с Удаленными скобками", str);
            del(str, bracketsConfig);
          }
        }
      });
    });
    return str.length === 0;
  }
};
