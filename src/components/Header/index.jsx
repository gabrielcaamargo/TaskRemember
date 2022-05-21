import { HeaderWrapper } from './styles';

export default function Header() {
  const date = new Date();
  const weekDay = date.getDay();
  let getWeekDay;
  switch (weekDay) {
    case 0:
      getWeekDay = 'Sunday';
      break;
    case 1:
      getWeekDay = 'Monday';
      break;
    case 2:
      getWeekDay = 'Tuesday';
      break;
    case 3:
      getWeekDay = 'Wednesday';
      break;
    case 4:
      getWeekDay = 'Thursday';
      break;
    case 5:
      getWeekDay = 'Friday';
      break;
    case 6:
      getWeekDay = 'Saturday';
      break;

    default:
      getWeekDay = 'Unable to get day';
      break;
  }

  return (

    <HeaderWrapper>
      <div>
        <h2>{getWeekDay}</h2>
      </div>

      <div>
        <button type="button">Add task</button>
      </div>
    </HeaderWrapper>
  );
}
