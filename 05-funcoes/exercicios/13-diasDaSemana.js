function weekDays(day)
{

    let todayIs = day 

    switch(day)
    {

        case 1:

            return 'Hoje é domingo! Aproveite o restante do seu final de semana!'

            break

        case 2: 

            return 'Hoje é segunda feira! Tenha uma excelente semana!'

            break

        case 3:

            return 'Hoje é terça feira! Que tal um bate papo no almoço?'

            break

        case 4: 

            return 'Hoje é quarta feira! Dia de rodada da Libertadores, rola uma fugida ao bar?'

            break

        case 5: 

            return 'Hoje é quinta feira! Quase lá pessoal! Vamos nos poupar!'

            break

        case 6: 

            return 'Hoje é sexta feira!!!! O fim de semana está prestes a começar! Que tal um japonês a noite?'

            break

        case 7: 

            return 'Hoje é sábado pessoal! Que tal um churrasco e uma piscina? Bom final de semana a todos!'

            break

        default: 

            return 'Estamos em outra dimensão? Até onde eu sei só temos 7 dias em uma semana, nem zero nem mais!'

            break

    }

}

let isWeekendOrWorkday = weekDays(0)

console.log(isWeekendOrWorkday)