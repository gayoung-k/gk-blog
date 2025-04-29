import { enCA } from 'date-fns/locale';
import { format } from 'date-fns';

export function formatDate(date: string | Date | undefined) {
  if (!date) return '';

  return format(new Date(date), 'PPP', { locale: enCA });
}
