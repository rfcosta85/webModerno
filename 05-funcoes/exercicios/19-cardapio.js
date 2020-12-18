function menu(productCode, amount)
{

    let product = productCode
    let productName = ''
    let price = 0
    let total = 0

    switch(product)
    {

        case 100: 

            productName = 'Cachorro Quente'
            price = 3
            total = price * amount
            cartInformation = 'Produto: ' + productName + '\n' + 'Quantidade: ' + amount + '\n' + 'Total do pedido: ' + total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
            
            return cartInformation

        break

        case 200: 

            productName = 'Hambúrguer Simples'
            price = 4
            total = price * amount
            cartInformation = 'Produto: ' + productName + '\n' + 'Quantidade: ' + amount + '\n' + 'Total do pedido: ' + total.toLocaleString('pt-br', {style:   'currency', currency: 'BRL'})
        
            return cartInformation

        break
            
        case 300:

            productName = 'Cheeseburguer'
            price = 5.50
            total = price * amount
            cartInformation = 'Produto: ' + productName + '\n' + 'Quantidade: ' + amount + '\n' + 'Total do pedido: ' + total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
            
            return cartInformation

        break

        case 400: 

            productName = 'Bauru'
            price = 7.50
            total = price * amount
            cartInformation = 'Produto: ' + productName + '\n' + 'Quantidade: ' + amount + '\n' + 'Total do pedido: ' + total.toLocaleString('pt-br', {style:   'currency', currency: 'BRL'})

            return cartInformation

        break

        case 500: 

            productName = 'Refrigerante'
            price = 3.50
            total = price * amount
            cartInformation = 'Produto: ' + productName + '\n' + 'Quantidade: ' + amount + '\n' + 'Total do pedido: ' + total.toLocaleString('pt-br', {style:   'currency', currency: 'BRL'})

            return cartInformation

        break

        case 600: 

            productName = 'Suco'
            price = 2.80
            total = price * amount
            cartInformation = 'Produto: ' + productName + '\n' + 'Quantidade: ' + amount + '\n' + 'Total do pedido: ' + total.toLocaleString('pt-br', {style:   'currency', currency: 'BRL'})

            return cartInformation
    }

}

let salesTerminal = menu(600, 3)

console.log(salesTerminal)