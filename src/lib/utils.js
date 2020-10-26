module.exports = {
    date(timestamp) {
        const date = new Date(timestamp)

        const year = date.getFullYear()
        const month = `0${date.getMonth() + 1}`.slice(-2)
        const day = `0${date.getDate()}`.slice(-2)
        const hour = date.getHours()
        const minutes = date.getMinutes()

        return {
          day,
          month,
          year,
          hour,
          minutes,
          iso: `${year}-${month}-${day}`,
          birthDay: `${day}/${month}`,
          format: `${day}/${month}/${year}`
        }
    },
    formatPrice(price) {
      return value = new Intl.NumberFormat('pt-BR', {
        style: 'currency', 
        currency: 'BRL' 
      }).format(price/100) 
    },
    formatCpfCnpj(value) {
      value = value.replace(/\D/g,"") //limpar

      // limtar a 14 digitos
      if (value.length > 14)
          value = value.slice(0, -1)

      // check if is cnpj -  // 11.222.333/0001-11
      if (value.length > 11) {

          // entrou: 1122233344455
         
          // pegar 2 digitos seguidos
          value = value.replace(/(\d{2})(\d)/, "$1.$2") // saida: 11.22233344455

           // pegar 3 digitos seguidos
          value = value.replace(/(\d{3})(\d)/, "$1.$2") // saida: 11.222.33344455

          // pegar 3 digitos seguidos
          value = value.replace(/(\d{3})(\d)/, "$1/$2") // saida: 11.222.333/44455

          // pegar 4 digitos seguidos
          value = value.replace(/(\d{4})(\d)/, "$1-$2") // saida: 11.222.333/444-55

      } else {
          //cpf - 111.222.333-44
          
          // entrou: 1122233344455

          value = value.replace(/(\d{3})(\d)/, "$1.$2") // saida: 111.22233344
          value = value.replace(/(\d{3})(\d)/, "$1.$2") // saida: 111.222.33344
          value = value.replace(/(\d{3})(\d)/, "$1-$2") // saida: 111.222.333-44

      }
      
      return value

    },
    formatCep(value) {
      value = value.replace(/\D/g,"") //limpar
      
      // limtar a 8 digitos
      if (value.length > 8)
      value = value.slice(0, -1)

      value = value.replace(/(\d{5})(\d)/, "$1-$2") // saida: 11111-22

      return value

    }
  }