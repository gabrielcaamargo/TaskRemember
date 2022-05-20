import { HeaderWrapper } from './styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <div>
        <h2>Tuesday</h2>
        <p>9:00AM</p>
      </div>

      <div>
        <button type="button">Add task</button>
      </div>
    </HeaderWrapper>
  );
}
