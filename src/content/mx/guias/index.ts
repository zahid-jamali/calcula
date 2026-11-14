import { PageContent } from '../../types';
import { content as diferencia } from './diferencia-entre-finiquito-y-liquidacion';
import { content as aguinaldo } from './cuando-se-paga-el-aguinaldo';
import { content as vacaciones } from './vacaciones-dignas-como-funcionan';
import { content as primaAntiguedad } from './que-es-la-prima-de-antiguedad';
import { content as renuncia } from './cuanto-me-toca-si-renuncio';
import { content as despido } from './despido-injustificado-que-hacer';

export const MX_GUIDES_MAP: Record<string, PageContent> = {
  'diferencia-entre-finiquito-y-liquidacion': diferencia,
  'cuando-se-paga-el-aguinaldo': aguinaldo,
  'vacaciones-dignas-como-funcionan': vacaciones,
  'que-es-la-prima-de-antiguedad': primaAntiguedad,
  'cuanto-me-toca-si-renuncio': renuncia,
  'despido-injustificado-que-hacer': despido,
};

export const MX_GUIDES_LIST = Object.entries(MX_GUIDES_MAP).map(([slug, content]) => ({
  slug,
  title: content.h1,
  description: content.metaDescription,
  path: `/mx/guias/${slug}/`,
}));
