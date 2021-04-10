// Arquivos SASS

// A Partir daqui o webpack monitora nossos arquivos e consegue importa todos eles para gerar o arquivo css final 

// O index.js é o entry point, então é a partir dele que será achado o index.scss, o do bootstrap, font-a e o arquivo custom 

import './scss/index.scss'

// Importando as nossas Dependências

import 'jquery' // Importamos o jquery aqui pq o bootstrap depende dele para funcionar
import 'bootstrap'

// Meus arquivos JS

import './js/core/includes'

import './js/plugins/cityButtons'