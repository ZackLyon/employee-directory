export default (birthday) => {
  //date format 1980-04-25
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const birthdayArr = birthday.split('-');
  const birthdayMonth = months[Number(birthdayArr[1]) - 1];

  return `${birthdayMonth} ${birthdayArr[2]}, ${birthdayArr[0]}`;
};
