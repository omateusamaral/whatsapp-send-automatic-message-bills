var today = new Date();
var date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
const WATER_BILL = [
  {
    messageFiveDaysBeforeDueDate: `
    Conta de Ã¡gua para pagar ð

    Daqui 5 dias â±ï¸
    
    data de vencimento - dia 25 ðï¸

    Hoje Ã©: ${date}
    `,

    messageDueDate: `
    Conta de Ã¡gua para pagar ð

    Daqui 0 dias â±ï¸

    data de vencimento - dia 25 ðï¸

    Hoje Ã©: ${date}
    `,
  },

  
];

const INTERNET_BILL = [
  {
    messageFiveDaysBeforeDueDate: `
    Conta de internet para pagar ð»

    Daqui 5 dias â±ï¸
    
    data de vencimento - dia 25 ðï¸

    Hoje Ã©: ${date}
    `,
    
    messageDueDate: `
    Conta de internet para pagar ð»

    Daqui 0 dias â±ï¸

    data de vencimento - dia 25 ðï¸

    Hoje Ã©: ${date}
    `,
  },

   
];

const ELECTRICITY_BILL = [
  {
    messageFiveDaysBeforeDueDate: `
    Conta de LUZ para pagar ð¡

    Daqui 5 dias â±ï¸
    
    data de vencimento - dia 20 ðï¸

    Hoje Ã©: ${date}
    `,

    messageDueDate: `
    Conta de LUZ para pagar ð¡

    Daqui 0 dias â±ï¸

    data de vencimento - dia 20 ðï¸

    Hoje Ã©: ${date}
    `,
  },

  
];

module.exports = {
  ELECTRICITY_BILL,
  INTERNET_BILL,
  WATER_BILL,
};
