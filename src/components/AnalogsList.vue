<template>
    <div>
        <div>
            <b-modal ref="myModalRef" hide-footer>
                <div class="d-block text-center">
                    <img :src="pathToImage">
                </div>
            </b-modal>
        </div>
        <div class="analogs-title">
            <h2 v-if="objects.TotalPrice">Стоимость: {{ transformNum(objects.TotalPrice) }} р.</h2>
            <h2 v-if="objects.avrgPricePerMetrWithCorrection">
                Цена объекта с корректировкой за кв.м.: {{
                transformNum(objects.avrgPricePerMetrWithCorrection) }} р.
            </h2>
            <h2
                v-if="objects.CorrectionTotalPrice"
            >Цена объекта с корректировкой: {{ transformNum(objects.CorrectionTotalPrice) }} р.</h2>
        </div>
        <div class="analogs-title">
            <h2
                v-if="objects.cadastr_price"
            >Кадастровая стоимость объекта: {{ transformNum(objects.cadastr_price) }}</h2>
            <h2>Отклонение от кадастровой стоимости: {{ transformNum(objects.cadastr_diverge) }}%</h2>
            <h2>Отклонение от стоимости в отчете: {{ transformNum(objects.report_diverge) }}%</h2>
        </div>
        <div class="table-scroll">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th
                            v-for="(name, index) in paramName"
                            :key="index"
                            class="cursor"
                            placement="top"
                            show-delay="500"
                            v-tooltip="name.title || name.alt"
                        >
                            <div v-if="name.title">{{ name.title }}</div>
                            <img v-if="!name.title" :src="itemUrl(name.img)" :alt="name.alt">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(analog, index) in objects.analogs" :key="index">
                        <td class="text-center align-middle">
                            <label class="styled-checkbox styled-checkbox--without-label">
                                <input type="checkbox" checked>
                                <span class="checkmark"></span>
                            </label>
                        </td>
                        <td class="address">
                            {{ analog.RawAddress }}
                            <div class="icons-link">
                                <div>
                                    <img
                                        src="./../assets/img/icons/image.svg"
                                        @click="showModal(analog.ScreenshotFilePath)"
                                        alt="Скриншот объявления аналога"
                                    >
                                </div>
                                <a target="_blank" :href="analog.Url">
                                    <img
                                        src="./../assets/img/icons/link.svg"
                                        alt="Сайт с объявлением"
                                    >
                                </a>
                            </div>
                        </td>
                        <td>{{ analog.TotalArea }}</td>
                        <td>{{ analog.RoomsNum }}</td>
                        <td>{{ analog.Storey }}</td>
                        <td>{{ analog.StoreysNum }}</td>
                        <td>{{ analog.BuildingType }}</td>
                        <td>{{ analog.RepairRaw }}</td>
                        <td>{{ analog.LivingSpaceArea }}</td>
                        <td>{{ analog.KitchenArea }}</td>
                        <td>{{ transformNum(analog.SubwayTime) }} мин.</td>
                        <td>{{ analog.modified_at }}</td>
                        <td>{{ analog.WindowView }}</td>
                        <td>{{ analog.BalconiesNum }}</td>
                        <td>{{ transformNum(analog.Price) }}</td>
                        <td>{{ transformNum(analog.PricePerMetr) }}</td>
                        <td>{{ transformNum(analog.CorrectionPricePerMetr) }}</td>
                        <td>{{ transformCorrectionNum(analog.correction.SalesKoef) }}</td>
                        <td>{{ transformCorrectionNum(analog.correction.StoreyKoef) }}</td>
                        <td>{{ transformCorrectionNum(analog.correction.BuildingTypeKoef) }}</td>
                        <td>{{ transformCorrectionNum(analog.correction.TotalAreaKoef) }}</td>
                        <td>{{ transformCorrectionNum(analog.correction.RepairRawKoef) }}</td>
                        <td>{{ transformCorrectionNum(analog.correction.SubwayTimeKoef) }}</td>
                        <td>{{ transformCorrectionNum(analog.correction.WindowViewKoef) }}</td>
                        <td>{{ transformCorrectionNum(analog.correction.BalconiesNumKoef) }}</td>
                        <td>{{ transformCorrectionNum(analog.correction.finalCorrectionKoef) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="coefficient-list">
            <div class="item">
                <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.35 17.454H8.8v2.182a.36.36 0 0 0 .099.261c.065.069.15.103.251.103h1.827a.339.339 0 0 0 .246-.103.35.35 0 0 0 .104-.26v-2.183h5.523a.334.334 0 0 0 .252-.102.36.36 0 0 0 .098-.261v-1.455a.36.36 0 0 0-.098-.26.334.334 0 0 0-.252-.103h-5.524v-1.341h3.72c1.457 0 2.648-.462 3.57-1.387.923-.923 1.384-2.117 1.384-3.58 0-1.46-.461-2.654-1.384-3.579C17.694 4.463 16.503 4 15.046 4H9.15a.335.335 0 0 0-.252.102.363.363 0 0 0-.098.262v7.147H6.35a.325.325 0 0 0-.252.108.367.367 0 0 0-.098.256v1.693c0 .106.033.193.098.261.066.069.15.103.252.103H8.8v1.34H6.35a.334.334 0 0 0-.252.103.361.361 0 0 0-.098.261v1.455c0 .106.033.193.098.261.066.069.15.102.252.102zm4.976-11.033h3.5c.773 0 1.397.234 1.87.704.475.47.712 1.084.712 1.841 0 .758-.237 1.372-.711 1.84-.474.47-1.098.706-1.87.706h-3.5V6.42z"
                        fill="#000"
                        fill-rule="nonzero"
                    ></path>
                </svg>
                Поправка на торг
            </div>
            <div class="item">
                <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14 7V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-8zM8 19H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V9h2v2zm0-4H6V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm9 12h-7v-2h2v-2h-2v-2h2v-2h-2V9h7c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1zm-1-8h-2v2h2v-2zm0 4v2h-2v-2h2zM1.895 11.179l1.282 2.146c.23.37.072 1.014-.25 1.014H2.36v6.082c0 .656-1.542.656-1.542 0V14.34H.362c-.323 0-.48-.644-.258-1.025l1.282-2.135c.143-.239.365-.239.509 0z"
                        fill="#000"
                        fill-rule="nonzero"
                    ></path>
                </svg>
                Поправка на этаж
            </div>
            <div class="item">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22.358">
                    <path
                        d="M3.47 5.911h9.122v4.626H3.47zm3.918-1.349V0H0v4.626h7.382c-.007 0 .006-.045.006-.064zm0 7.318c0-.02-.006-.058-.006-.058H0v4.625h7.388V11.88zm10.408 4.567V11.88a.228.228 0 0 1 .026-.057H8.66a.168.168 0 0 1 .013.057v4.568h9.123zm0-11.885V0H8.673v4.562c0 .02-.006.045-.013.064h9.162c-.013-.02-.026-.038-.026-.064zM0 5.911h2.184v4.626H0zm13.877 0H23v4.626h-9.123zm5.204 5.969v4.567H23v-4.625h-3.9l-.019.057zM0 17.732h2.184v4.626H0zM19.081 0v4.562c.006.02.013.045.02.064H23V0h-3.919zM3.47 17.732h9.122v4.626H3.47zm10.407 0H23v4.626h-9.123z"
                    ></path>
                </svg>
                Поправка на материал стен
            </div>
            <div class="item">
                <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.895 3.179c-.144-.239-.366-.239-.509 0L1.104 5.314c-.222.381-.065 1.025.258 1.025h.456v6.082c0 .656 1.542.656 1.542 0V6.34h.566c.323 0 .48-.644.251-1.014L2.895 3.18zm20.954 17.42c.239-.143.239-.365 0-.508l-2.135-1.282c-.381-.223-1.025-.065-1.025.257v.566h-6.082c-.656 0-.656 1.535 0 1.535h6.082v.464c0 .323.644.48 1.013.251L23.85 20.6zM18.25 7.13H3.464c-.903 0-1.643.703-1.643 1.56v10.924c0 .858.74 1.56 1.643 1.56H18.25c.904 0 1.643-.702 1.643-1.56V8.69c0-.858-.74-1.56-1.643-1.56zm-.821 12.484H4.286c-.452 0-.822-.352-.822-.78V9.47c0-.43.37-.78.822-.78h7.393v2.34c0 .43.37.78.821.78h5.75v7.022c0 .43-.37.78-.821.78z"
                        fill="#000"
                        fill-rule="nonzero"
                    ></path>
                </svg>
                Поправка на общую площадь
            </div>
            <div class="item">
                <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.757 3.045c-.269.072-.627.424-.7.689-.077.295-.077 4.508.006 4.747.088.274.238.45.471.58.208.109.296.114 1.695.14 1.052.02 1.508.047 1.59.093a.542.542 0 0 1 .275.477c0 .186-.668 4.353-.803 4.99-.119.565-.254.726-.824.99-.544.254-.705.42-.746.788l-.026.228H7.37c3.7 0 4.67-.016 4.67-.067 0-.177-.125-.472-.265-.633-.181-.207-.295-.243-1.72-.57-.912-.207-1.005-.238-1.135-.383-.187-.207-.187-.27.015-1.498l.166-.995h.4c.595 0 .58.026.777-1.217.088-.57.176-1.089.191-1.15.016-.068-.015-.151-.082-.219-.089-.088-.171-.108-.472-.108-.197 0-.363-.016-.363-.036 0-.016.026-.177.057-.353l.057-.326 1.25-.026c1.346-.031 1.647-.073 2.497-.352.55-.187 1.373-.565 1.617-.752l.171-.13v-1.86c0-1.648-.01-1.866-.083-1.943-.124-.125-1.176-.622-1.648-.778a13.756 13.756 0 0 0-.855-.248c-.435-.104-.55-.11-5.55-.12-3.42-.01-5.172.005-5.307.042zM12.06 4.148l-.14-.13H2.546l-.15.151c-.16.16-.187.306-.088.487.13.249-.052.239 4.928.244h4.705l.125-.13a.423.423 0 0 0-.006-.622zm4.25.099c-.093.072-.099.16-.114 1.725-.01.907 0 1.7.015 1.762.063.265.114.275 1.244.275.58 0 1.093-.016 1.14-.031.156-.062.752-.902.752-1.068v-.145h2.243c2.115 0 2.254-.005 2.332-.093.135-.145.125-1.047-.005-1.166-.088-.078-.326-.088-2.332-.088h-2.238v-.145c0-.166-.596-1.005-.752-1.068-.047-.015-.56-.03-1.135-.03-.824 0-1.067.015-1.15.072zM2.71 19.399c0 1.69 0 1.705.119 1.882.062.093.197.228.29.29l.177.119h4.036c4.535 0 4.276.02 4.54-.378l.14-.207v-3.38l-4.649-.015-4.653-.01v1.7z"
                        fill="#000"
                        fill-rule="nonzero"
                    ></path>
                </svg>
                Поправка на тип ремонта
            </div>
            <div class="item">
                <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill="#000"
                        fill-rule="nonzero"
                        d="M15.576 17.909v1.942H23V17.91h-1.444L16.64 5l-4.143 7.537L8.358 5 3.44 17.909H2v1.942h7.424V17.91H8.312l1.082-3.22L12.498 20l3.108-5.31 1.082 3.219z"
                    ></path>
                </svg>
                Поправка на расстояние до метро
            </div>
            <div class="item">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                    <path
                        d="M13.349 3.906a1.71 1.71 0 0 0 3.088 0h-3.088zm2.618 14.746h5.127v2.442h-5.127zM3.906 6.445v8.301h2.93V6.445h-2.93zm2.198 7.325H4.639v-1.465h1.465v1.465zm0-2.442H4.639V9.863h1.465v1.465zm0-2.441H4.639V7.422h1.465v1.465zm-2.198 9.765h2.93v2.442h-2.93zm8.301-3.906V11.37l-1.953-2.13-1.953 2.13v3.377zM8.3 18.652h3.907v2.442H8.301zm5.372 0h.83v2.442h-.83z"
                    ></path>
                    <path
                        d="M0 0v25h25V0H0zm22.559 22.559H2.44v-5.372h20.12v5.372zm0-6.348H2.44V2.44h20.12v13.77z"
                    ></path>
                    <path
                        d="M15.967 8.887v5.86h5.127v-5.86h-5.127zm2.441 4.883h-1.465v-1.465h1.465v1.465zm0-2.442h-1.465V9.863h1.465v1.465zm1.953 2.442h-1.465v-1.465h1.465v1.465zm0-2.442h-1.465V9.863h1.465v1.465z"
                    ></path>
                    <path
                        d="M17.98 3.906c-.074.314-.195.61-.355.88l1.592 1.107-.836 1.202-1.788-1.243a3.154 3.154 0 0 1-2.012.48l-.973 2.17-1.337-.598.92-2.053a3.198 3.198 0 0 1-.56-.454l-2.052.67-.455-1.392 1.735-.567a3.149 3.149 0 0 1-.054-.202H3.906v1.075h4.395V9.2l1.953-2.13 3.418 3.728v3.947h.83V7.422h6.592V3.906H17.98z"
                    ></path>
                </svg>
                Поправка на вид из окна
            </div>
            <div class="item">
                <svg xmlns="http://www.w3.org/2000/svg" width="23.438" height="25">
                    <path
                        d="M8.79 8.79h5.858v5.907H8.79zm0-1.466h2.196V4.498A2.926 2.926 0 0 0 8.79 7.324zM12.451 0v3.004c2.074.35 3.662 2.148 3.662 4.32h2.93c0-3.787-2.901-6.95-6.592-7.324zM4.395 7.324h2.93c0-2.172 1.587-3.97 3.661-4.32V0c-3.69.374-6.591 3.537-6.591 7.324zm0 1.466h2.93v5.907h-2.93zm8.056-1.466h2.197a2.926 2.926 0 0 0-2.197-2.826zm3.662 1.466h2.93v5.907h-2.93zM0 24.268c0 .404.328.732.732.732h21.973a.732.732 0 0 0 .733-.732V22.02H0zm5.86-8.106h2.93v4.395H5.86zm4.394 0h2.93v4.395h-2.93zm12.451 0h-3.662v4.395h4.395v-3.662a.732.732 0 0 0-.733-.733zm-18.31 0H.732a.732.732 0 0 0-.732.733v3.662h4.395zm10.253 0h2.93v4.395h-2.93zm0 0"
                    ></path>
                </svg>
                Поправка на количество балконов
            </div>
            <div class="item">
                <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.299 6.476l1.225 1.225L9.376 18.85l-4.9-4.9 1.225-1.225 3.675 3.675L19.3 6.476zm0-2.476l-9.923 9.922-3.675-3.675L2 13.95l7.376 7.376L23 7.701 19.299 4z"
                        fill="#000"
                        fill-rule="nonzero"
                    ></path>
                </svg>
                Финальный коэффициент
            </div>
        </div>
    </div>
</template>

<script>
import analogsParamName from "../configs/analogsParamName.json";
export default {
    props: {
        objects: Object
    },
    data() {
        return {
            paramName: analogsParamName.parameters,
            pathToImage: false
        };
    },
    methods: {
        transformNum(n) {
            let num = Math.round(n);
            num += "";
            num = new Array(4 - (num.length % 3)).join("U") + num;
            return num.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
        },
        transformCorrectionNum(n) {
            return Math.round(n * 100) / 100;
        },
        showModal(path) {
            this.$refs.myModalRef.show();
            this.pathToImage = path;
        },
        hideModal() {
            this.$refs.myModalRef.hide();
        },
        itemUrl(imgName) {
            return require("../assets/img/icons/" + imgName);
        }
    }
};
</script>

<style lang="scss">
.analogs-title {
    h2 {
        font-size: 18px;
        line-height: 20px;
        min-width: 33.33%;
    }
}

.coefficient-list {
    font-size: 0;
    margin-top: 34px;

    .item {
        font-size: 14px;
        line-height: 20px;
        color: #141e30;
        font-weight: 300;
        display: inline-flex;
        align-items: center;
        width: 17.666%;
        padding-right: 20px;
        margin-bottom: 26px;
        letter-spacing: 0.5px;

        img {
            margin-right: 10px;
        }
    }
}

img {
    max-width: inherit;
}

.tooltip {
    display: block !important;
    z-index: 10000;

    .tooltip-inner {
        background: black;
        color: white;
        padding: 5px 10px 4px;
    }

    .tooltip-arrow {
        width: 0;
        height: 0;
        border-style: solid;
        position: absolute;
        margin: 5px;
        border-color: black;
        z-index: 1;
    }

    &[x-placement^="top"] {
        margin-bottom: 5px;

        .tooltip-arrow {
            border-width: 5px 5px 0 5px;
            border-left-color: transparent !important;
            border-right-color: transparent !important;
            border-bottom-color: transparent !important;
            bottom: -5px;
            left: calc(50% - 5px);
            margin-top: 0;
            margin-bottom: 0;
        }
    }

    &[x-placement^="bottom"] {
        margin-top: 5px;

        .tooltip-arrow {
            border-width: 0 5px 5px 5px;
            border-left-color: transparent !important;
            border-right-color: transparent !important;
            border-top-color: transparent !important;
            top: -5px;
            left: calc(50% - 5px);
            margin-top: 0;
            margin-bottom: 0;
        }
    }

    &[x-placement^="right"] {
        margin-left: 5px;

        .tooltip-arrow {
            border-width: 5px 5px 5px 0;
            border-left-color: transparent !important;
            border-top-color: transparent !important;
            border-bottom-color: transparent !important;
            left: -5px;
            top: calc(50% - 5px);
            margin-left: 0;
            margin-right: 0;
        }
    }

    &[x-placement^="left"] {
        margin-right: 5px;

        .tooltip-arrow {
            border-width: 5px 0 5px 5px;
            border-top-color: transparent !important;
            border-right-color: transparent !important;
            border-bottom-color: transparent !important;
            right: -5px;
            top: calc(50% - 5px);
            margin-left: 0;
            margin-right: 0;
        }
    }

    &.popover {
        $color: #f9f9f9;

        .popover-inner {
            background: $color;
            color: black;
            padding: 24px;
            border-radius: 5px;
            box-shadow: 0 5px 30px rgba(black, 0.1);
        }

        .popover-arrow {
            border-color: $color;
        }
    }

    &[aria-hidden="true"] {
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.15s, visibility 0.15s;
    }

    &[aria-hidden="false"] {
        visibility: visible;
        opacity: 1;
        transition: opacity 0.15s;
    }
}
</style>
