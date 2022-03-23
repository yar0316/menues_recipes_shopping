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
                            <v-card-title>{{ menus[n-1].date }}</v-card-title>
                        </v-card-header-text>
                    </v-card-header>
                    
                    <v-divider></v-divider>
                    
                    <v-list>
                        <v-list-group>
                            <template v-slot:activator="{ props }">
                                <v-list-item v-bind="props" title="朝食" value="朝食"></v-list-item>
                            </template>

                            <v-list-item
                                v-for="breakfast in menus[n-1].breakfast"
                                :title="breakfast.name"
                                :value="breakfast.id"
                            ></v-list-item>
                        </v-list-group>

                        <v-list-group>
                            <template v-slot:activator="{ props }">
                                <v-list-item v-bind="props" title="昼食" value="lunch"></v-list-item>
                            </template>

                            <v-list-item
                                v-for="lunch in menus[n-1].lunch"
                                :title="lunch.name"
                                :value="lunch.id"
                            ></v-list-item>
                        </v-list-group>

                        <v-list-group>
                            <template v-slot:activator="{ props }">
                                <v-list-item v-bind="props" title="夕食" value="dinner"></v-list-item>
                            </template>

                            <v-list-item
                                v-for="dinner in menus[n-1].dinner"
                                :title="dinner.name"
                                :value="dinner.id"
                            ></v-list-item>
                        </v-list-group>
                    </v-list>
                    
                    <v-card-actions class="justify-end">
                        <v-btn
                            rounded
                            text
                            icon="mdi-plus"
                            color="primary"
                            to="/menucreate"
                        ></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import dayjs from "dayjs"
import 'dayjs/locale/ja'

export default defineComponent({
    name: 'MenuManagement',

    setup () {

        const YYYY_MM_DD_dd: string = 'YYYY/MM/DD (dd)'
        const MM_DD_dd: string = 'MM/DD (dd)'
        const referenceDate: dayjs.Dayjs = dayjs().locale('ja')

        return {
            YYYY_MM_DD_dd,
            MM_DD_dd,
            referenceDate,
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
    },

    data () {
        return {
            dialog: false,
            tab: null,
            types:[
                {
                    label: "朝食",
                    value: "breakfast"
                },
                {
                    label: "昼食",
                    value: "lunch"
                },
                {
                    label: "夕食",
                    value: "dinner"
                }
            ],
            menus: [
                {
                    date: '3/19(金)',
                    breakfast: [
                        {
                            id: 0,
                            name: "目玉焼き",
                            recipe_id: 0
                        },
                        {
                            id: 1,
                            name: "トースト"
                        }
                    ],
                    lunch: [
                        {
                            id: 2,
                            name: "カルボナーラ",
                            recipe_id: 1
                        }
                    ],
                    dinner: [
                        {
                            id: 3,
                            name: "生姜焼き",
                            recipe_id: 2
                        },
                        {
                            id: 4,
                            name: "ごはん"
                        }
                    ]
                },
                {
                    date: '2022/3/29',
                    breakfast: [
                        {
                            id: 0,
                            name: "目玉焼き",
                            recipe_id: 0
                        },
                        {
                            id: 1,
                            name: "トースト"
                        }
                    ],
                    lunch: [
                        {
                            id: 2,
                            name: "カルボナーラ",
                            recipe_id: 1
                        }
                    ],
                    dinner: [
                        {
                            id: 3,
                            name: "生姜焼き",
                            recipe_id: 2
                        },
                        {
                            id: 4,
                            name: "ごはん"
                        }
                    ]
                },
                {
                    date: '2022/3/29',
                    breakfast: [
                        {
                            id: 0,
                            name: "目玉焼き",
                            recipe_id: 0
                        },
                        {
                            id: 1,
                            name: "トースト"
                        }
                    ],
                    lunch: [
                        {
                            id: 2,
                            name: "カルボナーラ",
                            recipe_id: 1
                        }
                    ],
                    dinner: [
                        {
                            id: 3,
                            name: "生姜焼き",
                            recipe_id: 2
                        },
                        {
                            id: 4,
                            name: "ごはん"
                        }
                    ]
                },
                {
                    date: '2022/3/29',
                    breakfast: [
                        {
                            id: 0,
                            name: "目玉焼き",
                            recipe_id: 0
                        },
                        {
                            id: 1,
                            name: "トースト"
                        }
                    ],
                    lunch: [
                        {
                            id: 2,
                            name: "カルボナーラ",
                            recipe_id: 1
                        }
                    ],
                    dinner: [
                        {
                            id: 3,
                            name: "生姜焼き",
                            recipe_id: 2
                        },
                        {
                            id: 4,
                            name: "ごはん"
                        }
                    ]
                },
                {
                    date: '2022/3/29',
                    breakfast: [
                        {
                            id: 0,
                            name: "目玉焼き",
                            recipe_id: 0
                        },
                        {
                            id: 1,
                            name: "トースト"
                        }
                    ],
                    lunch: [
                        {
                            id: 2,
                            name: "カルボナーラ",
                            recipe_id: 1
                        }
                    ],
                    dinner: [
                        {
                            id: 3,
                            name: "生姜焼き",
                            recipe_id: 2
                        },
                        {
                            id: 4,
                            name: "ごはん"
                        }
                    ]
                },
                {
                    date: '2022/3/29',
                    breakfast: [
                        {
                            id: 0,
                            name: "目玉焼き",
                            recipe_id: 0
                        },
                        {
                            id: 1,
                            name: "トースト"
                        }
                    ],
                    lunch: [
                        {
                            id: 2,
                            name: "カルボナーラ",
                            recipe_id: 1
                        }
                    ],
                    dinner: [
                        {
                            id: 3,
                            name: "生姜焼き",
                            recipe_id: 2
                        },
                        {
                            id: 4,
                            name: "ごはん"
                        }
                    ]
                },
                {
                    date: '2022/3/29',
                    breakfast: [
                        {
                            id: 0,
                            name: "目玉焼き",
                            recipe_id: 0
                        },
                        {
                            id: 1,
                            name: "トースト"
                        }
                    ],
                    lunch: [
                        {
                            id: 2,
                            name: "カルボナーラ",
                            recipe_id: 1
                        }
                    ],
                    dinner: [
                        {
                            id: 3,
                            name: "生姜焼き",
                            recipe_id: 2
                        },
                        {
                            id: 4,
                            name: "ごはん"
                        }
                    ]
                }
            ]
        }
    }
})
</script>