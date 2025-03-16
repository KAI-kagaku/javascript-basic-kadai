//日付出力する関数を定義する
const getFormattedDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return `${year}年${month}月${day}日`;
};

console.log(getFormattedDate()); 