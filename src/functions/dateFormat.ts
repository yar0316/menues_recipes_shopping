import dayjs from "dayjs";
import 'dayjs/locale/ja'

export default class DateFormat {

    static readonly YYYY_MM_DD_dd: string = 'YYYY/MM/DD (dd)'
    static readonly MM_DD_dd: string = 'MM/DD (dd)'

    formatDate(date:Date, format: string) {
        switch (format) {
        case DateFormat.YYYY_MM_DD_dd:
            return dayjs(date)
                .locale('ja')
                .format('YYYY/MM/DD(dd)'); 
        case DateFormat.MM_DD_dd:
            return dayjs(date)
                .locale('ja')
                .format('YYYY/MM/DD(dd)'); 
        default:
            return '';
        }
    }
}