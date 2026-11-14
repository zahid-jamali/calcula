import { PageContent } from '../../types';
import { content as quandoCai13 } from './quando-cai-o-13-salario';
import { content as comoCalcularRescisao } from './como-calcular-rescisao-passo-a-passo';
import { content as direitosDemissaoSemJustaCausa } from './direitos-na-demissao-sem-justa-causa';
import { content as pedidoDemissao } from './pedido-de-demissao-quais-os-direitos';
import { content as avisoPrevio } from './aviso-previo-trabalhado-ou-indenizado';
import { content as acordoTrabalhista } from './acordo-trabalhista-como-funciona';
import { content as multa40Fgts } from './multa-de-40-do-fgts';
import { content as feriasEmDobro } from './ferias-vencidas-em-dobro';

export const BR_GUIDES_MAP: Record<string, PageContent> = {
  'quando-cai-o-13-salario': quandoCai13,
  'como-calcular-rescisao-passo-a-passo': comoCalcularRescisao,
  'direitos-na-demissao-sem-justa-causa': direitosDemissaoSemJustaCausa,
  'pedido-de-demissao-quais-os-direitos': pedidoDemissao,
  'aviso-previo-trabalhado-ou-indenizado': avisoPrevio,
  'acordo-trabalhista-como-funciona': acordoTrabalhista,
  'multa-de-40-do-fgts': multa40Fgts,
  'ferias-vencidas-em-dobro': feriasEmDobro,
};

export const BR_GUIDES_LIST = Object.entries(BR_GUIDES_MAP).map(([slug, content]) => ({
  slug,
  title: content.h1,
  description: content.metaDescription,
  path: `/br/guias/${slug}/`,
}));
