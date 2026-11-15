import { PageContent } from '../../types';
import { content as queEsUf } from './que-es-la-uf-y-como-se-calcula';
import { content as comoCalcularFiniquito } from './como-calcular-el-finiquito';
import { content as anosServicio } from './indemnizacion-por-anos-de-servicio';
import { content as brutoALiquido } from './de-sueldo-bruto-a-liquido';
import { content as queEsUtm } from './que-es-la-utm';

export const CHILE_GUIDES: Record<string, PageContent> = {
  'que-es-la-uf-y-como-se-calcula': queEsUf,
  'como-calcular-el-finiquito': comoCalcularFiniquito,
  'indemnizacion-por-anos-de-servicio': anosServicio,
  'de-sueldo-bruto-a-liquido': brutoALiquido,
  'que-es-la-utm': queEsUtm,
};

export const CHILE_GUIDE_SLUGS = Object.keys(CHILE_GUIDES);
