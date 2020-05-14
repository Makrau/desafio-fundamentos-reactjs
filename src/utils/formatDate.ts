const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'America/Sao_Paulo',
  };

  return new Intl.DateTimeFormat('pt-BR', options).format(date);
};

export default formatDate;
