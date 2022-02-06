import './Select.css';

const Select = (props) => {
  return (
    <select className='select' defaultValue={props.defaultValue}>
      {props.items.map((item, index) => {
        if (index === 0) {
          return (
            <option key={item.value} value={item.value} hidden>
              {item.value}
            </option>
          );
        }
        return (
          <option key={item.value} value={item.value}>
            {item.value}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
