import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

export default [
  { path: '', component: Home, titulo: 'Home' },
  { path: '/cadastro', component: Cadastro, titulo: 'Cadastro' }
];