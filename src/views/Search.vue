<template>
    <div>
        <div class="row">
            <div style="width:80%">
                <h1>НОВЫЙ ЗАПРОС</h1>
            </div>
            <div style="width:20%;text-align:right">
                <button @click="logOut" class="btn btn--orange">Выход</button>
            </div>
        </div>
        <div class="row">
            <div class="col col-filter">
                <div class="card">
                    <h2>Параметры объекта</h2>
                    <div class="styled-form">
                        <div class="styled-form__row">
                            <label class="left-label label">{{ parameters.fulladdress.label }}</label>
                            <div class="control">
                                <GmapAutocomplete
                                    class="styled-input"
                                    ref="autocomplete"
                                    @place_changed="setFullAddress"
                                    :select-first-on-enter="true"
                                ></GmapAutocomplete>
                                <p class="error-field" v-if="danger">Выберите адрес</p>
                            </div>
                        </div>
                        <div class="styled-form__row">
                            <label class="left-label label">{{ parameters.cadnumber.label }}</label>
                            <div class="control">
                                <input
                                    type="text"
                                    class="styled-input"
                                    v-model="inputParameters.cadnumber"
                                >
                            </div>
                        </div>
                        <hr>
                        <div class="styled-form__row">
                            <label class="left-label label">{{ parameters.buildingperiod.label }}</label>
                            <input
                                type="number"
                                class="styled-input w80"
                                v-model.number="inputParameters.buildingperiod"
                            >
                            <div class="control two-column-row__2">
                                <label class="label">{{ parameters.buildingtype.label }}</label>
                                <select class="styled-input" v-model="inputParameters.buildingtype">
                                    <option value="Не выбрано" disabled>Не выбрано</option>
                                    <option
                                        v-for="(val, index) in parameters.buildingtype.valueslist"
                                        :value="val"
                                        :key="index"
                                    >{{ val }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="styled-form__row">
                            <label class="left-label label">{{ parameters.totalarea.label }}</label>
                            <input
                                type="number"
                                step="0.1"
                                class="styled-input w80"
                                v-model.number="inputParameters.totalarea"
                            >
                            <div class="control two-column-row__2">
                                <label class="label">{{ parameters.repairraw.label }}</label>
                                <select class="styled-input" v-model="inputParameters.repairraw">
                                    <option value="Не выбрано" disabled>Не выбрано</option>
                                    <option
                                        v-for="(val, index) in parameters.repairraw.valueslist"
                                        :value="val"
                                        v-bind:key="index"
                                    >{{ val }}</option>
                                </select>
                            </div>
                        </div>
                        <hr>
                        <div class="styled-form__row">
                            <label class="left-label label">{{ parameters.livingspacearea.label }}</label>
                            <input
                                type="number"
                                step="0.1"
                                class="styled-input"
                                v-model.number="inputParameters.livingSpaceArea"
                            >
                            <div class="control two-column-row__2">
                                <label class="label">{{ parameters.kitchenarea.label }}</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    class="styled-input w80"
                                    v-model.number="inputParameters.kitchenArea"
                                >
                            </div>
                        </div>
                        <div class="styled-form__row">
                            <label class="left-label label">{{ parameters.storeysnum.label }}</label>
                            <input
                                type="number"
                                class="styled-input"
                                v-model.number="inputParameters.storeysnum"
                            >
                            <div class="control two-column-row__2">
                                <label class="label">{{ parameters.storey.label }}</label>
                                <input
                                    type="number"
                                    class="styled-input w80"
                                    v-model.number="inputParameters.storey"
                                >
                            </div>
                        </div>
                        <div class="styled-form__row">
                            <label class="left-label label">{{ parameters.roomsnum.label }}</label>
                            <input
                                type="number"
                                class="styled-input w80"
                                v-model.number="inputParameters.roomsnum"
                            >
                        </div>
                        <hr>
                        <div class="styled-form__row">
                            <label class="left-label label">{{ parameters.windowview.label }}</label>
                            <select class="styled-input" v-model="inputParameters.windowview">
                                <option value="Не выбрано" disabled>Не выбрано</option>
                                <option
                                    v-for="(val, index) in parameters.windowview.valueslist"
                                    :value="val"
                                    v-bind:key="index"
                                >{{ val }}</option>
                            </select>
                            <div class="control two-column-row__2">
                                <label class="label">{{ parameters.balconiesnum.label }}</label>
                                <input
                                    type="number"
                                    class="styled-input w80"
                                    v-model.number="inputParameters.balconiesnum"
                                >
                            </div>
                        </div>
                        <div class="styled-form__row">
                            <label class="left-label label">Стоимость</label>
                            <div class="control">
                                <input
                                    type="number"
                                    class="styled-input"
                                    v-model.number="inputParameters.pricefromreport"
                                >
                            </div>
                        </div>
                        <div class="styled-form__row">
                            <label class="left-label label">{{ parameters.countOfAnalogs.label }}</label>
                            <div class="control">
                                <div class="analog-list">
                                    <label v-for="(num, index) in numCountsOfAnalogs" :key="index">
                                        <input
                                            type="radio"
                                            :value="num"
                                            v-model="inputParameters.countOfAnalogs"
                                        >
                                        <span>{{ num }}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            class="btn btn--orange"
                            @click="getAnalogs"
                        >{{ (sendReq === true) ? "Загрузка.." : "Получить стоимость" }}</button>
                    </div>
                </div>
            </div>
            <div class="col col-map">
                <div class="card map-block">
                    <h2>Местоположение</h2>
                    <div class="map-block__map">
                        <gmap-map
                            :center="center"
                            :zoom="13"
                            style="width: 100%; height: 875px"
                            :options="mapStyle"
                        >
                            <gmap-info-window
                                :options="infoOptions"
                                :position="infoWindowPos"
                                :opened="infoWinOpen"
                                @closeclick="infoWinOpen=false"
                            >{{ infoContent }}</gmap-info-window>
                            <gmap-marker
                                v-for="(m, idx) in markers"
                                :key="idx"
                                :position="m.position"
                                :clickable="true"
                                @click="toggleInfoWindow(m, idx)"
                                :icon="m.url"
                            ></gmap-marker>
                        </gmap-map>
                        <div class="map-block__bottom">
                            <div class="address" v-if="inputParameters.fulladdress !== null">
                                <label>Адрес</label>
                                <input
                                    type="text"
                                    class="styled-input"
                                    disabled
                                    v-model="inputParameters.fulladdress"
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="obj">
            <div class="col col-1">
                <div class="card">
                    <analogsList :objects="obj"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import searchParameters from "../configs/searchParameters.json";
import analogsParamName from "../configs/analogsParamName.json";
import analogsList from "@/components/AnalogsList";
export default {
    components: {
        analogsList
    },
    data() {
        return {
            url: analogsParamName.url,
            parameters: searchParameters,
            center: {
                lat: 55.7404042,
                lng: 37.5967961
            },
            numCountsOfAnalogs: [1, 2, 3, 5, 10, 20, 50, 100],
            mapStyle: {
                styles: [
                    {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
                    },
                    {
                        featureType: "landscape.man_made",
                        elementType: "geometry.stroke",
                        stylers: [{ color: "#A9A9A9" }, { lightness: 20 }]
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{ color: "#ffffff" }, { lightness: 17 }]
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [
                            { color: "#ffffff" },
                            { lightness: 29 },
                            { weight: 0.2 }
                        ]
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{ color: "#ffffff" }, { lightness: 18 }]
                    },
                    {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{ color: "#ffffff" }, { lightness: 16 }]
                    },
                    {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{ color: "#f5f5f5" }, { lightness: 21 }]
                    },
                    {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{ color: "#dedede" }, { lightness: 21 }]
                    },
                    {
                        elementType: "labels.text.stroke",
                        stylers: [
                            { visibility: "on" },
                            { color: "#ffffff" },
                            { lightness: 16 }
                        ]
                    },
                    {
                        elementType: "labels.text.fill",
                        stylers: [
                            { saturation: 36 },
                            { color: "#333333" },
                            { lightness: 40 }
                        ]
                    },
                    {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{ color: "#606060" }, { lightness: 19 }]
                    },
                    {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{ color: "#fefefe" }, { lightness: 20 }]
                    },
                    {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [
                            { color: "#fefefe" },
                            { lightness: 17 },
                            { weight: 1.2 }
                        ]
                    }
                ]
            },
            infoContent: "",
            infoWindowPos: null,
            infoWinOpen: false,
            currentMidx: null,
            infoOptions: {
                pixelOffset: {
                    width: 0,
                    height: -35
                },
                maxWidth: 330
            },
            inputParameters: {
                fulladdress: null,
                cadnumber: "",
                buildingperiod: null,
                buildingtype: "кирпич",
                totalarea: null,
                repairraw: "Стандарт",
                livingSpaceArea: null,
                kitchenArea: null,
                storeysnum: null,
                storey: null,
                roomsnum: null,
                windowview: "Во двор",
                balconiesnum: null,
                pricefromreport: null,
                countOfAnalogs: null
            },
            markers: [],
            danger: false,
            obj: false,
            sendReq: false
        };
    },
    mounted() {
        if (this.$route.params.data) {
            this.inputParameters.balconiesnum = this.$route.params.data.balconiesnum;
            this.inputParameters.buildingperiod = this.$route.params.data.buildingperiod;
            this.inputParameters.buildingtype = this.$route.params.data.buildingtype;
            this.inputParameters.cadnumber = this.$route.params.data.cadnumber;
            this.inputParameters.countOfAnalogs = this.$route.params.data.countOfAnalogs;
            this.$refs["autocomplete"].$el.value = this.$route.params.data.fulladdress;
            this.inputParameters.repairraw = this.$route.params.data.repairraw;
            this.inputParameters.storey = this.$route.params.data.storey;
            this.inputParameters.storeysnum = this.$route.params.data.storeysnum;
            this.inputParameters.totalarea = this.$route.params.data.totalarea;
            this.inputParameters.windowview = this.$route.params.data.windowview;
            this.obj = this.$route.params.data;
            this.center.lat = this.$route.params.data.analogs[0].Lat;
            this.center.lng = this.$route.params.data.analogs[0].Lon;
            this.setAnalogs();
        }
    },
    methods: {
        toggleInfoWindow(marker, idx) {
            this.infoWindowPos = marker.position;
            this.infoContent = marker.infoText;
            if (this.currentMidx == idx) {
                this.infoWinOpen = !this.infoWinOpen;
            } else {
                this.infoWinOpen = true;
                this.currentMidx = idx;
            }
        },
        setFullAddress(place) {
            this.markers = [];
            this.obj = false;
            let data = {
                token: localStorage.getItem("token"),
                address: place.formatted_address
            };
            fetch(this.parameters.urlautocomplete, {
                method: "POST",
                headers: {
                    "Content-type":
                        "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (response.status !== 200) {
                        return;
                    }
                    response.json().then(data => {
                        this.inputParameters.cadnumber = data.cadnumber || "";
                        this.inputParameters.buildingperiod =
                            data.buildingperiod || 2009;
                        this.inputParameters.buildingtype =
                            data.buildingtype || "кирпич";
                        this.inputParameters.totalarea = data.totalarea || 50;
                        this.inputParameters.repairraw =
                            data.repairraw || "Стандарт";
                        this.inputParameters.livingSpaceArea =
                            data.livingSpaceArea || 49;
                        this.inputParameters.kitchenArea =
                            data.kitchenArea || 10;
                        this.inputParameters.storeysnum = data.storeysnum || 5;
                        this.inputParameters.storey = data.storey || 3;
                        this.inputParameters.roomsnum = data.roomsnum || 3;
                        this.inputParameters.windowview =
                            data.windowview || "Во двор";
                        this.inputParameters.balconiesnum =
                            data.balconiesnum || 1;
                        this.inputParameters.pricefromreport =
                            data.pricefromreport || null;
                        this.inputParameters.countOfAnalogs =
                            data.countOfAnalogs || 5;
                    });
                })
                .catch(err => {
                    return err;
                });
            this.inputParameters.fulladdress = place.formatted_address;
            this.markers.push({
                position: {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                },
                infoText: place.formatted_address,
                address: place.formatted_address,
                url: require("./../assets/img/red_point.png")
            });
            this.center = {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            };
        },
        getAnalogs() {
            if (this.markers.length === 0) {
                this.danger = true;
                return;
			}
			this.markers.length = 1;
            let data = this.inputParameters;
            data.token = localStorage.getItem("token");
            this.sendReq = true;
            this.danger = false;
            fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-type":
                        "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (response.status !== 200) {
                        return;
                    }
                    response.json().then(data => {
                        this.obj = data;
                        this.setAnalogs();
                        this.sendReq = false;
                    });
                })
                .catch(err => {
                    return err;
                });
        },
        setAnalogs() {
            this.obj.analogs.forEach(place => {
                this.markers.push({
                    name: place.RawAddress,
                    position: {
                        lat: place.Lat,
                        lng: place.Lon
                    },
                    infoText: place.RawAddress,
                    url: require("./../assets/img/yellow_point.png")
                });
            });
        },
        logOut() {
            localStorage.removeItem("token");
            this.$emit("trueAuth", false);
            this.$router.push("/");
        },
        reqForServer(data) {
            fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-type":
                        "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (response.status !== 200) {
                        return;
                    }
                    response.json().then(data => {
                        return data;
                    });
                })
                .catch(err => {
                    return err;
                });
        }
    }
};
</script>

<style lang="scss">
.main-title {
    padding: 30px 0 0 20px;
    h1 {
        font-size: 14px;
        line-height: 18px;
        font-weight: 700;
    }
}
.error-field {
    margin: 0;
}
.control {
    width: 100%;
    display: flex;
    position: relative;

    .analog-list {
        display: flex;
        background: #888;
        width: 100%;
        border-radius: 37px;
        overflow: hidden;
        justify-content: space-around;

        label {
            margin: 0;
            width: 100%;

            span {
                cursor: pointer;
                height: 37px;
                width: 100%;
                line-height: 37px;
                color: #fff;
                font-weight: 300;
                text-align: center;
                padding: 0 10px;
                white-space: nowrap;
                display: block;
            }

            &:hover {
                background: #b9b9b9;
            }

            input {
                display: none;
            }

            input:checked + span {
                background: #b9b9b9;
            }
        }
    }
}
</style>
