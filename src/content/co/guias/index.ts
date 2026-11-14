import { PageContent } from '../../types';
import { content as prima } from './cuando-se-paga-la-prima';
import { content as cesantias } from './cesantias-cuando-y-como-retirarlas';
import { content as indemnizacion } from './indemnizacion-por-despido-sin-justa-causa';
import { content as terminoFijo } from './como-liquidar-un-contrato-a-termino-fijo';
import { content as recargos } from './recargos-nocturnos-y-dominicales';

export const CO_GUIDES_MAP: Record<string, PageContent> = {
  'cuando-se-paga-la-prima': prima,
  'cesantias-cuando-y-como-retirarlas': cesantias,
  'indemnizacion-por-despido-sin-justa-causa': indemnizacion,
  'como-liquidar-un-contrato-a-termino-fijo': terminoFijo,
  'recargos-nocturnos-y-dominicales': recargos,
};

export const CO_GUIDES_LIST = Object.entries(CO_GUIDES_MAP).map(([slug, content]) => ({
  slug,
  title: content.h1,
  description: content.metaDescription,
  path: `/co/guias/${slug}/`,
}));
