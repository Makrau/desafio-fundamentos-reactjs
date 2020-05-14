const formatValue = (value: number): string =>
  `R$ ${Intl.NumberFormat().format(value)},00`;

export default formatValue;
