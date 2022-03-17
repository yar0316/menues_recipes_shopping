<template>
    <v-container>
        <v-row>
            <v-col>
                <h2>{{ getDate(YYYY_MM_DD_dd) }}から7日分の献立</h2>
            </v-col>
        </v-row>
        <v-row
            no-gutters
        >
            <v-col
                v-for="n in 7"
                :key="n"
            >
                <v-card
                    outlined
                    tile
                >
                    <v-card-header>
                        <v-card-header-text>
                            <v-card-title>{{ getDate(MM_DD_dd, n-1) }}</v-card-title>
                        </v-card-header-text>
                    </v-card-header>
                    <v-list>
                        <v-list-item
                            v-for="n in 5"
                        >item{{n}}</v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { reactive, ref, defineComponent } from 'vue'
import dayjs from "dayjs"
import 'dayjs/locale/ja'

export default defineComponent({
    name: 'MenuManagement',

    setup () {

        const YYYY_MM_DD_dd: string = 'YYYY/MM/DD (dd)'
        const MM_DD_dd: string = 'MM/DD (dd)'
        const referenceDate: dayjs.Dayjs = dayjs().locale('ja')
        const weekOffset = reactive(ref(1))

        return {
            YYYY_MM_DD_dd,
            MM_DD_dd,
            referenceDate,
            weekOffset
        }

    },

    methods: {
        getDate(format: string, offset: number = 0) {
            if (offset > 0) {
                return this.referenceDate.add(offset, 'day').format(format)
            } else if (offset < 0) {
                return this.referenceDate.subtract(Math.abs(offset), 'day').format(format)
            } else
                return this.referenceDate.format(format)
        }
    }
})
</script>