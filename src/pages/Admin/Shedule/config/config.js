
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import resourcesTimeGridPlugin from '@fullcalendar/resource-timegrid';

export const eventFormat = 'YYYY-MM-DDTHH:mm:ss';
export const slotFormat = 'HH:mm:ss';

export const config = {
  expandRows: true,
  eventResizableFromStart: true,
  snapDuration: '00:20:00',
  slotLabelInterval: '01:00',
  slotDuration: '00:20:00',
  height: 650,
  allDaySlot: false,
  plugins: [timeGridPlugin, interactionPlugin, resourcesTimeGridPlugin],
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: ''
  },
  omitZeroMinute: false,
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekday: 'long',
  initialView: 'resourceTimeGridDay',
  nowIndicator: true
};

