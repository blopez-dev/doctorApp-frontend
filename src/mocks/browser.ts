import { setupWorker } from 'msw/browser';
import { doctorsHandlers, patientsHandlers, roomsHandlers, appointmentsHandlers, healthHandlers } from './handlers';

export const worker = setupWorker(
  ...doctorsHandlers,
  ...patientsHandlers,
  ...roomsHandlers,
  ...appointmentsHandlers,
  ...healthHandlers
);