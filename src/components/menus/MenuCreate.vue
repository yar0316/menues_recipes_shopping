<template>
    <v-container>
        <v-row>
            <v-col
                cols="2"
            >
                <h2>{{ date }} の献立</h2>
            </v-col>
            <v-col>
                <v-btn>変更</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <!-- 朝食 -->
            <v-col>
                <v-text-field
                    v-model="breakfastDish"
                    clearable
                    type="text"
                    @keyup.enter="addDish(0)"
                ></v-text-field>
                <v-list>
                    <v-list-item
                        v-for="dish in menu.breakfast"
                    >{{ dish.name }}</v-list-item>
                </v-list>
            </v-col>
            <!-- 昼食 -->
            <v-col>
                <v-text-field
                    v-model="lunchDish"
                    clearable
                    type="text"
                    @keyup.enter="addDish(1)"
                ></v-text-field>
                <v-list>
                    <v-list-item
                        v-for="dish in menu.lunch"
                    >{{ dish.name }}</v-list-item>
                </v-list>
            </v-col>
            <!-- 夕食 -->
            <v-col>
                <v-text-field
                    v-model="dinnerDish"
                    clearable
                    type="text"
                    @keyup.enter="addDish(2)"
                ></v-text-field>
                <v-list>
                    <v-list-item
                        v-for="dish in menu.dinner"
                    >{{ dish.name }}</v-list-item>
                </v-list>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn color="primary" to="/menumanagement">完了</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import dayjs from "dayjs"
import 'dayjs/locale/ja'

export default defineComponent({
    name: 'MenuCreate',
    data () {
        return {
            date: dayjs().locale('ja').format('MM/DD (dd)'),
            menu: {
                breakfast: [],
                lunch: [],
                dinner: []
            },
            breakfastDish: '',
            lunchDish: '',
            dinnerDish: ''
        }
    },
    methods: {
        // 後程DynamoDBのスキーマに合わせて実装変更
        addDish(type: number) {
            console.log('追加')
            switch (type) {
                case 0:
                    this.menu.breakfast.push({
                        name: this.breakfastDish
                    })
                    this.breakfastDish = ''
                    console.log(this.menu.breakfast)
                    break;
                case 1:
                    this.menu.lunch.push({
                        name: this.lunchDish
                    })
                    this.lunchDish = ''
                    console.log(this.menu.lunch)
                    break;
                case 2:
                    this.menu.dinner.push({
                        name: this.dinnerDish
                    })
                    this.dinnerDish = ''
                    console.log(this.menu.dinner)
                default:
                    break;
            }

        }
    }
})
</script>