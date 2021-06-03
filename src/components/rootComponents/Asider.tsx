import React from "react";

interface AsideProps {
  itemList: string[];
}
const Asider = (props: AsideProps): React.ReactNode => {
  const lis = props.itemList.map((item) => <li>{item}</li>);
  return <ul>{lis}</ul>;
};

export default Asider;
