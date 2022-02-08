import './Select.css';

const Select = (props) => {
  return (
    <select className='select' onChange={props.onChange}>
      {props.items.map((item, index) => {
        if (index === 0) {
          return (
            <option key={item.name} value={item.value} hidden>
              {item.name}
            </option>
          );
        }
        return (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
