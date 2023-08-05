export const getDate = () => {
  const today: Date = new Date();
  function fillZero(str: string) {
    return str.length >= 2
      ? str
      : new Array(2 - str.length + 1).join("0") + str;
  }
  const todayDate =
    fillZero((today.getMonth() + 1).toString()) +
    fillZero(today.getDate().toString());
  return todayDate;
};
