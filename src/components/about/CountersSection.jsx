import { COUNTER_ROWS } from '../../data/about';
import CounterRow from './CounterRow';

export default function CountersSection() {
  return (
    <>
      {COUNTER_ROWS.map(row => (
        <CounterRow key={row.sectionId} row={row} />
      ))}
    </>
  );
}
